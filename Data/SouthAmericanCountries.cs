using FlagsTrainer.Models;

namespace FlagsTrainer.Data;

public static class SouthAmericanCountries
{
    public static List<Country> GetAll() => new()
    {
        new() { Name = "Argentina",  NamePl = "Argentyna",  Capital = "Buenos Aires", CapitalPl = "Buenos Aires", IsoCode = "ar", Region = "South America", Continent = Continent.SouthAmerica },
        new() { Name = "Bolivia",    NamePl = "Boliwia",    Capital = "Sucre",         CapitalPl = "Sucre",        IsoCode = "bo", Region = "South America", Continent = Continent.SouthAmerica },
        new() { Name = "Brazil",     NamePl = "Brazylia",   Capital = "Brasília",      CapitalPl = "Brasília",     IsoCode = "br", Region = "South America", Continent = Continent.SouthAmerica },
        new() { Name = "Chile",      NamePl = "Chile",      Capital = "Santiago",      CapitalPl = "Santiago",     IsoCode = "cl", Region = "South America", Continent = Continent.SouthAmerica },
        new() { Name = "Colombia",   NamePl = "Kolumbia",   Capital = "Bogotá",        CapitalPl = "Bogota",       IsoCode = "co", Region = "South America", Continent = Continent.SouthAmerica },
        new() { Name = "Ecuador",    NamePl = "Ekwador",    Capital = "Quito",         CapitalPl = "Quito",        IsoCode = "ec", Region = "South America", Continent = Continent.SouthAmerica },
        new() { Name = "Guyana",     NamePl = "Gujana",     Capital = "Georgetown",    CapitalPl = "Georgetown",   IsoCode = "gy", Region = "South America", Continent = Continent.SouthAmerica },
        new() { Name = "Paraguay",   NamePl = "Paragwaj",   Capital = "Asunción",      CapitalPl = "Asunción",     IsoCode = "py", Region = "South America", Continent = Continent.SouthAmerica },
        new() { Name = "Peru",       NamePl = "Peru",       Capital = "Lima",          CapitalPl = "Lima",         IsoCode = "pe", Region = "South America", Continent = Continent.SouthAmerica },
        new() { Name = "Suriname",   NamePl = "Surinam",    Capital = "Paramaribo",    CapitalPl = "Paramaribo",   IsoCode = "sr", Region = "South America", Continent = Continent.SouthAmerica },
        new() { Name = "Uruguay",    NamePl = "Urugwaj",    Capital = "Montevideo",    CapitalPl = "Montevideo",   IsoCode = "uy", Region = "South America", Continent = Continent.SouthAmerica },
        new() { Name = "Venezuela",  NamePl = "Wenezuela",  Capital = "Caracas",       CapitalPl = "Caracas",      IsoCode = "ve", Region = "South America", Continent = Continent.SouthAmerica },
    };
}
