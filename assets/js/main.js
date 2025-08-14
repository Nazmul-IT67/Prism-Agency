// Image Preview lightbox
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = GLightbox({
    selector: ".glightbox",
  });
  AOS.init({
    duration: 1000,
    once: true,
    offset: 120,
  });
});

// Init isotope layout and filters
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Loaded"); // Ensure DOM is loaded

  // Initialize Isotope
  const iso = new Isotope(".isotope-container", {
    itemSelector: ".isotope-item",
    layoutMode: "masonry",
  });
  console.log("Isotope initialized:", iso); // Check Isotope instance

  // Filter functionality
  document.querySelectorAll(".portfolio-filters li").forEach((filter) => {
    filter.addEventListener("click", function () {
      document
        .querySelectorAll(".portfolio-filters li")
        .forEach((f) => f.classList.remove("filter-active"));
      this.classList.add("filter-active");
      const filterValue = this.getAttribute("data-filter");
      iso.arrange({ filter: filterValue });
    });
  });
});

//Portfolio details Slider
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".btn-slide.next");
  const prevBtn = document.querySelector(".btn-slide.prev");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => goToSlide(index));
  });

  // Initial setup
  showSlide(currentIndex);

  // Optional: Auto-slide every 5 seconds
  setInterval(nextSlide, 5000);
});

// JavaScript for Toggle Menu
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});



