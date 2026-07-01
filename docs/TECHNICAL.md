# FlagsTrainer — Dokumentacja Techniczna

## Przegląd architektury

Statyczna strona jednoplikowa (SPA bez frameworka). Dwa widoki (`#setup-screen`, `#flashcard-screen`) w jednym `index.html`, przełączane klasą `.hidden`:

```
index.html   – struktura DOM obu ekranów
style.css    – cały wygląd
app.js       – stan, renderowanie, logika Leitnera, localStorage
countries.js – dane krajów (globalna tablica COUNTRIES)
```

Brak build step, brak zależności — otwiera się wprost w przeglądarce.

## Model danych (`countries.js`)

Każdy kraj to obiekt:

| Pole | Typ | Opis |
|---|---|---|
| `name` | string | Nazwa po angielsku |
| `namePl` | string | Nazwa po polsku |
| `capital` | string | Stolica po angielsku |
| `capitalPl` | string | Stolica po polsku |
| `isoCode` | string | ISO 3166-1 alpha-2, np. "pl" |
| `region` | string | Podregion, np. "Central Europe" |
| `continent` | string | Jedna z: Europe, Africa, Asia, NorthAmerica, SouthAmerica, Oceania |

Obraz flagi nie jest polem — liczony w JS jako `` `flags/${isoCode}.png` ``. Dane w `countries.json` to ten sam zbiór w formacie JSON (mirror, do ewentualnego wykorzystania przez `fetch`).

Łącznie 196 krajów, każdy ma dokładnie jeden plik PNG w `flags/`.

## Leitner (`app.js`, localStorage)

Klucz `flagstrainer_progress` w `localStorage` → JSON obiekt `{ [isoCode]: { box, nextReview, correctCount, wrongCount } }`. `nextReview` to znacznik czasu w milisekundach (`Date.now()`).

Interwały skrzynek (`BOX_INTERVALS`): `[0, 1, 2, 5, 11, 21]` dni.

| Funkcja | Działanie |
|---|---|
| `loadProgress()` / `saveProgress(map)` | odczyt/zapis całej mapy postępu |
| `getCardProgress(map, isoCode)` | istniejący rekord albo domyślny (skrzynka 1) |
| `markCorrect(map, isoCode)` | `correctCount++`, `box = min(box+1, 5)`, `nextReview` przesunięty o interwał nowej skrzynki |
| `markWrong(map, isoCode)` | `wrongCount++`, `box = 1`, `nextReview` = +1 dzień |
| `resetAllProgress()` | usuwa klucz `flagstrainer_progress` |
| `getDueIsoCodes(map, allIsoCodes)` | filtruje karty z `nextReview <= now`; jeśli brak, zwraca wszystkie (sesja nigdy nie jest pusta) |

## Ustawienia (`localStorage`)

Klucz `flagstrainer_settings` → `{ usePolish, studyMode, selectedContinents }`.

| Pole | Domyślna wartość | Możliwe wartości |
|---|---|---|
| `usePolish` | `true` | `true` / `false` |
| `studyMode` | `"FlagToCountry"` | `FlagToCountry`, `CountryToFlag`, `CapitalToCountry` |
| `selectedContinents` | `["Europe"]` | tablica z: `All, Europe, Africa, Asia, NorthAmerica, SouthAmerica, Oceania` |

Logika wyboru kontynentu (`selectContinent`): wybór "All" czyści resztę zaznaczeń; wybór innego kontynentu usuwa "All" i przełącza (toggle) dany kontynent; pusty zbiór wraca automatycznie do `["All"]`.

## Przepływ ekranu ustawień

```
renderLanguageToggle() / renderContinentChips() / renderModeCards()
  → re-render przy każdej zmianie ustawień (język zmienia etykiety natychmiast)
Start → startSession()
Reset → confirm() → resetAllProgress()
```

## Przepływ sesji nauki

```
1. startSession():
   a. filtr krajów po selectedContinents (All = wszystkie)
   b. getDueIsoCodes() z fallbackiem
   c. shuffle (Fisher-Yates) → deck
   d. reset deckIndex, sessionCorrect, sessionWrong
2. loadCard() → renderCardContent() wg studyMode:
   - FlagToCountry:    przód = flaga,        tył = nazwa + stolica
   - CountryToFlag:    przód = nazwa kraju,  tył = flaga + stolica
   - CapitalToCountry: przód = stolica,      tył = flaga + nazwa
3. Klik na kartę → flip (CSS 3D transform) → pokazują się przyciski odpowiedzi
4. "Umiem" → markCorrect()  |  "Nie umiem" → markWrong()
5. advanceCard() → deckIndex = (deckIndex + 1) % deck.length (zapętla się)
```

## Flip karty (CSS)

`.flip-wrapper` ma `perspective`; `.flip-inner` ma `transform-style: preserve-3d` i transition na `transform`; klasa `.flipped` obraca `.flip-inner` o 180° wokół osi Y. Każda strona (`.flip-face`) ma `backface-visibility: hidden` i jest wyśrodkowana absolutnie, `.flip-back` jest wstępnie obrócona o 180°, żeby po obrocie rodzica wyglądała normalnie.

## Flagi

- Lokalizacja: `flags/{isoCode}.png` (skopiowane raz z oryginalnego projektu MAUI, nie ładowane z internetu)
- Format: PNG, małe pliki (proste, kilkukolorowe grafiki)

## Hosting

GitHub Pages, branch `main`, folder root — strona jest w pełni statyczna, nie wymaga budowania ani serwera backendowego.
