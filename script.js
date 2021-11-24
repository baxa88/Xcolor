let options = {
  strings: ["<i> Xcolor </i>  to'g'ri tanlov ", "&amp; Bundan hursandmiz"],
  typeSpeed: 80,
};

let typed = new Typed(".element", options);

// Header-section
const slider = document.querySelector(".header-content"),
  next = document.querySelector(".next"),
  prev = document.querySelector(".prev"),
  dots = document.querySelectorAll(".dot");

let count = 0;
function showSlide() {
  if (count > 6) {
    count = 0;
  } else if (count < 0) {
    count = 6;
  }

  slider.style.transform = `translateX(${-count * 25}%)`;
}
function currentSlide(n) {
  showSlide((count = n));
}
next.addEventListener("click", function change() {
  count++;
  showSlide();
  resetInterval();
});
prev.addEventListener("click", function change() {
  count--;
  showSlide();
  resetInterval();
});
let interval = setInterval(run, 3000);
function run() {
  count++;
  showSlide();
}
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}
// ! Header-section
//Modal-section
const modal = document.querySelector(".modal-section"),
  btns = document.querySelector(".btn-modal"),
  close = document.querySelector(".close");

btns.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
close.addEventListener("click", closeModal);
// ! Modal-section
// Loader
const loader = document.querySelector(".loader");
setTimeout(function () {
  loader.style.opacity = "0";
  setTimeout(function () {
    loader.style.display = "none";
  }, 8000);
}, 8000);

//   ! Loader
