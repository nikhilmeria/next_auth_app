const bottom = document.querySelector(".bottom");
const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navMenu");

// To show/close bottom div
document.addEventListener("scroll", () => {
 if (document.scrollY === 0) {
  // Page is scrolled to the top
  bottom.style.display = "initial";
  navmenu.style.display = "inherit";
 } else {
  // Page is not scrolled to the top
  bottom.style.display = "none";
  navmenu.style.display = "none";
 }
});

// document.addEventListener("DOMContentLoaded", function () {});

// Hamburger Menu
// hamburger.addEventListener("click", () => {
//  hamburger.classList.toggle("active");
//  navmenu.classList.toggle("active");
// });

// // turn bk to original hamburger when a nav link is clicked
// document.querySelectorAll(".navLink").forEach((ei) =>
//  ei.addEventListener("click", () => {
//   hamburger.classList.remove("active");
//   navmenu.classList.remove("active");
//  })
// );

// to detect click outside of menu bar
//  var clickTest = document.getElementsByClassName("navbar");
//  document.addEventListener("click", function (event) {
//    var isClickInside = clickTest.includes(event.target);
//    if (isClickInside) {
//      console.log("You clicked inside");
//    } else {
//      console.log("You clicked outside");
//    }
//  });
