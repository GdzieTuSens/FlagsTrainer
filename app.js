// ---------- constants ----------

const CONTINENTS = ["All", "Europe", "Africa", "Asia", "NorthAmerica", "SouthAmerica", "Oceania"];

const CONTINENT_INFO = {
  All: { emoji: "🌐", en: "All", pl: "Wszystkie" },
  Europe: { emoji: "🇪🇺", en: "Europe", pl: "Europa" },
  Africa: { emoji: "🌍", en: "Africa", pl: "Afryka" },
  Asia: { emoji: "🌏", en: "Asia", pl: "Azja" },
  NorthAmerica: { emoji: "🌎", en: "North America", pl: "Ameryka Północna" },
  SouthAmerica: { emoji: "🌎", en: "South America", pl: "Ameryka Południowa" },
  Oceania: { emoji: "🌊", en: "Oceania", pl: "Oceania" },
};

const MODES = ["FlagToCountry", "CountryToFlag", "CapitalToCountry"];

const MODE_INFO = {
  FlagToCountry: { emoji: "🚩", en: "Flag → Country", pl: "Flaga → Kraj" },
  CountryToFlag: { emoji: "🔤", en: "Country → Flag", pl: "Kraj → Flaga" },
  CapitalToCountry: { emoji: "🏙️", en: "Capital → Country", pl: "Stolica → Kraj" },
};

// interval[box] = days until next review after landing in that box
const BOX_INTERVALS = [0, 1, 2, 5, 11, 21];

const SETTINGS_KEY = "flagstrainer_settings";
const PROGRESS_KEY = "flagstrainer_progress";

// ---------- settings persistence ----------

function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) throw new Error("no settings yet");
    return JSON.parse(raw);
  } catch {
    return { usePolish: true, studyMode: "FlagToCountry", selectedContinents: ["Europe"] };
  }
}

function saveSettings(settings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

// ---------- Leitner progress persistence ----------

function loadProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

function getCardProgress(progress, isoCode) {
  return progress[isoCode] || { box: 1, nextReview: Date.now(), correctCount: 0, wrongCount: 0 };
}

function markCorrect(progress, isoCode) {
  const p = getCardProgress(progress, isoCode);
  p.correctCount++;
  p.box = Math.min(p.box + 1, 5);
  p.nextReview = Date.now() + BOX_INTERVALS[p.box] * 86400000;
  progress[isoCode] = p;
  saveProgress(progress);
}

function markWrong(progress, isoCode) {
  const p = getCardProgress(progress, isoCode);
  p.wrongCount++;
  p.box = 1;
  p.nextReview = Date.now() + BOX_INTERVALS[1] * 86400000;
  progress[isoCode] = p;
  saveProgress(progress);
}

function resetAllProgress() {
  localStorage.removeItem(PROGRESS_KEY);
}

// Session never ends up empty: if nothing is due yet, review everything again.
function getDueIsoCodes(progress, allIsoCodes) {
  const now = Date.now();
  const due = allIsoCodes.filter((iso) => {
    const p = progress[iso];
    return !p || p.nextReview <= now;
  });
  return due.length > 0 ? due : allIsoCodes;
}

// ---------- app state ----------

let settings = loadSettings();
let progress = loadProgress();

let deck = [];
let deckIndex = 0;
let isFlipped = false;
let sessionCorrect = 0;
let sessionWrong = 0;

// ---------- setup screen ----------

function getName(country) {
  return settings.usePolish ? country.namePl : country.name;
}

function getCapital(country) {
  return settings.usePolish ? country.capitalPl : country.capital;
}

function renderLanguageToggle() {
  document.getElementById("lang-label").textContent = settings.usePolish ? "Język" : "Language";
  document.getElementById("lang-toggle").textContent = settings.usePolish ? "🇵🇱 Polski" : "🇬🇧 English";
  document.getElementById("continent-heading").textContent = settings.usePolish ? "Kontynent" : "Continent";
  document.getElementById("mode-heading").textContent = settings.usePolish ? "Tryb nauki" : "Study mode";
  document.getElementById("start-btn").textContent = settings.usePolish ? "Rozpocznij naukę" : "Start learning";
  document.getElementById("reset-btn").textContent = settings.usePolish ? "Resetuj postęp nauki" : "Reset progress";
  document.getElementById("back-btn").textContent = settings.usePolish ? "← Wróć do ustawień" : "← Back to settings";
  document.getElementById("front-hint").textContent = settings.usePolish ? "Dotknij, aby odwrócić" : "Tap to flip";
}

function renderContinentChips() {
  const container = document.getElementById("continent-chips");
  container.innerHTML = "";
  for (const continent of CONTINENTS) {
    const info = CONTINENT_INFO[continent];
    const chip = document.createElement("button");
    chip.className = "chip" + (settings.selectedContinents.includes(continent) ? " selected" : "");
    chip.textContent = `${info.emoji} ${settings.usePolish ? info.pl : info.en}`;
    chip.addEventListener("click", () => selectContinent(continent));
    container.appendChild(chip);
  }
}

function selectContinent(continent) {
  let selected = settings.selectedContinents;
  if (continent === "All") {
    selected = ["All"];
  } else {
    selected = selected.filter((c) => c !== "All");
    if (selected.includes(continent)) {
      selected = selected.filter((c) => c !== continent);
    } else {
      selected.push(continent);
    }
    if (selected.length === 0) selected = ["All"];
  }
  settings.selectedContinents = selected;
  saveSettings(settings);
  renderContinentChips();
}

function renderModeCards() {
  const container = document.getElementById("mode-cards");
  container.innerHTML = "";
  for (const mode of MODES) {
    const info = MODE_INFO[mode];
    const card = document.createElement("div");
    card.className = "mode-card" + (settings.studyMode === mode ? " selected" : "");
    card.innerHTML = `
      <span class="icon">${info.emoji}</span>
      <span class="text">${settings.usePolish ? info.pl : info.en}</span>
      <span class="check">✓</span>
    `;
    card.addEventListener("click", () => {
      settings.studyMode = mode;
      saveSettings(settings);
      renderModeCards();
    });
    container.appendChild(card);
  }
}

function setupContinentsToCountries() {
  if (settings.selectedContinents.includes("All")) return COUNTRIES;
  return COUNTRIES.filter((c) => settings.selectedContinents.includes(c.continent));
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  settings.usePolish = !settings.usePolish;
  saveSettings(settings);
  renderLanguageToggle();
  renderContinentChips();
  renderModeCards();
});

document.getElementById("reset-btn").addEventListener("click", () => {
  const message = settings.usePolish
    ? "Czy na pewno chcesz zresetować cały postęp nauki?"
    : "Are you sure you want to reset all learning progress?";
  if (confirm(message)) {
    resetAllProgress();
    progress = loadProgress();
  }
});

document.getElementById("start-btn").addEventListener("click", () => {
  startSession();
});

document.getElementById("back-btn").addEventListener("click", () => {
  document.getElementById("flashcard-screen").classList.add("hidden");
  document.getElementById("setup-screen").classList.remove("hidden");
});

// ---------- flashcard screen ----------

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startSession() {
  const pool = setupContinentsToCountries();
  const allIsoCodes = pool.map((c) => c.isoCode);
  const dueIsoCodes = new Set(getDueIsoCodes(progress, allIsoCodes));

  deck = shuffle(pool.filter((c) => dueIsoCodes.has(c.isoCode)));
  deckIndex = 0;
  sessionCorrect = 0;
  sessionWrong = 0;

  document.getElementById("setup-screen").classList.add("hidden");
  document.getElementById("flashcard-screen").classList.remove("hidden");

  loadCard();
}

function loadCard() {
  isFlipped = false;
  document.getElementById("flip-inner").classList.remove("flipped");
  document.getElementById("answer-buttons").classList.add("hidden");
  renderCardContent();
  renderProgressLabel();
}

function renderCardContent() {
  const country = deck[deckIndex];
  const mode = settings.studyMode;

  const frontFlag = document.getElementById("front-flag");
  const frontText = document.getElementById("front-text");
  const backFlag = document.getElementById("back-flag");
  const backName = document.getElementById("back-name");
  const backCapital = document.getElementById("back-capital");

  const flagSrc = `flags/${country.isoCode}.png`;

  if (mode === "FlagToCountry") {
    frontFlag.src = flagSrc;
    frontFlag.classList.remove("hidden");
    frontText.textContent = "";
    backFlag.classList.add("hidden");
    backName.textContent = getName(country);
  } else if (mode === "CountryToFlag") {
    frontFlag.classList.add("hidden");
    frontText.textContent = getName(country);
    backFlag.src = flagSrc;
    backFlag.classList.remove("hidden");
    backName.textContent = "";
  } else {
    // CapitalToCountry
    frontFlag.classList.add("hidden");
    frontText.textContent = getCapital(country);
    backFlag.src = flagSrc;
    backFlag.classList.remove("hidden");
    backName.textContent = getName(country);
  }

  backCapital.textContent = getCapital(country);
}

function renderProgressLabel() {
  const label = document.getElementById("progress-label");
  const position = `${deckIndex + 1}/${deck.length}`;
  label.textContent = settings.usePolish
    ? `Karta ${position}  ✓ ${sessionCorrect}  ✗ ${sessionWrong}`
    : `Card ${position}  ✓ ${sessionCorrect}  ✗ ${sessionWrong}`;
}

function advanceCard() {
  deckIndex = (deckIndex + 1) % deck.length;
  loadCard();
}

document.getElementById("flip-inner").addEventListener("click", () => {
  isFlipped = !isFlipped;
  document.getElementById("flip-inner").classList.toggle("flipped", isFlipped);
  document.getElementById("answer-buttons").classList.toggle("hidden", !isFlipped);
});

document.getElementById("know-btn").addEventListener("click", () => {
  markCorrect(progress, deck[deckIndex].isoCode);
  sessionCorrect++;
  advanceCard();
});

document.getElementById("wrong-btn").addEventListener("click", () => {
  markWrong(progress, deck[deckIndex].isoCode);
  sessionWrong++;
  advanceCard();
});

// ---------- init ----------

renderLanguageToggle();
renderContinentChips();
renderModeCards();
