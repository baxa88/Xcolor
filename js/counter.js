function counter() {
  window.addEventListener("click", function (e) {
    const heart = document.querySelectorAll("#heart");
    console.log(heart);
    heart.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.style.color === "red") {
          item.style.color = "black";
        } else {
          item.style.color = "red";
        }
      });
    });

    let counter;
    if (
      e.target.dataset.action === "plus" ||
      e.target.dataset.action === "minus"
    ) {
      const counterWrapper = e.target.closest(".counter-wrapper");
      counter = counterWrapper.querySelector("[data-counter]");

      if (e.target.dataset.action === "plus") {
        counter.innerText = ++counter.innerText;
      }
      if (e.target.dataset.action === "minus") {
        if (parseInt(counter.innerText) > 1) {
          counter.innerText = --counter.innerText;
        } else if (
          e.target.closest(".cart-wrapper") &&
          parseInt(counter.innerText) === 1
        ) {
          e.target.closest(".cart-item").remove();
        }
        toggleCardStatus();
        calcCartPrice();
      }
    }
    if (
      e.target.hasAttribute("data-action") &&
      e.target.closest(".cart-wrapper")
    ) {
      calcCartPrice();
    }
  });
}
