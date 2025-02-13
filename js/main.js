let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
  navbar.classList.toggle("hidden");
}

window.onscroll = () => {
  navbar.classList.remove("active");
  navbar.classList.add("hidden");
}

window.addEventListener('scroll', () => {
  header.classList.toggle("shadow", window.scrollY > 0);
  header.classList.toggle("bg-bg", window.scrollY > 0);
});

