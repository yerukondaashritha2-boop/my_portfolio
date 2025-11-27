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

    // Close menu when a link is clicked (on mobile)
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
        "Thank you! This demo form is submitted locally. You can connect it to a real backend or email service later."
      );
      contactForm.reset();
    });
  }

  // 4) Scroll reveal for sections
  const revealElements = document.querySelectorAll(".fade-in");

  if ("IntersectionObserver" in window && revealElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show all if IntersectionObserver not supported
    revealElements.forEach((el) => el.classList.add("visible"));
  }
});
