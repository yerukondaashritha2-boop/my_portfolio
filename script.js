// script.js

document.addEventListener("DOMContentLoaded", () => {
  // 1) Set current year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2) Mobile navbar toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    // Optional: close menu when a link is clicked (useful on mobile)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    });
  }

  // 3) Contact form demo submit
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "Thank you! This demo form is submitted locally. You can connect it to a real backend later."
      );
      contactForm.reset();
    });
  }
});
