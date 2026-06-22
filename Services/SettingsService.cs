using FlagsTrainer.Models;

namespace FlagsTrainer.Services;

// Persists user preferences using MAUI Preferences (key-value store backed by
// SharedPreferences on Android, NSUserDefaults on iOS, and the registry on Windows).
public class SettingsService
{
    private const string KeyPolish = "use_polish";
    private const string KeyStudyMode = "study_mode";
    private const string KeyContinent = "continent";

    public bool UsePolish
    {
        get => Preferences.Get(KeyPolish, true); // default: Polish
        set => Preferences.Set(KeyPolish, value);
    }

    public StudyMode StudyMode
    {
        get => (StudyMode)Preferences.Get(KeyStudyMode, (int)StudyMode.FlagToCountry);
        set => Preferences.Set(KeyStudyMode, (int)value);
    }

    // Stored as comma-separated ints, e.g. "1,3" = Europe + Asia.
    public HashSet<Continent> SelectedContinents
    {
        get
        {
            var raw = Preferences.Get(KeyContinent, ((int)Continent.Europe).ToString());
            return raw.Split(',', StringSplitOptions.RemoveEmptyEntries)
                      .Select(s => int.TryParse(s, out var i) ? (Continent)i : Continent.Europe)
                      .ToHashSet();
        }
        set
        {
            Preferences.Set(KeyContinent, string.Join(",", value.Select(c => (int)c)));
        }
    }
}
