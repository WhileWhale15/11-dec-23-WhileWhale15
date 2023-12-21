function replaceName() {
  let name = prompt("Hi, can you write your name here?", "");
  document.getElementById("name").innerHTML = name;
}

replaceName();

document.getElementById("submit").addEventListener("click", function () {
  const nama = nameInput.value;
  document.getElementById("name").innerHTML = nama;
});

// Slider
let currentIndex = 0;
const images = document.querySelectorAll(".slider-content");
const totalImages = images.length(3);

function changeImage() {
  images[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].style.display = "block";
}

setInterval(changeImage, 2000);

// Navbar
function toggleNav() {
  var menuToggle = document.querySelector(".toggle");
  var navigation = document.querySelector(".nav-bar");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

// Thumbnail
function imgSlider(anything, switchClass) {
  document.querySelector(switchClass).src = anything;
}

function changeCategory(newText, displayNameId) {
  document.getElementById(displayNameId).textContent = newText;
}

function changeText(newText, displayTextId) {
  document.getElementById(displayTextId).textContent = newText;
}

function set1() {
  imgSlider("assets/Cherry_Red.png", ".switch");
  changeCategory("Cherry MX Red", "displayName");
  changeText("Linear", "displayText");
}

function set2() {
  imgSlider("assets/Gateron_Red.png", ".switch1");
  changeCategory("Gateron Red", "displayName1");
  changeText("Linear", "displayText1");
}

function set3() {
  imgSlider("assets/Kailh_BOX_Red.png", ".switch2");
  changeCategory("Kailh BOX Red", "displayName2");
  changeText("Linear");
}
