# FlagsTrainer — Dokumentacja Techniczna

## Przegląd architektury

Aplikacja stosuje wzorzec **MVVM** (Model–View–ViewModel):

```
┌─────────────┐    bindings    ┌──────────────────────┐    wywołania    ┌─────────────────┐
│  View (XAML)│ ◄────────────► │     ViewModel        │ ──────────────► │  Services/Data  │
│  MainPage   │                │  CountryListViewModel │                 │  DatabaseService │
│  FlashcardPage              │  FlashcardViewModel   │                 │  SettingsService │
└─────────────┘                └──────────────────────┘                 │  WorldCountries  │
                                                                         └─────────────────┘
```

## Modele danych

### `Country`
Dane statyczne kraju. Niezmienne — przechowywane w pamięci.

| Właściwość | Typ | Opis |
|---|---|---|
| `Name` | string | Nazwa po angielsku |
| `NamePl` | string | Nazwa po polsku |
| `Capital` | string | Stolica po angielsku |
| `CapitalPl` | string | Stolica po polsku |
| `IsoCode` | string | ISO 3166-1 alpha-2 (np. "pl") |
| `Region` | string | Podregion (np. "Central Europe") |
| `Continent` | Continent | Enum kontynentu |
| `FlagImage` | string (computed) | "{IsoCode}.png" |

### `CardProgress`
Rekord SQLite — jeden wiersz na kraj.

| Kolumna | Typ | Opis |
|---|---|---|
| `IsoCode` | string (PK) | Klucz główny |
| `Box` | int | Skrzynka Leitnera (1–5) |
| `NextReviewTicks` | long | Data następnej powtórki (UTC ticks) |
| `CorrectCount` | int | Łączna liczba poprawnych odpowiedzi |
| `WrongCount` | int | Łączna liczba błędnych odpowiedzi |

### Enums

**`StudyMode`**
```csharp
FlagToCountry    // Przód: flaga    | Tył: nazwa + stolica
CountryToFlag    // Przód: nazwa    | Tył: flaga + stolica
CapitalToCountry // Przód: stolica  | Tył: flaga + nazwa
```

**`Continent`** (z metodami `DisplayName(bool polish)` i `Emoji()`)
```
All, Europe, Africa, Asia, NorthAmerica, SouthAmerica, Oceania
```

## Serwisy

### `DatabaseService`
Jedyna klasa bezpośrednio korzystająca z SQLite. Metody:

| Metoda | Opis |
|---|---|
| `GetProgressAsync(isoCode)` | Pobiera lub tworzy rekord postępu |
| `GetAllProgressAsync(codes)` | Pobiera postęp dla listy krajów (jeden query) |
| `GetDueIsoCodesAsync(codes)` | Zwraca kody kart do nauki dziś |
| `MarkCorrectAsync(isoCode)` | Przesuwa kartę do wyższej skrzynki |
| `MarkWrongAsync(isoCode)` | Wraca kartę do skrzynki 1 |
| `ResetAllProgressAsync()` | Usuwa wszystkie rekordy |

**Interwały Leitnera** (BoxIntervals[1..5]): 1, 2, 5, 11, 21 dni

### `SettingsService`
Opakowuje `Preferences` MAUI. Klucze:

| Klucz | Domyślna wartość | Opis |
|---|---|---|
| `use_polish` | true | Język interfejsu |
| `study_mode` | 0 (FlagToCountry) | Tryb nauki |
| `continent` | 1 (Europe) | Wybrany kontynent |

## Dane krajów

Łącznie ~196 krajów w 6 plikach statycznych:

| Plik | Kontynent | Liczba krajów |
|---|---|---|
| `EuropeanCountries.cs` | Europa | 46 |
| `AfricanCountries.cs` | Afryka | 54 |
| `AsianCountries.cs` | Azja | 47 |
| `NorthAmericanCountries.cs` | Ameryka Północna | 23 |
| `SouthAmericanCountries.cs` | Ameryka Południowa | 12 |
| `OceanianCountries.cs` | Oceania | 14 |

`WorldCountries.GetAll()` agreguje wszystkie i cache'uje listę w `_all`.

## Nawigacja Shell

```
AppShell
├── MainPage          (route: "MainPage")
└── FlashcardPage     (route: "flashcard", DI: DependencyRouteFactory)
```

Nawigacja do fiszek przekazuje parametry jako query string:
```
flashcard?polish=True&mode=0&continent=1
```

`FlashcardViewModel` odbiera je przez `[QueryProperty]` i czeka na wszystkie 3 przed inicjalizacją.

## Dependency Injection

Rejestracja w `MauiProgram.cs`:

```csharp
// Singleton — jedna instancja na czas życia aplikacji
AddSingleton<DatabaseService>()
AddSingleton<SettingsService>()
AddSingleton<App>()

// Transient — nowa instancja przy każdym otwarciu strony
AddTransient<FlashcardViewModel>()
AddTransient<FlashcardPage>()
AddTransient<CountryListViewModel>()
AddTransient<MainPage>()
```

`DependencyRouteFactory` (w `RouteFactory.cs`) łączy Shell routing z DI, tak żeby `GoToAsync("flashcard")` pobierał `FlashcardPage` z kontenera zamiast robić `new`.

## Konwertery XAML

| Klasa | Wejście | Wyjście | Użycie |
|---|---|---|---|
| `BoolToSelectedBorderConverter` | bool | Color | Podświetlenie wybranego kafla/chipu |
| `BoolToFontAttributesConverter` | bool | FontAttributes | Pogrubienie etykiety wybranego elementu |

Oba zarejestrowane globalnie w `App.xaml`.

## Przepływ sesji nauki

```
1. Użytkownik wybiera kontynent + tryb + język → "Rozpocznij naukę"
2. Shell.GoToAsync("flashcard?...") → FlashcardPage + FlashcardViewModel
3. FlashcardViewModel.InitializeAsync():
   a. WorldCountries.GetByContinent(_continent) → lista krajów
   b. DatabaseService.GetDueIsoCodesAsync() → kody kart do nauki dziś
   c. Shuffle → _deck
4. Użytkownik widzi przód karty (flaga/nazwa/stolica zależnie od trybu)
5. Tap → Flip → widzi tył
6. "Umiem" → DatabaseService.MarkCorrectAsync() → Box++
   "Nie umiem" → DatabaseService.MarkWrongAsync() → Box = 1
7. AdvanceCard() → następna karta; po ostatniej → wrap to 0
```

## Flagi

- Źródło: https://flagcdn.com/w320/{isoCode}.png
- Format: PNG, 320px szerokości
- Lokalizacja: `Resources/Images/{isoCode}.png`
- MAUI automatycznie buduje je jako zasoby (`<MauiImage Include="Resources/Images/*" />`)
