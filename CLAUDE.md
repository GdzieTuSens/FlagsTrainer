# FlagsTrainer — Instrukcje dla Claude

## Czym jest ten projekt
Statyczna strona internetowa do nauki flag państw i ich stolic metodą fiszek (spaced repetition — system Leitnera). Hostowana na GitHub Pages. Użytkownik jest początkującym programistą (dotąd pisał w C#/.NET MAUI, teraz jest to prosty vanilla JS); wyjaśniaj każdy krok prostym językiem po polsku, kod pisz po angielsku.

## Stack technologiczny
- **Czysty HTML5 / CSS3 / vanilla JavaScript (ES6+)** — bez frameworka, bez build step, bez npm
- **localStorage** — zapis ustawień i postępu nauki (zamiast SQLite + MAUI Preferences z poprzedniej wersji)
- **flagi PNG lokalne** w folderze `flags/` (skopiowane raz z oryginalnej apki MAUI — nie ładowane z internetu)
- **GitHub Pages** — hosting wprost z root repo, branch `main`

## Architektura
```
index.html  ←→  app.js (cała logika: state, render, Leitner, localStorage)
style.css       (wygląd)
countries.js    (dane: globalna tablica COUNTRIES)
```
Jedna strona, dwa widoki (`#setup-screen`, `#flashcard-screen`) przełączane klasą `.hidden` — bez routingu, bez przeładowania strony.

## Struktura plików
```
FlagsTrainer/
├── CLAUDE.md               ← ten plik
├── index.html              ← struktura DOM (setup-screen + flashcard-screen)
├── style.css                ← cały styl, mobile-first
├── app.js                   ← cała logika JS
├── countries.js              ← const COUNTRIES = [...] (196 krajów)
├── countries.json            ← te same dane w JSON (mirror)
├── flags/                    ← 196 PNG flag, {isoCode}.png
├── docs/
│   ├── TECHNICAL.md          ← szczegóły implementacji
│   └── USER_GUIDE.md         ← przewodnik dla użytkownika
└── .vscode/                  ← (opcjonalnie ustawienia Live Server)
```

## Jak działa Leitner (`app.js`)
- Skrzynki 1–5, interwały: `BOX_INTERVALS = [0, 1, 2, 5, 11, 21]` dni
- **Umiem** → `markCorrect()`: box++ (max 5), `nextReview = now + interval[box]` dni
- **Nie umiem** → `markWrong()`: box = 1, `nextReview = now + 1 dzień`
- Sesja = tylko karty gdzie `nextReview <= Date.now()` (`getDueIsoCodes()`)
- Jeśli brak kart do dziś → wszystkie karty (sesja nigdy nie jest pusta)
- Postęp trzymany w `localStorage["flagstrainer_progress"]`, ustawienia w `localStorage["flagstrainer_settings"]`

## Dane krajów (`countries.js`)
Każdy obiekt: `name, namePl, capital, capitalPl, isoCode, region, continent` (continent jako string: `Europe, Africa, Asia, NorthAmerica, SouthAmerica, Oceania`). Obraz flagi liczony jako `` `flags/${isoCode}.png` `` — nie jest polem danych.

## Co jest zaimplementowane
- [x] Fiszki z 3 trybami (Flaga→Kraj, Kraj→Flaga, Stolica→Kraj)
- [x] System Leitnera (5 skrzynek, interwały dni) w localStorage
- [x] Wybór języka PL/EN (nazwy krajów + interfejs)
- [x] Wybór kontynentu (multi-select: Europa, Afryka, Azja, Ameryka Pn., Ameryka Pd., Oceania, Wszystkie)
- [x] Reset postępu z potwierdzeniem (`confirm()`)
- [x] 196 krajów, 196 flag PNG lokalnych
- [x] Statystyki sesji (✓ / ✗ w nagłówku)
- [x] Flip karty 3D (CSS `perspective` + `preserve-3d`)
- [x] Responsywny layout mobile-first

## TODO (planowane etapy)
- [ ] Ekran podsumowania sesji (zamiast cichego zapętlenia)
- [ ] Tryb quiz (4 opcje do wyboru)
- [ ] Statystyki globalne (skrzynki Leitnera, streak dzienny)

## Zasady kodowania w tym projekcie
- Vanilla JS — żadnego frameworka, żadnego build step, żadnych zależności npm
- Proste rozwiązania > sprytne; nie dodawaj funkcji których nie proszono
- Minimalne komentarze — tylko gdy WHY nie jest oczywiste (np. matematyka interwałów Leitnera, sztuczka z flip CSS)
- Kod po angielsku (nazwy zmiennych/funkcji), rozmowy po polsku
- Nazwy funkcji czytelne dla początkującego programisty

## Jak zbudować i uruchomić
```powershell
# Wystarczy otworzyć index.html w przeglądarce (dwuklik),
# albo użyć VS Code + rozszerzenie "Live Server",
# albo prostego lokalnego serwera:
npx http-server -p 8080
```
Brak `dotnet build`, brak kroku kompilacji — to statyczna strona.

## Hosting (GitHub Pages)
Po wypchnięciu zmian na `main`: Settings → Pages → Source: "Deploy from a branch" → branch `main`, folder `/ (root)` → Save. Strona pod `https://gdzietusens.github.io/FlagsTrainer/`.
