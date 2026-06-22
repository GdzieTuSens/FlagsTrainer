# FlagsTrainer — Instrukcje dla Claude

## Czym jest ten projekt
Aplikacja mobilna w **.NET MAUI** do nauki flag państw i ich stolic metodą fiszek (spaced repetition — system Leitnera). Użytkownik jest początkującym programistą C#; wyjaśniaj każdy krok prostym językiem po polsku, kod pisz po angielsku.

## Stack technologiczny
- **.NET 10 / MAUI** — multiplatformowa aplikacja (Android, iOS, Windows)
- **CommunityToolkit.Mvvm 8.4.2** — MVVM z source generation (`[ObservableProperty]` jako `partial` property, `[RelayCommand]`)
- **sqlite-net-pcl 1.9.172 + SQLitePCLRaw.bundle_green** — lokalna baza danych
- **MAUI Preferences** — zapis ustawień (język, tryb, kontynent)
- **flagcdn.com** — źródło flag PNG (w320, kod ISO = nazwa pliku)

## Architektura (MVVM)
```
Views (XAML)  ←→  ViewModels  ←→  Services / Data
MainPage.xaml      CountryListViewModel    DatabaseService (SQLite)
FlashcardPage.xaml FlashcardViewModel      SettingsService (Preferences)
                                           WorldCountries (dane statyczne)
```

## Struktura plików
```
FlagsTrainer/
├── CLAUDE.md                    ← ten plik
├── FlagsTrainer.csproj
├── MauiProgram.cs               ← rejestracja DI
├── App.xaml / App.xaml.cs       ← rejestracja globalnych konwerterów
├── AppShell.xaml.cs             ← nawigacja Shell + DI routing
├── RouteFactory.cs              ← DependencyRouteFactory (Shell + DI)
├── MainPage.xaml/.cs            ← ekran główny (wybór języka, kontynentu, trybu)
├── FlashcardPage.xaml/.cs       ← ekran fiszek
├── Models/
│   ├── Country.cs               ← Name, NamePl, Capital, CapitalPl, IsoCode, Region, Continent
│   ├── CardProgress.cs          ← rekord SQLite: Box (1-5), NextReview, CorrectCount, WrongCount
│   ├── StudyMode.cs             ← enum: FlagToCountry, CountryToFlag, CapitalToCountry
│   └── Continent.cs             ← enum + extensions (DisplayName, Emoji)
├── Data/
│   ├── WorldCountries.cs        ← agregator, GetAll() + GetByContinent()
│   ├── EuropeanCountries.cs     ← 46 krajów
│   ├── AfricanCountries.cs      ← 54 kraje
│   ├── AsianCountries.cs        ← 47 krajów
│   ├── NorthAmericanCountries.cs ← 23 kraje
│   ├── SouthAmericanCountries.cs ← 12 krajów
│   └── OceanianCountries.cs    ← 14 krajów
├── ViewModels/
│   ├── CountryListViewModel.cs  ← główny ekran + ContinentOption
│   └── FlashcardViewModel.cs    ← logika fiszek + LeitnerBox
├── Services/
│   ├── DatabaseService.cs       ← SQLite CRUD + Leitner logic
│   └── SettingsService.cs       ← Preferences (UsePolish, StudyMode, Continent)
├── Converters/
│   ├── BoolToSelectedBorderConverter.cs
│   └── BoolToFontAttributesConverter.cs
└── Resources/
    └── Images/                  ← ~196 flag PNG (ISO-code.png, np. pl.png)
```

## Jak działa Leitner (DatabaseService)
- Skrzynki 1–5, interwały: [1, 2, 5, 11, 21] dni
- **Umiem** → Box++ (max 5), NextReview = now + interval[Box]
- **Nie umiem** → Box = 1, NextReview = now + 1 dzień
- Sesja = tylko karty gdzie `NextReview <= DateTime.UtcNow`
- Jeśli brak kart do dziś → wszystkie karty (żeby sesja nigdy nie była pusta)

## Nawigacja
```
Shell → MainPage (CountryListViewModel)
      → "flashcard?polish={bool}&mode={int}&continent={int}" → FlashcardPage
```
- `FlashcardViewModel` odbiera parametry przez `[QueryProperty]`
- Czeka na 3 parametry (`_paramsReceived >= 3`) zanim uruchomi `InitializeAsync`

## Rejestracja DI (MauiProgram.cs)
- Singleton: `DatabaseService`, `SettingsService`, `App`
- Transient: `FlashcardViewModel`, `FlashcardPage`, `CountryListViewModel`, `MainPage`

## Co jest zaimplementowane
- [x] Fiszki z 3 trybami (Flaga→Kraj, Kraj→Flaga, Stolica→Kraj)
- [x] System Leitnera (5 skrzynek, interwały dni)
- [x] SQLite — zapis postępu kart
- [x] Wybór języka PL/EN (nazwy krajów + interfejs)
- [x] Wybór kontynentu (Europa, Afryka, Azja, Ameryka Pn., Ameryka Pd., Oceania, Wszystkie)
- [x] Reset postępu z potwierdzeniem
- [x] 196 krajów, 196 flag PNG
- [x] Statystyki sesji (✓ / ✗ w headerze)

## TODO (planowane etapy)
- [ ] Ekran podsumowania sesji (zamiast cichego zapętlenia)
- [ ] Tryb quiz (4 opcje do wyboru)
- [ ] Statystyki globalne (skrzynki Leitnera, streak dzienny)
- [ ] Animacja odwracania karty

## Zasady kodowania w tym projekcie
- Wzorzec: MVVM z CommunityToolkit source generation
- `[ObservableProperty]` zawsze jako `public partial Typ Nazwa { get; set; }` (AOT-safe)
- Serwisy wstrzykiwane przez DI — nigdy `new SerwisXxx()` w kodzie
- Kod po angielsku, rozmowy po polsku
- Proste rozwiązania > sprytne; nie dodawaj funkcji których nie proszono
- Konwertery rejestrowane w `App.xaml` jako `StaticResource`

## Jak zbudować i uruchomić
```powershell
# Windows (debug)
dotnet build -f net10.0-windows10.0.19041.0
dotnet run -f net10.0-windows10.0.19041.0

# lub F5 w Visual Studio / Rider
```

## Znane ograniczenia
- Ostrzeżenie NU1903 (SQLitePCLRaw vulnerability) — niegroźne dla lokalnej app
- `DisplayAlert` deprecated w .NET 10 — używamy `DisplayAlertAsync`
