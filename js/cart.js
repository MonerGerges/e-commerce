function remove(id) {
  if (getItems) {
    let itemss = JSON.parse(localStorage.getItem("productToCart"));
    let filterdItems = itemss.filter((ele) => ele.id !== id);
    setUpCartUi(filterdItems);
    localStorage.setItem("productToCart", JSON.stringify(filterdItems));
  }
  getCount();
  addCartUi();
}

function getCount() {
  let localCount = JSON.parse(localStorage.getItem("productToCart")).length;
  let productsCount = document.getElementById("count");
  productsCount.innerHTML = localCount;
}

function addCartUi() {
  let getItems = localStorage.getItem("productToCart");
  let localItems = "";
  if (getItems) {
    localItems = JSON.parse(getItems);
  }
  let homeCart = document.querySelector("#home-cart .cart-container");
  homeCart.innerHTML = "";
  for (const item of localItems) {
    const productsUi = `
        <div class="cart-body">
        <img src="${item.thumbnail}" alt="imge">
        <p>${item.title}</p>
        <span>$${item.price}</span>
        </div>
        `;
    homeCart.innerHTML += productsUi;
  }
}

function shwoCart() {
  let homeCart = document.getElementById("home-cart");
  let CartBody = document.querySelector("#home-cart .cart-container");
  if (CartBody.innerHTML !== "") {
    homeCart.classList.toggle("home-cart-actve");
  }
}
getCount();
addCartUi();