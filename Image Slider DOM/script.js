document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
  ];

  let currentIndex = 0;
  const slider = document.getElementById("imageSlider");
  const dotsContainer = document.getElementById("dotsContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function initSlider() {
    images.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Slide ${index + 1}`;
      img.className = index === 0 ? "active" : "";
      slider.appendChild(img);

      const dot = document.createElement("div");
      dot.className = index === 0 ? "dot active" : "dot";
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  function goToSlide(index) {
    const imgs = slider.querySelectorAll("img");
    imgs.forEach((img, i) => {
      img.className = i === index ? "active" : "";
    });

    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
      dot.className = i === index ? "dot active" : "dot";
    });

    currentIndex = index;
  }

  function nextSlide() {
    const newIndex = (currentIndex + 1) % images.length;
    goToSlide(newIndex);
  }

  function prevSlide() {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    goToSlide(newIndex);
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  let slideInterval = setInterval(nextSlide, 5000);

  slider.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  slider.addEventListener("mouseleave", () => {
    slideInterval = setInterval(nextSlide, 5000);
  });

  initSlider();

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  });
});
