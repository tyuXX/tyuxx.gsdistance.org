// Theme handling
const toggle = document.getElementById("theme-toggle");
const moonIcon = toggle.querySelector("i");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Set initial theme based on system preference
const setInitialTheme = () => {
  if (localStorage.getItem("theme")) {
    document.body.classList.toggle(
      "light-theme",
      localStorage.getItem("theme") === "light"
    );
    updateThemeIcon();
    setMDTheme();
  } else if (!prefersDarkScheme.matches) {
    document.body.classList.add("light-theme");
    updateThemeIcon();
  }
};

function setMDTheme() {
    const isLightTheme = document.body.classList.contains("light-theme");
    const mdTheme = isLightTheme ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", mdTheme);
}

const updateThemeIcon = () => {
  const isLightTheme = document.body.classList.contains("light-theme");
  moonIcon.className = isLightTheme ? "fas fa-sun" : "fas fa-moon";
};

toggle.setAttribute("aria-label", "Toggle theme");
toggle.setAttribute("aria-pressed", document.body.classList.contains("light-theme"));

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  updateThemeIcon();
  toggle.setAttribute("aria-pressed", isLight);
  setMDTheme();
});