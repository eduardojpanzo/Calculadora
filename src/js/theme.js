const root = document.querySelector("html");
const themeSwitch = document.querySelector(".calculator .themeSwitch");
const darkIcon = document.querySelector(".themeSwitch .dark");
const lightIcon = document.querySelector(".themeSwitch .light");

themeSwitch.addEventListener("click", () => {
  root.classList.toggle("darkMode");
  toggleIconTheme();
});

function toggleIconTheme() {
  darkIcon.classList.toggle("active");
  lightIcon.classList.toggle("active");
}
