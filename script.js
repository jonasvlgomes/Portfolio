let darkModeSave = localStorage.getItem("darkMode");
let moonIcon = document.querySelector(".ball");
let grid = document.querySelectorAll(
  ".gallery-container .grid-photos .column .grid-img .element "
);
let gridArray = [...grid];
let indexNumber = 0;
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
function popupGrid(content, number) {
  let myH2 = document.getElementsByTagName("h2")[number].innerHTML;
  let myP = document.getElementsByTagName("p")[number].innerHTML;
  let myHref = document.getElementsByClassName("hreff")[number].href;
  content = gridArray[number];
  document.querySelector(".pop-up").style.display = "block";
  if (content.tagName == "IMG") {
    document.querySelector(".pop-up img").style.display = "block";
    document.querySelector(".pop-up img").src = content.getAttribute("src");
    document.querySelector(".pop-up video").style.display = "none";
  } else {
    document.querySelector(".pop-up video").style.display = "block";
    document.querySelector(".pop-up video").src = content.getAttribute("src");
    document.querySelector(".pop-up img").style.display = "none";
  }
  document.querySelector(".pop-up h2").innerHTML = myH2;
  document.querySelector(".pop-up p").innerHTML = myP;
  document.querySelector(".pop-up a").href = myHref;
  document.querySelector(".pop-up i.bxs-right-arrow").onclick = () => {
    number++;
    if (number > 21) {
      number = 0;
    }
    popupGrid(content, number);
  };
  document.querySelector(".pop-up i.bxs-left-arrow").onclick = () => {
    number--;
    if (number < 0) {
      number = 21;
    }
    popupGrid(content, number);
  };
  document.onkeydown = function () {
    switch (window.event.keyCode) {
      case 37:
        number--;
        if (number < 0) {
          number = 21;
        }
        popupGrid(content, number);
        break;
      case 39:
        number++;
        if (number > 21) {
          number = 0;
        }
        popupGrid(content, number);
        break;
    }
  };
}

gridArray.forEach((image) => {
  image.onclick = () => {
    indexNumber = gridArray.indexOf(image);
    popupGrid(image, indexNumber);
  };
});

document.querySelector(".pop-up span").onclick = () => {
  document.querySelector(".pop-up").style.display = "none";
};
