function renderPro() {
  const productsContainer = document.querySelector("#products-container");

  getProducts();

  async function getProducts() {
    const response = await fetch("./js/products.json");

    const productsArray = await response.json();

    renderProducts(productsArray);
  }

  function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
      const productHTML = `
    <div class="col-md-2">
						<div class="card mb-4" data-id="${item.id}">
						<i class="fas fa-heart" data-action='heart'></i>
	<img class="product-img" src="./img-i/${item.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">${item.title}</h4>
								<p><small data-items-in-box class="text-muted">${item.itemsInBox} dona.</small></p>
								<i class="fas fa-star star-acc"></i>
								<i class="fas fa-star star-acc"></i>
								<i class="fas fa-star "></i>
								<i class="fas fa-star "></i>
								<i class="fas fa-star "></i>
								<div class="details-wrapper">
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>

									<div class="price">
										<div class="price__weight">${item.weight}mg.</div>
										<div class="price__currency">${item.price} so'm</div>
									</div>
								</div>

								<button data-cart  type="button" class="btn btn-block btn-outline-warning">+ savatga qo'shish</button>

							</div>
						</div>
					</div>
    `;
      productsContainer.insertAdjacentHTML("beforeend", productHTML);
    });
  }
}
