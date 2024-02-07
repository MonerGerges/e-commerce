let getItems = localStorage.getItem("productToCart");
let productsHtml = document.getElementById("products-html");

if (getItems) {
  let localItems = JSON.parse(getItems);
  setUpCartUi(localItems);
}

function setUpCartUi(items) {
  let productsUi = items.map((item) => {
    return `
        <div id="prodct-${item.id}" class="product col-lg-4">
        <div class="product-img">
            <img src=${item.thumbnail}>
        </div>
        <div class="product-text">
            <span> ${item.title} </span>
            <p>${item.description}</p>
           
            <h3>${item.price}$</h3>
        </div>
        <button onclick="remove(${item.id})"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        `;
  });

  productsHtml.innerHTML = productsUi;
}

(function setUpEmpty() {
  if (productsHtml.innerHTML === "") {
    let empty = document.getElementById("empty");
    let content = `
      <h5> the cart shopping is empty  </h5>
      <a href="">Shop Now</a>
    `;
    empty.innerHTML = content;
  }
})();

function remove(id) {
  if (getItems) {
    let itemss = JSON.parse(localStorage.getItem("productToCart"));
    let filterdItems = itemss.filter((ele) => ele.id !== id);
    setUpCartUi(filterdItems);
    localStorage.setItem("productToCart", JSON.stringify(filterdItems));
  }
  setUpEmpty();
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

function setUpEmpty() {
  let productHtml = document.getElementById("products-html");
  if (productHtml.innerHTML === "") {
    let empty = document.getElementById("empty");
    let content = `
      <h5> the cart shopping is empty  </h5>
      <a href="">Shop Now</a>
    `;
    empty.innerHTML = content;
  }
}

getCount();
addCartUi();
