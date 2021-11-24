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

const heart = document.querySelectorAll(".fa-heart");
heart.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.style.color == "red") {
      item.style.color = "black";
    } else {
      item.style.color = "red";
    }
  });
});
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
  }, 7000);
}, 7000);

//   ! Loader
// Timer

let deadline = "2022-01-01";

function getTime(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(total / (1000 * 60 * 60 * 24)),
    seconds = Math.floor((total / 1000) % 60),
    minutes = Math.floor((total / 1000 / 60) % 60),
    hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  return {
    total: total,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
function getZero(num) {
  if (num >= 0 && num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
    days = timer.querySelector("#days"),
    hours = timer.querySelector("#hours"),
    minutes = timer.querySelector("#minutes"),
    seconds = timer.querySelector("#seconds"),
    timeInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const time = getTime(endtime);
    days.innerHTML = getZero(time.days);
    hours.innerHTML = getZero(time.hours);
    minutes.innerHTML = getZero(time.minutes);
    seconds.innerHTML = getZero(time.seconds);
    if (time.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}
setClock(".timer", deadline);
// ! Timer
