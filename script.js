let cart = [];

// SCROLL
function goToProducts() {
  document.querySelector(".products").scrollIntoView({
    behavior: "smooth"
  });
}

// ADD TO CART
function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

// UPDATE CART
function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let count = document.getElementById("count");

  cartItems.innerHTML = "";

  cart.forEach(item => {
    cartItems.innerHTML += `<div>${item.name} - ₹${item.price}</div>`;
  });

  count.innerText = cart.length;
}

// TOGGLE CART
function toggleCart() {
  let box = document.getElementById("cart-box");

  box.style.display = box.style.display === "block" ? "none" : "block";
}
let cartCount = 0;

function addToCart() {
  cartCount++;

  document.getElementById("cart-count").innerText = cartCount;
}