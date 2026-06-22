using FlagsTrainer.Models;

namespace FlagsTrainer.Data;

public static class EuropeanCountries
{
    public static List<Country> GetAll() => new()
    {
        // Northern Europe
        new() { Name = "Denmark",        NamePl = "Dania",              Capital = "Copenhagen", CapitalPl = "Kopenhaga",  IsoCode = "dk", Region = "Northern Europe",  Continent = Continent.Europe },
        new() { Name = "Estonia",        NamePl = "Estonia",            Capital = "Tallinn",    CapitalPl = "Tallin",     IsoCode = "ee", Region = "Northern Europe",  Continent = Continent.Europe },
        new() { Name = "Finland",        NamePl = "Finlandia",          Capital = "Helsinki",   CapitalPl = "Helsinki",   IsoCode = "fi", Region = "Northern Europe",  Continent = Continent.Europe },
        new() { Name = "Iceland",        NamePl = "Islandia",           Capital = "Reykjavik",  CapitalPl = "Reykjavik",  IsoCode = "is", Region = "Northern Europe",  Continent = Continent.Europe },
        new() { Name = "Ireland",        NamePl = "Irlandia",           Capital = "Dublin",     CapitalPl = "Dublin",     IsoCode = "ie", Region = "Northern Europe",  Continent = Continent.Europe },
        new() { Name = "Latvia",         NamePl = "Łotwa",              Capital = "Riga",       CapitalPl = "Ryga",       IsoCode = "lv", Region = "Northern Europe",  Continent = Continent.Europe },
        new() { Name = "Lithuania",      NamePl = "Litwa",              Capital = "Vilnius",    CapitalPl = "Wilno",      IsoCode = "lt", Region = "Northern Europe",  Continent = Continent.Europe },
        new() { Name = "Norway",         NamePl = "Norwegia",           Capital = "Oslo",       CapitalPl = "Oslo",       IsoCode = "no", Region = "Northern Europe",  Continent = Continent.Europe },
        new() { Name = "Sweden",         NamePl = "Szwecja",            Capital = "Stockholm",  CapitalPl = "Sztokholm",  IsoCode = "se", Region = "Northern Europe",  Continent = Continent.Europe },
        new() { Name = "United Kingdom", NamePl = "Wielka Brytania",    Capital = "London",     CapitalPl = "Londyn",     IsoCode = "gb", Region = "Northern Europe",  Continent = Continent.Europe },
        // Western Europe
        new() { Name = "Austria",        NamePl = "Austria",            Capital = "Vienna",     CapitalPl = "Wiedeń",     IsoCode = "at", Region = "Western Europe",   Continent = Continent.Europe },
        new() { Name = "Belgium",        NamePl = "Belgia",             Capital = "Brussels",   CapitalPl = "Bruksela",   IsoCode = "be", Region = "Western Europe",   Continent = Continent.Europe },
        new() { Name = "France",         NamePl = "Francja",            Capital = "Paris",      CapitalPl = "Paryż",      IsoCode = "fr", Region = "Western Europe",   Continent = Continent.Europe },
        new() { Name = "Germany",        NamePl = "Niemcy",             Capital = "Berlin",     CapitalPl = "Berlin",     IsoCode = "de", Region = "Western Europe",   Continent = Continent.Europe },
        new() { Name = "Liechtenstein",  NamePl = "Liechtenstein",      Capital = "Vaduz",      CapitalPl = "Vaduz",      IsoCode = "li", Region = "Western Europe",   Continent = Continent.Europe },
        new() { Name = "Luxembourg",     NamePl = "Luksemburg",         Capital = "Luxembourg", CapitalPl = "Luksemburg", IsoCode = "lu", Region = "Western Europe",   Continent = Continent.Europe },
        new() { Name = "Monaco",         NamePl = "Monako",             Capital = "Monaco",     CapitalPl = "Monako",     IsoCode = "mc", Region = "Western Europe",   Continent = Continent.Europe },
        new() { Name = "Netherlands",    NamePl = "Holandia",           Capital = "Amsterdam",  CapitalPl = "Amsterdam",  IsoCode = "nl", Region = "Western Europe",   Continent = Continent.Europe },
        new() { Name = "Portugal",       NamePl = "Portugalia",         Capital = "Lisbon",     CapitalPl = "Lizbona",    IsoCode = "pt", Region = "Western Europe",   Continent = Continent.Europe },
        new() { Name = "Switzerland",    NamePl = "Szwajcaria",         Capital = "Bern",       CapitalPl = "Berno",      IsoCode = "ch", Region = "Western Europe",   Continent = Continent.Europe },
        // Southern Europe
        new() { Name = "Albania",                NamePl = "Albania",              Capital = "Tirana",           CapitalPl = "Tirana",         IsoCode = "al", Region = "Southern Europe",  Continent = Continent.Europe },
        new() { Name = "Andorra",                NamePl = "Andora",               Capital = "Andorra la Vella", CapitalPl = "Andora la Vella",IsoCode = "ad", Region = "Southern Europe",  Continent = Continent.Europe },
        new() { Name = "Bosnia and Herzegovina", NamePl = "Bośnia i Hercegowina", Capital = "Sarajevo",         CapitalPl = "Sarajewo",       IsoCode = "ba", Region = "Southern Europe",  Continent = Continent.Europe },
        new() { Name = "Croatia",                NamePl = "Chorwacja",            Capital = "Zagreb",           CapitalPl = "Zagrzeb",        IsoCode = "hr", Region = "Southern Europe",  Continent = Continent.Europe },
        new() { Name = "Cyprus",                 NamePl = "Cypr",                 Capital = "Nicosia",          CapitalPl = "Nikozja",        IsoCode = "cy", Region = "Southern Europe",  Continent = Continent.Europe },
        new() { Name = "Greece",                 NamePl = "Grecja",               Capital = "Athens",           CapitalPl = "Ateny",          IsoCode = "gr", Region = "Southern Europe",  Continent = Continent.Europe },
        new() { Name = "Italy",                  NamePl = "Włochy",               Capital = "Rome",             CapitalPl = "Rzym",           IsoCode = "it", Region = "Southern Europe",  Continent = Continent.Europe },
        new() { Name = "Kosovo",                 NamePl = "Kosowo",               Capital = "Pristina",         CapitalPl = "Prisztina",      IsoCode = "xk", Region = "Southern Europe",  Continent = Continent.Europe },
        new() { Name = "Malta",                  NamePl = "Malta",                Capital = "Valletta",         CapitalPl = "Valletta",       IsoCode = "mt", Region = "Southern Europe",  Continent = Continent.Europe },
        new() { Name = "Montenegro",             NamePl = "Czarnogóra",           Capital = "Podgorica",        CapitalPl = "Podgorica",      IsoCode = "me", Region = "Southern Europe",  Continent = Continent.Europe },
        new() { Name = "North Macedonia",        NamePl = "Macedonia Północna",   Capital = "Skopje",           CapitalPl = "Skopje",         IsoCode = "mk", Region = "Southern Europe",  Continent = Continent.Europe },
        new() { Name = "San Marino",             NamePl = "San Marino",           Capital = "San Marino",       CapitalPl = "San Marino",     IsoCode = "sm", Region = "Southern Europe",  Continent = Continent.Europe },
        new() { Name = "Serbia",                 NamePl = "Serbia",               Capital = "Belgrade",         CapitalPl = "Belgrad",        IsoCode = "rs", Region = "Southern Europe",  Continent = Continent.Europe },
        new() { Name = "Slovenia",               NamePl = "Słowenia",             Capital = "Ljubljana",        CapitalPl = "Lublana",        IsoCode = "si", Region = "Southern Europe",  Continent = Continent.Europe },
        new() { Name = "Spain",                  NamePl = "Hiszpania",            Capital = "Madrid",           CapitalPl = "Madryt",         IsoCode = "es", Region = "Southern Europe",  Continent = Continent.Europe },
        new() { Name = "Vatican City",           NamePl = "Watykan",              Capital = "Vatican City",     CapitalPl = "Watykan",        IsoCode = "va", Region = "Southern Europe",  Continent = Continent.Europe },
        // Central Europe
        new() { Name = "Czechia",        NamePl = "Czechy",             Capital = "Prague",      CapitalPl = "Praga",      IsoCode = "cz", Region = "Central Europe",   Continent = Continent.Europe },
        new() { Name = "Hungary",        NamePl = "Węgry",              Capital = "Budapest",    CapitalPl = "Budapeszt",  IsoCode = "hu", Region = "Central Europe",   Continent = Continent.Europe },
        new() { Name = "Poland",         NamePl = "Polska",             Capital = "Warsaw",      CapitalPl = "Warszawa",   IsoCode = "pl", Region = "Central Europe",   Continent = Continent.Europe },
        new() { Name = "Slovakia",       NamePl = "Słowacja",           Capital = "Bratislava",  CapitalPl = "Bratysława", IsoCode = "sk", Region = "Central Europe",   Continent = Continent.Europe },
        // Eastern Europe
        new() { Name = "Belarus",        NamePl = "Białoruś",           Capital = "Minsk",       CapitalPl = "Mińsk",      IsoCode = "by", Region = "Eastern Europe",   Continent = Continent.Europe },
        new() { Name = "Bulgaria",       NamePl = "Bułgaria",           Capital = "Sofia",       CapitalPl = "Sofia",      IsoCode = "bg", Region = "Eastern Europe",   Continent = Continent.Europe },
        new() { Name = "Moldova",        NamePl = "Mołdawia",           Capital = "Chișinău",    CapitalPl = "Kiszyniów",  IsoCode = "md", Region = "Eastern Europe",   Continent = Continent.Europe },
        new() { Name = "Romania",        NamePl = "Rumunia",            Capital = "Bucharest",   CapitalPl = "Bukareszt",  IsoCode = "ro", Region = "Eastern Europe",   Continent = Continent.Europe },
        new() { Name = "Russia",         NamePl = "Rosja",              Capital = "Moscow",      CapitalPl = "Moskwa",     IsoCode = "ru", Region = "Eastern Europe",   Continent = Continent.Europe },
        new() { Name = "Ukraine",        NamePl = "Ukraina",            Capital = "Kyiv",        CapitalPl = "Kijów",      IsoCode = "ua", Region = "Eastern Europe",   Continent = Continent.Europe },
    };
}
