const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navMenu");

// Hamburger Menu
hamburger.addEventListener("click", () => {
 hamburger.classList.toggle("active");
 navmenu.classList.toggle("active");
});

// turn bk to original hamburger when a nav link is clicked
document.querySelectorAll(".navLink").forEach((ei) =>
 ei.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navmenu.classList.remove("active");
 })
);
