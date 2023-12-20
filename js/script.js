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

function toggleNav() {
  var menuToggle = document.querySelector(".toggle");
  var navigation = document.querySelector(".nav-bar");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}
