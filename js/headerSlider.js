function headerSlider() {
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

  //
}
