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

