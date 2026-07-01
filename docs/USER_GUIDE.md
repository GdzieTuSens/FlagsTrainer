# FlagsTrainer — Przewodnik użytkownika

## Co to jest FlagsTrainer?

FlagsTrainer to aplikacja do nauki flag państw i ich stolic. Działa jak inteligentne fiszki — pokazuje ci karty, a ty oceniasz czy znałeś odpowiedź. Aplikacja zapamiętuje co sprawia ci trudność i pokazuje trudniejsze karty częściej.

---

## Ekran główny

Po uruchomieniu aplikacji widzisz ekran z trzema sekcjami.

### 1. Język
Przełącznik **🇵🇱 Polski / 🇬🇧 English** zmienia język aplikacji:
- nazwy krajów na fiszkach
- nazwy stolic
- etykiety w interfejsie

### 2. Kontynent
Poziomy pasek z przyciskami:

| Przycisk | Co zawiera |
|---|---|
| 🌐 Wszystkie | Wszystkie 196 krajów świata |
| 🇪🇺 Europa | 46 krajów |
| 🌍 Afryka | 54 kraje |
| 🌏 Azja | 47 krajów |
| 🌎 Ameryka Północna | 23 kraje (+ Karaiby, Ameryka Środkowa) |
| 🌎 Ameryka Południowa | 12 krajów |
| 🌊 Oceania | 14 krajów |

Można wybrać kilka kontynentów naraz (np. Europę i Azję) — wybrane są podświetlone niebieską ramką. Wybranie "Wszystkie" czyści pojedyncze zaznaczenia; odznaczenie ostatniego kontynentu wraca do "Wszystkie".

### 3. Tryb nauki
Trzy sposoby uczenia się:

| Tryb | Co widzisz na przodzie | Co widzisz po odwróceniu |
|---|---|---|
| 🚩 Flaga → Kraj i stolica | Flagę kraju | Nazwę kraju i stolicę |
| 🔤 Kraj → Flaga i stolica | Nazwę kraju | Flagę i stolicę |
| 🏙️ Stolica → Flaga i kraj | Nazwę stolicy | Flagę i nazwę kraju |

---

## Nauka (ekran fiszek)

### Pasek postępu
Na górze ekranu widoczny jest licznik:
```
Karta 4 / 46   ✓ 3   ✗ 1
```
- `4 / 46` — która karta i ile łącznie w tej sesji
- `✓ 3` — ile razy odpowiedziałeś poprawnie w tej sesji
- `✗ 1` — ile razy nie wiedziałeś odpowiedzi

### Jak ćwiczyć
1. **Patrz na przód karty** — zastanów się nad odpowiedzią
2. **Dotknij kartę** — zobaczysz odpowiedź
3. **Oceń się szczerze:**
   - Kliknij **✓ Umiem** — jeśli znałeś odpowiedź
   - Kliknij **✗ Nie umiem** — jeśli nie wiedziałeś

### System inteligentnych powtórek (Leitner)
Aplikacja używa 5 skrzynek. Każda karta zaczyna w skrzynce 1.

| Skrzynka | Jak często się pojawia |
|---|---|
| 1 | Co 1 dzień (najtrudniejsze) |
| 2 | Co 2 dni |
| 3 | Co 5 dni |
| 4 | Co 11 dni |
| 5 | Co 21 dni (znasz dobrze) |

- **"Umiem"** → karta idzie do wyższej skrzynki i wraca rzadziej
- **"Nie umiem"** → karta wraca do skrzynki 1 i pojawi się znów jutro

Na co dzień widzisz tylko karty, które są **dziś do powtórki** — nie wszystkie naraz.

---

## Reset postępu

Na dole ekranu głównego znajduje się przycisk **🔄 Resetuj postęp nauki**.

> ⚠️ Uwaga: reset usuwa cały zapisany postęp. Wszystkie karty wracają do skrzynki 1 i pojawią się znów w następnej sesji. Aplikacja zapyta o potwierdzenie przed wykonaniem tej operacji.

Kiedy warto zresetować:
- Chcesz zacząć naukę od początku
- Minęło dużo czasu i chcesz odświeżyć wiedzę

---

## Wskazówki

**Ucz się regularnie** — 10–15 minut dziennie daje lepsze efekty niż godzina raz w tygodniu. System Leitnera jest zaprojektowany pod codzienne sesje.

**Bądź szczery** — oceniaj „Umiem" tylko gdy naprawdę wiedziałeś odpowiedź przed odwróceniem karty. Oszukiwanie działa tylko na własną niekorzyść.

**Zacznij od jednego kontynentu** — łatwiej zacząć od Europy (46 krajów) niż od wszystkich naraz. Gdy opanujesz jeden kontynent, dodaj kolejny.

**Zmieniaj tryby** — gdy dobrze znasz flagi (tryb Flaga→Kraj), przełącz na Stolica→Kraj. To inne wyzwanie i utrwala wiedzę z innej strony.
