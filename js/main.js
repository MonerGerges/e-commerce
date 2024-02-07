let products = "";
(function getProduct() {
  axios.get("https://dummyjson.com/products").then((respons) => {
    products = respons.data.products;
    let productsHtml = document.getElementById("products-html");
    productsHtml.innerHTML = "";
    for (product of products) {
      let content = `
        <div id="prodct-${product.id}" class="product col-lg-4">
        <a onclick="productUI(${product.id})">
        <div class="product-img">
            <img src=${product.thumbnail}>
          </div>
          <div class="product-text">
            <span> ${product.title} </span>
            <p>${product.description}</p>
            <h3>${product.price}$</h3>
            </div>
            </a>
          <button onclick="addBroductToLocal(${product.id})"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
        `;
      product.id <= 6 ? (productsHtml.innerHTML += content) : "";
    }
  });
})();

let addProduct = localStorage.getItem("productToCart")
  ? JSON.parse(localStorage.getItem("productToCart"))
  : [];
function addBroductToLocal(id) {
  let choose = products.find((ele) => ele.id === id);
  addProduct = [...addProduct, choose];
  localStorage.setItem("productToCart", JSON.stringify(addProduct));
  let homeCart = document.getElementById("home-cart");
  homeCart.classList.add("home-cart-actve")
  getProductCount();
  setUpCartUi();
}

function getProductCount() {
  let count = addProduct.length;
  let productsCount = document.querySelector(".product-count p");
  productsCount.innerHTML = count;
}

function shwoCart() {
  let homeCart = document.getElementById("home-cart");
  let CartBody = document.querySelector("#home-cart .cart-container");
  if (CartBody.innerHTML !== "") {
    homeCart.classList.toggle("home-cart-actve");
  }
}

function setUpCartUi() {
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

function productUI(id) {
  localStorage.setItem("productId", id)
  window.location = "../product.html"
}

getProductCount();
setUpCartUi();
