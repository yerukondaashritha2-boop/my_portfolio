//
document.addEventListener("DOMContentLoaded", () => {
const yearSpan = document.getElementById("year");
if (yearSpan) {
yearSpan.textContent = new Date().getFullYear();
}

const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
navToggle.addEventListener("click", () => {
navLinks.classList.toggle("show");
});
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
contactForm.addEventListener("submit", (e) => {
e.preventDefault();
alert("Thank you! This demo form is submitted locally. You can connect it to a real backend later.");
contactForm.reset();
});
}
});
