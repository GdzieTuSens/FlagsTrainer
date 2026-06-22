using SQLite;

namespace FlagsTrainer.Models;

// Stores the learning state for one country card.
// Each row in the database represents one card's progress.
[Table("CardProgress")]
public class CardProgress
{
    // SQLite requires a primary key. We use the ISO code (e.g. "pl") because
    // it's already unique and human-readable — no need for a random integer id.
    [PrimaryKey]
    public string IsoCode { get; set; } = string.Empty;

    // Leitner box number: 1 (hardest / most frequent) to 5 (easiest / least frequent).
    // All new cards start at box 1.
    public int Box { get; set; } = 1;

    // The date when this card is due for review again.
    // Stored as UTC ticks (long) because SQLite has no native DateTime type.
    public long NextReviewTicks { get; set; } = DateTime.UtcNow.Ticks;

    // Total number of times the user answered "I know this".
    public int CorrectCount { get; set; } = 0;

    // Total number of times the user answered "I don't know this".
    public int WrongCount { get; set; } = 0;

    // Convenience property — not stored in DB, computed on the fly.
    [Ignore]
    public DateTime NextReview
    {
        get => new DateTime(NextReviewTicks, DateTimeKind.Utc);
        set => NextReviewTicks = value.Ticks;
    }

    // True when the card is scheduled for today or earlier.
    [Ignore]
    public bool IsDue => NextReview <= DateTime.UtcNow;
}
