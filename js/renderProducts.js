function renderPro() {
  const productsContainer = document.querySelector("#products-container");
  function renderProducts() {
    data.forEach((item)=> {
      const productHTML = `
    <div class="col-xl-3 col-6">
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
  renderProducts();
}
const data=[
    {
    "id": 1,
    "title": "Kley",
    "itemsInBox": 3,
    "weight": 2500,
    "price": 86000,
    "imgSrc": "1 (1).jpg"
  },

  {
    "id": 2,
    "title": "HAMMER",
    "itemsInBox": 1,
    "weight": 3000,
    "price": 85000,
    "imgSrc": "1 (2).jpg"
  },
  {
    "id": 3,
    "title": "Kley",
    "itemsInBox": 3,
    "weight": 2500,
    "price": 86000,
    "imgSrc": "1 (16).jpg"
  },

  {
    "id": 4,
    "title": "LIT kley",
    "itemsInBox": 3,
    "weight": 2000,
    "price": 35000,
    "imgSrc": "1 (3).jpg"
  },
  {
    "id": 5,
    "title": "Kley",
    "itemsInBox": 2,
    "weight": 2500,
    "price": 86000,
    "imgSrc": "1 (4).jpg"
  },

  {
    "id": 6,
    "title": "HAMMER",
    "itemsInBox": 1,
    "weight": 3000,
    "price": 85000,
    "imgSrc": "1 (5).jpg"
  },
  {
    "id": 7,
    "title": "PVA",
    "itemsInBox": 6,
    "weight": 500,
    "price": 25000,
    "imgSrc": "1 (6).jpg"
  },
  {
    "id": 8,
    "title": "LIT kley",
    "itemsInBox": 1,
    "weight": 2000,
    "price": 35000,
    "imgSrc": "1 (7).jpg"
  },
  {
    "id": 9,
    "title": "Kley",
    "itemsInBox": 3,
    "weight": 2500,
    "price": 86000,
    "imgSrc": "1 (8).jpg"
  },

  {
    "id": 10,
    "title": "HAMMER",
    "itemsInBox": 1,
    "weight": 3000,
    "price": 85000,
    "imgSrc": "1 (9).jpg"
  },
  {
    "id": 11,
    "title": "PVA",
    "itemsInBox": 5,
    "weight": 500,
    "price": 25000,
    "imgSrc": "1 (10).jpg"
  },
  {
    "id": 12,
    "title": "LIT kley",
    "itemsInBox": 3,
    "weight": 2000,
    "price": 35000,
    "imgSrc": "1 (11).jpg"
  },
  {
    "id": 13,
    "title": "Kley",
    "itemsInBox": 2,
    "weight": 2500,
    "price": 86000,
    "imgSrc": "1 (12).jpg"
  },

  {
    "id": 14,
    "title": "HAMMER",
    "itemsInBox": 1,
    "weight": 3000,
    "price": 85000,
    "imgSrc": "1 (13).jpg"
  },
  {
    "id": 15,
    "title": "PVA",
    "itemsInBox": 6,
    "weight": 500,
    "price": 25000,
    "imgSrc": "1 (14).jpg"
  },
  {
    "id": 16,
    "title": "HAMMER",
    "itemsInBox": 1,
    "weight": 3000,
    "price": 85000,
    "imgSrc": "1 (17).jpg"
  },
  {
    "id": 17,
    "title": "PVA",
    "itemsInBox": 5,
    "weight": 500,
    "price": 25000,
    "imgSrc": "1 (18).jpg"
  },
  {
    "id": 18,
    "title": "LIT kley",
    "itemsInBox": 3,
    "weight": 2000,
    "price": 35000,
    "imgSrc": "1 (19).jpg"
  },
  {
    "id": 19,
    "title": "Kley",
    "itemsInBox": 2,
    "weight": 2500,
    "price": 86000,
    "imgSrc": "1 (20).jpg"
  },

  {
    "id": 20,
    "title": "HAMMER",
    "itemsInBox": 1,
    "weight": 3000,
    "price": 85000,
    "imgSrc": "1 (21).jpg"
  },
  {
    "id": 21,
    "title": "PVA",
    "itemsInBox": 6,
    "weight": 500,
    "price": 25000,
    "imgSrc": "1 (22).jpg"
  },
  {
    "id": 22,
    "title": "LIT kley",
    "itemsInBox": 1,
    "weight": 2000,
    "price": 35000,
    "imgSrc": "1 (23).jpg"
  },
  {
    "id": 23,
    "title": "LIT kley",
    "itemsInBox": 1,
    "weight": 2000,
    "price": 35000,
    "imgSrc": "1 (15).jpg"
  },
  {
    "id": 24,
    "title": "PVA",
    "itemsInBox": 5,
    "weight": 500,
    "price": 25000,
    "imgSrc": "1 (24).jpg"
  }
]