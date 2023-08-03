const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItemsList = document.querySelector(".cart-items");
const cartTotal = document.getElementById("cart-total");

let cartTotalValue = 0;
let cartItems = [];

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const product = e.target.parentElement;
    const productName = product.querySelector("h2").innerText;
    const productPrice = parseFloat(product.querySelector("button").getAttribute("data-price"));

    addToCart(productName, productPrice);
    updateCartTotal();
  });
});

function addToCart(name, price) {
  const existingItem = cartItems.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ name, price, quantity: 1 });
  }
}

function updateCartTotal() {
  cartTotalValue = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  cartTotal.innerText = cartTotalValue.toFixed(2);

  renderCartItems();
}

function renderCartItems() {
  cartItemsList.innerHTML = "";
  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`;
    cartItemsList.appendChild(li);
  });
}
