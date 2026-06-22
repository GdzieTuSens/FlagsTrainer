namespace FlagsTrainer.Models;

public class Country
{
    public string Name { get; set; } = string.Empty;       // English name, e.g. "Germany"
    public string Capital { get; set; } = string.Empty;    // English capital, e.g. "Berlin"
    public string NamePl { get; set; } = string.Empty;     // Polish name, e.g. "Niemcy"
    public string CapitalPl { get; set; } = string.Empty;  // Polish capital, e.g. "Berlin"
    public string IsoCode { get; set; } = string.Empty;    // ISO 3166-1 alpha-2, e.g. "de"
    public string Region { get; set; } = string.Empty;     // e.g. "Central Europe"
    public Continent Continent { get; set; } = Continent.Europe;

    public string FlagImage => $"{IsoCode}.png";

    // Returns the display name in the requested language.
    public string GetName(bool polish) => polish ? NamePl : Name;
    public string GetCapital(bool polish) => polish ? CapitalPl : Capital;
}
