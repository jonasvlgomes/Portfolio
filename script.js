let darkModeSave = localStorage.getItem("darkMode");
let moonIcon = document.querySelector(".ball");
const isDarkMode =
  window.matchMedia && window.matchMedia("(prefers-color-scheme:dark").matches;
logoColor();

const enableDarkMode = () => {
  localStorage.setItem("darkMode", "enabled");
  document.body.classList.toggle("dark-mode");
  logoColor();
  var checkbox = document.getElementById("label");
  localStorage.setItem("checkbox", checkbox.checked);
};
const disableDarkMode = () => {
  localStorage.setItem("darkMode", null);
  document.body.classList.toggle("dark-mode");
  logoColor();
  var checkbox = document.getElementById("label");
  localStorage.setItem("checkbox", null);
};

function navbarOpen() {
  let menu = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
}

function darkMode() {
  darkModeSave = localStorage.getItem("darkMode");
  if (darkModeSave !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}
var checked = JSON.parse(localStorage.getItem("checkbox"));
document.getElementById("label").checked = checked;
if (darkModeSave === "enabled" || (isDarkMode && darkModeSave === null)) {
  enableDarkMode();
}

function logoColor() {
  let logo = document.querySelector(".logo");
  let circle = document.getElementById("circle-img");

  if (document.body.classList.contains("dark-mode")) {
    logo.style.filter =
      "invert(29%) sepia(17%) saturate(6997%) hue-rotate(330deg) brightness(89%) contrast(92%)";
    if (circle) {
      document.getElementById("circle-img").src = "images/circle01.png";
    }
  } else {
    logo.style.filter =
      "invert(71%) sepia(76%) saturate(3847%) hue-rotate(321deg) brightness(103%) contrast(119%)";
    if (circle) {
      document.getElementById("circle-img").src = "images/circle02.png";
    }
  }
}
