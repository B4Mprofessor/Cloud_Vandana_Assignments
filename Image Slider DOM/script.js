// script.js

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

let currentIndex = 0;
const sliderImage = document.getElementById("slider-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function updateImage() {
  sliderImage.src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);

updateImage();
