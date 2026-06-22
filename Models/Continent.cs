namespace FlagsTrainer.Models;

public enum Continent
{
    All,
    Europe,
    Africa,
    Asia,
    NorthAmerica,
    SouthAmerica,
    Oceania
}

// Extension methods so we can easily get display names without a converter.
public static class ContinentExtensions
{
    public static string DisplayName(this Continent continent, bool polish) => continent switch
    {
        Continent.All          => polish ? "Wszystkie"          : "All",
        Continent.Europe       => polish ? "Europa"             : "Europe",
        Continent.Africa       => polish ? "Afryka"             : "Africa",
        Continent.Asia         => polish ? "Azja"               : "Asia",
        Continent.NorthAmerica => polish ? "Ameryka Północna"   : "North America",
        Continent.SouthAmerica => polish ? "Ameryka Południowa" : "South America",
        Continent.Oceania      => polish ? "Oceania"            : "Oceania",
        _                      => continent.ToString()
    };

    public static string Emoji(this Continent continent) => continent switch
    {
        Continent.All          => "🌍",
        Continent.Europe       => "🇪🇺",
        Continent.Africa       => "🌍",
        Continent.Asia         => "🌏",
        Continent.NorthAmerica => "🌎",
        Continent.SouthAmerica => "🌎",
        Continent.Oceania      => "🌊",
        _                      => "🌐"
    };
}
