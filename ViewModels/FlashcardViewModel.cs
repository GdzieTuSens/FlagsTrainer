using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using FlagsTrainer.Data;
using FlagsTrainer.Models;
using FlagsTrainer.Services;

namespace FlagsTrainer.ViewModels;

// QueryProperty maps URL query params from Shell navigation onto these properties.
// e.g. "flashcard?polish=True&mode=0" sets UsePolish=true and StudyMode=FlagToCountry.
[QueryProperty(nameof(UsePolish), "polish")]
[QueryProperty(nameof(StudyModeValue), "mode")]
[QueryProperty(nameof(ContinentValues), "continents")]
public partial class FlashcardViewModel : ObservableObject
{
    private readonly DatabaseService _db;
    private List<Country> _deck = new();
    private int _index;
    private bool _initialized;

    // ── Settings received from navigation ─────────────────────────────────────

    // Shell sets these as strings; we parse them in the setters.
    public string UsePolish
    {
        set
        {
            _usePolish = bool.TryParse(value, out var b) ? b : true;
            TryInitialize();
        }
    }
    private bool _usePolish = true;

    public string StudyModeValue
    {
        set
        {
            _mode = int.TryParse(value, out var i) ? (StudyMode)i : StudyMode.FlagToCountry;
            NotifyModeProperties();
            TryInitialize();
        }
    }
    private StudyMode _mode = StudyMode.FlagToCountry;

    // Receives comma-separated ints, e.g. "1,3" = Europe + Asia.
    public string ContinentValues
    {
        set
        {
            _continents = value
                .Split(',', StringSplitOptions.RemoveEmptyEntries)
                .Select(s => int.TryParse(s, out var i) ? (Continent)i : Continent.Europe)
                .ToHashSet();
            TryInitialize();
        }
    }
    private HashSet<Continent> _continents = new() { Continent.Europe };

    // ── Card state ────────────────────────────────────────────────────────────

    [ObservableProperty]
    public partial Country? CurrentCountry { get; set; }

    [ObservableProperty]
    [NotifyPropertyChangedFor(nameof(IsNotFlipped))]
    [NotifyPropertyChangedFor(nameof(AnswerButtonsVisible))]
    public partial bool IsFlipped { get; set; }

    public bool IsNotFlipped => !IsFlipped;
    public bool AnswerButtonsVisible => IsFlipped;

    // ── What to show on front / back depending on mode ────────────────────────

    // Front of the card
    public string FrontText => _mode switch
    {
        StudyMode.CountryToFlag   => CurrentCountry?.GetName(_usePolish) ?? "",
        StudyMode.CapitalToCountry => CurrentCountry?.GetCapital(_usePolish) ?? "",
        _ => "" // FlagToCountry: front is an image, handled in XAML
    };

    // Back of the card
    public string BackNameText    => CurrentCountry?.GetName(_usePolish) ?? "";
    public string BackCapitalText => CurrentCountry?.GetCapital(_usePolish) ?? "";

    // Visibility helpers for XAML (each mode shows different elements)
    public bool ShowFlagOnFront  => _mode == StudyMode.FlagToCountry;
    public bool ShowTextOnFront  => _mode != StudyMode.FlagToCountry;
    public bool ShowFlagOnBack   => _mode != StudyMode.FlagToCountry;
    public bool ShowNameOnBack   => _mode != StudyMode.CountryToFlag;
    public bool ShowCapitalOnBack => true; // always shown on back

    // Labels for front/back hints
    public string FrontHint => "Dotknij, aby zobaczyć odpowiedź";
    public string BackHint  => "Czy znałeś odpowiedź?";

    // ── Session statistics ────────────────────────────────────────────────────

    [ObservableProperty]
    [NotifyPropertyChangedFor(nameof(ProgressText))]
    public partial int SessionCorrect { get; set; }

    [ObservableProperty]
    [NotifyPropertyChangedFor(nameof(ProgressText))]
    public partial int SessionWrong { get; set; }

    public string ProgressText =>
        $"Karta {_index + 1} / {_deck.Count}   ✓ {SessionCorrect}   ✗ {SessionWrong}";

    // ── Loading state ─────────────────────────────────────────────────────────

    [ObservableProperty]
    [NotifyPropertyChangedFor(nameof(IsNotLoading))]
    public partial bool IsLoading { get; set; } = true;

    public bool IsNotLoading => !IsLoading;

    // ── Constructor ───────────────────────────────────────────────────────────

    public FlashcardViewModel(DatabaseService db)
    {
        _db = db;
    }

    // Shell sets QueryProperties one at a time; we wait until both are set.
    private int _paramsReceived;
    private void TryInitialize()
    {
        _paramsReceived++;
        if (_paramsReceived >= 3 && !_initialized)
        {
            _initialized = true;
            _ = InitializeAsync().ContinueWith(t =>
            {
                if (t.IsFaulted)
                    System.Diagnostics.Debug.WriteLine($"[FlashcardViewModel] Init error: {t.Exception}");
            });
        }
    }

    private async Task InitializeAsync()
    {
        var allCountries = WorldCountries.GetByContinents(_continents);
        var allCodes = allCountries.Select(c => c.IsoCode);

        var dueCodes = await _db.GetDueIsoCodesAsync(allCodes);
        var dueSet = dueCodes.ToHashSet();

        _deck = allCountries
            .Where(c => dueSet.Contains(c.IsoCode))
            .OrderBy(_ => Random.Shared.Next())
            .ToList();

        _index = 0;
        LoadCard();
        IsLoading = false;
    }

    private void LoadCard()
    {
        CurrentCountry = _deck[_index];
        OnPropertyChanged(nameof(FrontText));
        OnPropertyChanged(nameof(BackNameText));
        OnPropertyChanged(nameof(BackCapitalText));
        OnPropertyChanged(nameof(ProgressText));
        NotifyModeProperties();
    }

    // Refreshes all visibility properties that depend on the current study mode.
    // Must be called whenever _mode changes AND whenever a new card loads.
    private void NotifyModeProperties()
    {
        OnPropertyChanged(nameof(ShowFlagOnFront));
        OnPropertyChanged(nameof(ShowTextOnFront));
        OnPropertyChanged(nameof(ShowFlagOnBack));
        OnPropertyChanged(nameof(ShowNameOnBack));
        OnPropertyChanged(nameof(ShowCapitalOnBack));
    }

    // ── Commands ──────────────────────────────────────────────────────────────

    [RelayCommand]
    private void Flip() => IsFlipped = !IsFlipped;

    [RelayCommand]
    private async Task KnowAsync()
    {
        if (CurrentCountry is null) return;
        await _db.MarkCorrectAsync(CurrentCountry.IsoCode);
        SessionCorrect++;
        AdvanceCard();
    }

    [RelayCommand]
    private async Task DontKnowAsync()
    {
        if (CurrentCountry is null) return;
        await _db.MarkWrongAsync(CurrentCountry.IsoCode);
        SessionWrong++;
        AdvanceCard();
    }

    private void AdvanceCard()
    {
        _index = (_index + 1) % _deck.Count;
        IsFlipped = false;
        LoadCard();
    }
}
