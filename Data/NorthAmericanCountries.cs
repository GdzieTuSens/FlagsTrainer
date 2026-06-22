using FlagsTrainer.Models;

namespace FlagsTrainer.Data;

public static class NorthAmericanCountries
{
    public static List<Country> GetAll() => new()
    {
        new() { Name = "Antigua and Barbuda",           NamePl = "Antigua i Barbuda",             Capital = "St. John's",      CapitalPl = "Saint John's",  IsoCode = "ag", Region = "Caribbean",      Continent = Continent.NorthAmerica },
        new() { Name = "Bahamas",                        NamePl = "Bahamy",                        Capital = "Nassau",          CapitalPl = "Nassau",        IsoCode = "bs", Region = "Caribbean",      Continent = Continent.NorthAmerica },
        new() { Name = "Barbados",                       NamePl = "Barbados",                      Capital = "Bridgetown",      CapitalPl = "Bridgetown",    IsoCode = "bb", Region = "Caribbean",      Continent = Continent.NorthAmerica },
        new() { Name = "Belize",                         NamePl = "Belize",                        Capital = "Belmopan",        CapitalPl = "Belmopan",      IsoCode = "bz", Region = "Central America",Continent = Continent.NorthAmerica },
        new() { Name = "Canada",                         NamePl = "Kanada",                        Capital = "Ottawa",          CapitalPl = "Ottawa",        IsoCode = "ca", Region = "North America",  Continent = Continent.NorthAmerica },
        new() { Name = "Costa Rica",                     NamePl = "Kostaryka",                     Capital = "San José",        CapitalPl = "San José",      IsoCode = "cr", Region = "Central America",Continent = Continent.NorthAmerica },
        new() { Name = "Cuba",                           NamePl = "Kuba",                          Capital = "Havana",          CapitalPl = "Hawana",        IsoCode = "cu", Region = "Caribbean",      Continent = Continent.NorthAmerica },
        new() { Name = "Dominica",                       NamePl = "Dominika",                      Capital = "Roseau",          CapitalPl = "Roseau",        IsoCode = "dm", Region = "Caribbean",      Continent = Continent.NorthAmerica },
        new() { Name = "Dominican Republic",             NamePl = "Dominikana",                    Capital = "Santo Domingo",   CapitalPl = "Santo Domingo", IsoCode = "do", Region = "Caribbean",      Continent = Continent.NorthAmerica },
        new() { Name = "El Salvador",                    NamePl = "Salwador",                      Capital = "San Salvador",    CapitalPl = "San Salvador",  IsoCode = "sv", Region = "Central America",Continent = Continent.NorthAmerica },
        new() { Name = "Grenada",                        NamePl = "Grenada",                       Capital = "St. George's",    CapitalPl = "Saint George's",IsoCode = "gd", Region = "Caribbean",      Continent = Continent.NorthAmerica },
        new() { Name = "Guatemala",                      NamePl = "Gwatemala",                     Capital = "Guatemala City",  CapitalPl = "Gwatemala",     IsoCode = "gt", Region = "Central America",Continent = Continent.NorthAmerica },
        new() { Name = "Haiti",                          NamePl = "Haiti",                         Capital = "Port-au-Prince",  CapitalPl = "Port-au-Prince",IsoCode = "ht", Region = "Caribbean",      Continent = Continent.NorthAmerica },
        new() { Name = "Honduras",                       NamePl = "Honduras",                      Capital = "Tegucigalpa",     CapitalPl = "Tegucigalpa",   IsoCode = "hn", Region = "Central America",Continent = Continent.NorthAmerica },
        new() { Name = "Jamaica",                        NamePl = "Jamajka",                       Capital = "Kingston",        CapitalPl = "Kingston",      IsoCode = "jm", Region = "Caribbean",      Continent = Continent.NorthAmerica },
        new() { Name = "Mexico",                         NamePl = "Meksyk",                        Capital = "Mexico City",     CapitalPl = "Meksyk",        IsoCode = "mx", Region = "North America",  Continent = Continent.NorthAmerica },
        new() { Name = "Nicaragua",                      NamePl = "Nikaragua",                     Capital = "Managua",         CapitalPl = "Managua",       IsoCode = "ni", Region = "Central America",Continent = Continent.NorthAmerica },
        new() { Name = "Panama",                         NamePl = "Panama",                        Capital = "Panama City",     CapitalPl = "Panama",        IsoCode = "pa", Region = "Central America",Continent = Continent.NorthAmerica },
        new() { Name = "Saint Kitts and Nevis",          NamePl = "Saint Kitts i Nevis",           Capital = "Basseterre",      CapitalPl = "Basseterre",    IsoCode = "kn", Region = "Caribbean",      Continent = Continent.NorthAmerica },
        new() { Name = "Saint Lucia",                    NamePl = "Saint Lucia",                   Capital = "Castries",        CapitalPl = "Castries",      IsoCode = "lc", Region = "Caribbean",      Continent = Continent.NorthAmerica },
        new() { Name = "Saint Vincent and the Grenadines", NamePl = "Saint Vincent i Grenadyny",  Capital = "Kingstown",       CapitalPl = "Kingstown",     IsoCode = "vc", Region = "Caribbean",      Continent = Continent.NorthAmerica },
        new() { Name = "Trinidad and Tobago",            NamePl = "Trynidad i Tobago",             Capital = "Port of Spain",   CapitalPl = "Port of Spain", IsoCode = "tt", Region = "Caribbean",      Continent = Continent.NorthAmerica },
        new() { Name = "United States",                  NamePl = "Stany Zjednoczone",             Capital = "Washington D.C.", CapitalPl = "Waszyngton",    IsoCode = "us", Region = "North America",  Continent = Continent.NorthAmerica },
    };
}
