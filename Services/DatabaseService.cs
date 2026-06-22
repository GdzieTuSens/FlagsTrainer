using SQLite;
using FlagsTrainer.Models;

namespace FlagsTrainer.Services;

// The only class that talks directly to SQLite.
// All other code goes through this service — keeps the rest of the app db-agnostic.
public class DatabaseService
{
    private SQLiteAsyncConnection? _db;

    // Leitner box → days until next review.
    private static readonly int[] BoxIntervals = { 0, 1, 2, 5, 11, 21 };

    // Lazy initialization: the database file is created the first time it is needed.
    private async Task<SQLiteAsyncConnection> GetDb()
    {
        if (_db is null)
        {
            // FileSystem.AppDataDirectory is the correct per-app writable folder
            // on every platform (Android, iOS, Windows) — no hardcoded paths needed.
            var dbPath = Path.Combine(FileSystem.AppDataDirectory, "flagstrainer.db3");
            _db = new SQLiteAsyncConnection(dbPath);
            await _db.CreateTableAsync<CardProgress>();
        }
        return _db;
    }

    // Returns the progress record for a given ISO code.
    // If the card has never been seen, creates a fresh record (box 1, due now).
    public async Task<CardProgress> GetProgressAsync(string isoCode)
    {
        var db = await GetDb();
        var record = await db.FindAsync<CardProgress>(isoCode);
        if (record is null)
        {
            record = new CardProgress { IsoCode = isoCode };
            await db.InsertAsync(record);
        }
        return record;
    }

    // Loads progress for every card in the given list at once (one DB query).
    public async Task<List<CardProgress>> GetAllProgressAsync(IEnumerable<string> isoCodes)
    {
        var db = await GetDb();
        var all = await db.Table<CardProgress>().ToListAsync();
        var existing = all.ToDictionary(p => p.IsoCode);

        var result = new List<CardProgress>();
        var toInsert = new List<CardProgress>();

        foreach (var code in isoCodes)
        {
            if (existing.TryGetValue(code, out var progress))
            {
                result.Add(progress);
            }
            else
            {
                // First time seeing this card — initialize with defaults.
                var fresh = new CardProgress { IsoCode = code };
                result.Add(fresh);
                toInsert.Add(fresh);
            }
        }

        if (toInsert.Count > 0)
            await db.InsertAllAsync(toInsert);

        return result;
    }

    // Called when the user taps "I know this".
    // Moves the card to the next box (max 5) and schedules a future review.
    public async Task MarkCorrectAsync(string isoCode)
    {
        var db = await GetDb();
        var progress = await GetProgressAsync(isoCode);

        progress.CorrectCount++;
        progress.Box = Math.Min(progress.Box + 1, 5);
        progress.NextReview = DateTime.UtcNow.AddDays(BoxIntervals[progress.Box]);

        await db.UpdateAsync(progress);
    }

    // Called when the user taps "I don't know this".
    // Sends the card back to box 1 and schedules it for tomorrow.
    public async Task MarkWrongAsync(string isoCode)
    {
        var db = await GetDb();
        var progress = await GetProgressAsync(isoCode);

        progress.WrongCount++;
        progress.Box = 1;
        progress.NextReview = DateTime.UtcNow.AddDays(BoxIntervals[1]);

        await db.UpdateAsync(progress);
    }

    // Deletes all progress records — every card goes back to box 1, due immediately.
    public async Task ResetAllProgressAsync()
    {
        var db = await GetDb();
        await db.DeleteAllAsync<CardProgress>();
    }

    // Returns only the cards that are due for review today (or overdue).
    // If there are none, returns all cards (so the session is never empty).
    public async Task<List<string>> GetDueIsoCodesAsync(IEnumerable<string> allIsoCodes)
    {
        var progressList = await GetAllProgressAsync(allIsoCodes);
        var due = progressList.Where(p => p.IsDue).Select(p => p.IsoCode).ToList();
        return due.Count > 0 ? due : allIsoCodes.ToList();
    }
}
