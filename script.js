const clickButton = document.querySelector("#click-button");
const clickCount = document.querySelector("#click-count");
const themeToggle = document.querySelector("#theme-toggle");
const themeLabel = document.querySelector("#theme-label");
const root = document.documentElement;

const THEME_STORAGE_KEY = "preferred-theme";

function readStoredTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Le site reste fonctionnel si le stockage local est désactivé.
  }
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  root.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeLabel.textContent = isDark ? "Mode clair" : "Mode sombre";
}

applyTheme(readStoredTheme() === "dark" ? "dark" : "light");

let count = 0;

clickButton.addEventListener("click", () => {
  count += 1;
  clickCount.textContent = String(count);
});

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  storeTheme(nextTheme);
});
