namespace FlagsTrainer.Models;

public enum StudyMode
{
    FlagToCountry,   // front: flag        | back: name + capital
    CountryToFlag,   // front: name        | back: flag + capital
    CapitalToCountry // front: capital     | back: flag + name
}
