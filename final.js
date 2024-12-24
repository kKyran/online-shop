const products = [
  { id: 1, name: "Bag 1", price: 20000, image: "Screenshot 2024-12-24 013037.png" },
  { id: 2, name: "Bag 2", price: 25000, image: "Screenshot 2024-12-24 082607.png" },
  { id: 3, name: "Bag 3", price: 15000, image: "Screenshot 2024-12-24 082638.png" },
];

let cart = [];

function addToCart(productName, price) {
  if (!productName || !price) {
      console.error("Error: Invalid product data.");
      return;
  }

  cart.push({
      productName,
      price,
  });
  alert(`${productName} added to cart!`);
  showCart();
}

function showCart() {
  const cartContent = document.getElementById("cartContent");

  if (!cartContent) {
      console.error("Error: #cartContent element not found.");
      return;
  }

  cartContent.innerHTML = ""; 

  cartContent.classList.add("fade-in"); 
  setTimeout(() => cartContent.classList.remove("fade-in"), 500); 

  let total = 0;
  if (cart.length === 0) {
      cartContent.innerHTML = "Cart is empty..";
  } else {
      cart.forEach((item, index) => {
          cartContent.innerHTML += `
              ${item.productName} - ${item.price} ₸ 
              <button onclick="removeFromCart(${index})">Remove</button><br>
          `;
          total += item.price;
      });
      cartContent.innerHTML += `<br><strong>total</strong> ${total} ₸`;
  }
}


function removeFromCart(index) {
  if (index < 0 || index >= cart.length) {
      console.error("Error: Invalid cart index.");
      return;
  }

  cart.splice(index, 1); 
  showCart(); 
}


function buyNow() {
  if (cart.length === 0) {
      alert("Cart is empty. Add items first.!");
      return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  alert(`Purchase completed successfully! Total price: ${total} ₸`);
  cart = []; 
  showCart(); 
}


function displayProducts() {
  const productList = document.getElementById("product-list");

  if (!productList) {
      console.error("Error: #product-list element not found.");
      return;
  }

  productList.innerHTML = ""; 

  products.forEach((product) => {
      const productHTML = `
          <div class="col-md-4">
              <div class="card">
                  <img src="${product.image}" class="card-img-top" alt="${product.name}">
                  <div class="card-body">
                      <h5 class="card-title">${product.name}</h5>
                      <p class="card-text">Бағасы: ${product.price} ₸</p>
                      <button onclick="addToCart('${product.name}', ${product.price})" class="btn btn-success">Add to card</button>
                  </div>
              </div>
          </div>
      `;
      productList.innerHTML += productHTML;
  });
}

document.addEventListener("DOMContentLoaded", displayProducts);
