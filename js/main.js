let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Toggle mobile menu
menuIcon.onclick = () => {
  navbar.classList.toggle("active");
  navbar.classList.toggle("hidden");
};

// Hide mobile menu on scroll
window.onscroll = () => {
  navbar.classList.remove("active");
  navbar.classList.add("hidden");
};

// Add shadow and background color to header on scroll
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
  header.classList.toggle("bg-bg", window.scrollY > 0);
});