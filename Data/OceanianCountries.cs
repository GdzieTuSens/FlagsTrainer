using FlagsTrainer.Models;

namespace FlagsTrainer.Data;

public static class OceanianCountries
{
    public static List<Country> GetAll() => new()
    {
        new() { Name = "Australia",         NamePl = "Australia",          Capital = "Canberra",     CapitalPl = "Canberra",    IsoCode = "au", Region = "Oceania", Continent = Continent.Oceania },
        new() { Name = "Fiji",              NamePl = "Fidżi",              Capital = "Suva",         CapitalPl = "Suwa",        IsoCode = "fj", Region = "Oceania", Continent = Continent.Oceania },
        new() { Name = "Kiribati",          NamePl = "Kiribati",           Capital = "South Tarawa", CapitalPl = "Tarawa",      IsoCode = "ki", Region = "Oceania", Continent = Continent.Oceania },
        new() { Name = "Marshall Islands",  NamePl = "Wyspy Marshalla",    Capital = "Majuro",       CapitalPl = "Majuro",      IsoCode = "mh", Region = "Oceania", Continent = Continent.Oceania },
        new() { Name = "Micronesia",        NamePl = "Mikronezja",         Capital = "Palikir",      CapitalPl = "Palikir",     IsoCode = "fm", Region = "Oceania", Continent = Continent.Oceania },
        new() { Name = "Nauru",             NamePl = "Nauru",              Capital = "Yaren",        CapitalPl = "Yaren",       IsoCode = "nr", Region = "Oceania", Continent = Continent.Oceania },
        new() { Name = "New Zealand",       NamePl = "Nowa Zelandia",      Capital = "Wellington",   CapitalPl = "Wellington",  IsoCode = "nz", Region = "Oceania", Continent = Continent.Oceania },
        new() { Name = "Palau",             NamePl = "Palau",              Capital = "Ngerulmud",    CapitalPl = "Ngerulmud",   IsoCode = "pw", Region = "Oceania", Continent = Continent.Oceania },
        new() { Name = "Papua New Guinea",  NamePl = "Papua Nowa Gwinea",  Capital = "Port Moresby", CapitalPl = "Port Moresby",IsoCode = "pg", Region = "Oceania", Continent = Continent.Oceania },
        new() { Name = "Samoa",             NamePl = "Samoa",              Capital = "Apia",         CapitalPl = "Apia",        IsoCode = "ws", Region = "Oceania", Continent = Continent.Oceania },
        new() { Name = "Solomon Islands",   NamePl = "Wyspy Salomona",     Capital = "Honiara",      CapitalPl = "Honiara",     IsoCode = "sb", Region = "Oceania", Continent = Continent.Oceania },
        new() { Name = "Tonga",             NamePl = "Tonga",              Capital = "Nukuʻalofa",   CapitalPl = "Nukualofa",   IsoCode = "to", Region = "Oceania", Continent = Continent.Oceania },
        new() { Name = "Tuvalu",            NamePl = "Tuvalu",             Capital = "Funafuti",     CapitalPl = "Funafuti",    IsoCode = "tv", Region = "Oceania", Continent = Continent.Oceania },
        new() { Name = "Vanuatu",           NamePl = "Vanuatu",            Capital = "Port Vila",    CapitalPl = "Port Vila",   IsoCode = "vu", Region = "Oceania", Continent = Continent.Oceania },
    };
}
