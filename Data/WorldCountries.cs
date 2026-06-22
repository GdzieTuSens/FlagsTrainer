using FlagsTrainer.Models;

namespace FlagsTrainer.Data;

// Single entry point for all country data.
// Aggregates all continent-specific classes so the rest of the app
// never needs to know which file a country lives in.
public static class WorldCountries
{
    private static List<Country>? _all;

    public static List<Country> GetAll()
    {
        // Lazy-build once and cache — the list never changes at runtime. test
        if (_all is null)
        {
            _all = new List<Country>();
            _all.AddRange(EuropeanCountries.GetAll());
            _all.AddRange(AfricanCountries.GetAll());
            _all.AddRange(AsianCountries.GetAll());
            _all.AddRange(NorthAmericanCountries.GetAll());
            _all.AddRange(SouthAmericanCountries.GetAll());
            _all.AddRange(OceanianCountries.GetAll());
        }
        return _all;
    }

    public static List<Country> GetByContinents(HashSet<Continent> continents)
    {
        if (continents.Count == 0 || continents.Contains(Continent.All))
            return GetAll();
        return GetAll().Where(c => continents.Contains(c.Continent)).ToList();
    }
}
