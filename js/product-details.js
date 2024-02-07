let productDetails = document.getElementById("product-details");
let localId = localStorage.getItem("productId");
function getProduct() {
  axios.get("https://dummyjson.com/products").then((respons) => {
    let products = respons.data.products;
    let prodct = products.find((item) => item.id == localId);
    let images = prodct.images;
    productDetails.innerHTML = "";
    let content = `
    <div class="col-lg-6 product-imges">
    <div id="product-img" class="imges">
        
    </div>
    <div class="thumbnail">
        <img src="${prodct.thumbnail}" alt="imge">
    </div>
</div>
<div class="col-lg-6 product-body">
    <div class="product-details">
        <h5>${prodct.title}</h5>
        <h6>${prodct.brand}</h6>
        <p>${prodct.description}</p>
    </div>
    <div class="s-and-r">
        <div class="s">
            <p>$${prodct.price} <span>-$${prodct.discountPercentage}</span></p>
        </div>
        <div class="r">
            <i class="fa-solid fa-star"></i>
            <p> ${prodct.rating} <span>rating</span></p>
        </div>
    </div>
    <div class="product-stock">
        <h6><span>${prodct.stock}</span>in stock</h6>
    </div>
</div>
          `;
    productDetails.innerHTML = content;
    let productImg = document.getElementById("product-img");
    images.forEach((img) => {
      let contentImg = `
            <div class="product-img-container">
              <img src="${img}" alt="imge">
          </div>
            `;
            productImg.innerHTML += contentImg
    });
  });
}

getProduct();
