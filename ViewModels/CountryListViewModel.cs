using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using FlagsTrainer.Data;
using FlagsTrainer.Models;
using FlagsTrainer.Services;

namespace FlagsTrainer.ViewModels;

// Wraps a Continent enum value. Holds its own IsSelected state so each chip
// in the horizontal scroll can independently show the highlight.
public class ContinentOption : ObservableObject
{
    private readonly Continent _continent;

    public string EnumName { get; }

    private bool _isSelected;
    public bool IsSelected
    {
        get => _isSelected;
        private set => SetProperty(ref _isSelected, value);
    }

    private string _label = "";
    public string Label
    {
        get => _label;
        private set => SetProperty(ref _label, value);
    }

    // Each chip owns its command — avoids complex AncestorType bindings in XAML.
    public System.Windows.Input.ICommand SelectCommand { get; }

    public ContinentOption(Continent continent, bool polish, System.Windows.Input.ICommand selectCommand)
    {
        _continent = continent;
        EnumName = continent.ToString();
        SelectCommand = selectCommand;
        UpdateLabel(polish);
    }

    public void UpdateLabel(bool polish) =>
        Label = $"{_continent.Emoji()}  {_continent.DisplayName(polish)}";

    public void UpdateSelection(HashSet<Continent> selected) =>
        IsSelected = selected.Contains(_continent);
}

public partial class CountryListViewModel : ObservableObject
{
    private readonly SettingsService _settings;
    private readonly DatabaseService _db;

    // ── Language ──────────────────────────────────────────────────────────────

    [ObservableProperty]
    public partial bool UsePolish { get; set; }

    public string LanguageLabel => UsePolish ? "🇵🇱 Polski" : "🇬🇧 English";

    partial void OnUsePolishChanged(bool value)
    {
        _settings.UsePolish = value;
        OnPropertyChanged(nameof(LanguageLabel));
        foreach (var opt in ContinentOptions)
            opt.UpdateLabel(value);
        OnPropertyChanged(nameof(ModeFlagToCountry));
        OnPropertyChanged(nameof(ModeCountryToFlag));
        OnPropertyChanged(nameof(ModeCapitalToCountry));
    }

    // ── Continent (multi-select) ──────────────────────────────────────────────

    // The live set of selected continents — drives chip highlight and session filtering.
    private HashSet<Continent> _selectedContinents = new();

    // Built once in constructor; chips update themselves via UpdateSelection().
    public List<ContinentOption> ContinentOptions { get; }

    private void ApplyContinentSelection()
    {
        foreach (var opt in ContinentOptions)
            opt.UpdateSelection(_selectedContinents);
        _settings.SelectedContinents = _selectedContinents;
    }

    // ── Study mode ────────────────────────────────────────────────────────────

    [ObservableProperty]
    public partial StudyMode SelectedMode { get; set; }

    partial void OnSelectedModeChanged(StudyMode value)
    {
        _settings.StudyMode = value;
        OnPropertyChanged(nameof(ModeFlagToCountry));
        OnPropertyChanged(nameof(ModeCountryToFlag));
        OnPropertyChanged(nameof(ModeCapitalToCountry));
    }

    public bool ModeFlagToCountry
    {
        get => SelectedMode == StudyMode.FlagToCountry;
        set { if (value) SelectedMode = StudyMode.FlagToCountry; }
    }
    public bool ModeCountryToFlag
    {
        get => SelectedMode == StudyMode.CountryToFlag;
        set { if (value) SelectedMode = StudyMode.CountryToFlag; }
    }
    public bool ModeCapitalToCountry
    {
        get => SelectedMode == StudyMode.CapitalToCountry;
        set { if (value) SelectedMode = StudyMode.CapitalToCountry; }
    }

    // ── Constructor ───────────────────────────────────────────────────────────

    public CountryListViewModel(SettingsService settings, DatabaseService db)
    {
        _settings = settings;
        _db = db;

        // Build continent options BEFORE setting SelectedContinent so
        // OnSelectedContinentChanged can immediately update IsSelected on each chip.
        ContinentOptions = Enum.GetValues<Continent>()
            .Select(c => new ContinentOption(c, settings.UsePolish, SelectContinentCommand))
            .ToList();

        UsePolish = settings.UsePolish;
        SelectedMode = settings.StudyMode;
        _selectedContinents = settings.SelectedContinents;
        ApplyContinentSelection();
    }

    // ── Commands ──────────────────────────────────────────────────────────────

    [RelayCommand]
    private void ToggleLanguage() => UsePolish = !UsePolish;

    [RelayCommand]
    private void SelectContinent(string continentString)
    {
        if (!Enum.TryParse<Continent>(continentString, out var continent)) return;

        if (continent == Continent.All)
        {
            // "All" clears individual selections — show every country.
            _selectedContinents.Clear();
            _selectedContinents.Add(Continent.All);
        }
        else
        {
            _selectedContinents.Remove(Continent.All); // individual pick overrides "All"

            if (!_selectedContinents.Remove(continent)) // already selected → toggle off
                _selectedContinents.Add(continent);    // not selected → toggle on

            if (_selectedContinents.Count == 0)        // nothing left → fall back to All
                _selectedContinents.Add(Continent.All);
        }

        ApplyContinentSelection();
    }

    [RelayCommand]
    private void SelectMode(string modeString)
    {
        if (Enum.TryParse<StudyMode>(modeString, out var mode))
            SelectedMode = mode;
    }

    [RelayCommand]
    private async Task ResetProgressAsync()
    {
        bool confirmed = await Shell.Current.DisplayAlertAsync(
            "Resetuj postęp",
            "Czy na pewno chcesz zresetować cały postęp? Wszystkie karty wrócą do skrzynki 1.",
            "Tak, resetuj",
            "Anuluj");
        if (!confirmed) return;
        await _db.ResetAllProgressAsync();
        await Shell.Current.DisplayAlertAsync("Gotowe", "Postęp został zresetowany.", "OK");
    }

    [RelayCommand]
    private async Task StartLearningAsync()
    {
        // Pass selected continents as comma-separated ints, e.g. "1,3".
        var continentsParam = string.Join(",", _selectedContinents.Select(c => (int)c));
        await Shell.Current.GoToAsync(
            $"flashcard?polish={UsePolish}&mode={(int)SelectedMode}&continents={continentsParam}");
    }
}
