// CALC-CART-PRICE
function calcCartPrice() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const priceEl = cartWrapper.querySelectorAll(".price__currency");
  const deliveryCost = document.querySelector(".delivery-cost");
  const totalPriceEl = document.querySelector(".total-price");
  const cartDelivery = document.querySelector("[data-cart-delivery]");

  let priceTotal = 0;

  priceEl.forEach(function (item) {
    const amoundEl = item.closest(".cart-item").querySelector("[data-counter]");

    priceTotal += parseInt(amoundEl.innerText) * parseInt(item.innerText);
  });
  totalPriceEl.innerText = priceTotal;

  if (priceTotal > 0) {
    cartDelivery.classList.remove("none");
  } else {
    cartDelivery.classList.add("none");
  }

  if (priceTotal >= 499000) {
    deliveryCost.classList.add("free");
    deliveryCost.innerText = "bepul";
  } else {
    deliveryCost.classList.remove("free");
    deliveryCost.innerText = "50 ming";
  }
}
// ! CALC-CART-PRICE
