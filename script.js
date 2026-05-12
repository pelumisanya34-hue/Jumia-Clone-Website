/* MOBILE SIDEBAR */

const menuBtn =
document.querySelector(".menu-btn");

const sidebar =
document.querySelector(".sidebar");

menuBtn.addEventListener("click",()=>{

sidebar.classList.toggle("active");

});

/* DARK MODE */

function toggleTheme(){

document.body.classList.toggle("dark-mode");

}

/* SEARCH */

function searchProducts(){

let input =
document.getElementById("searchInput")
.value.toLowerCase();

let cards =
document.querySelectorAll(".product-card");

cards.forEach(card=>{

let name =
card.dataset.name;

if(name.includes(input)){

card.style.display = "block";

}
else{

card.style.display = "none";

}

});

}

/* LOGIN MODAL */

function openModal(){

document.getElementById("loginModal")
.style.display = "flex";

}

function closeModal(){

document.getElementById("loginModal")
.style.display = "none";

}

/* SHOPPING CART */

let cart = [];

function addToCart(product, price){

  cart.push({
    product,
    price
  });

  updateCart();

}

/* UPDATE CART */

function updateCart(){

  const cartItems =
  document.getElementById("cart-items");

  const cartCount =
  document.getElementById("cart-count");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item,index)=>{

    total += item.price;

    cartItems.innerHTML += `

    <div class="cart-item">

      <h3>${item.product}</h3>

      <p>₦${item.price.toLocaleString()}</p>

      <button onclick="removeItem(${index})">
      Remove
      </button>

    </div>

    `;

  });

  cartCount.innerText = cart.length;

  cartItems.innerHTML += `

  <div class="cart-total">

    <h2>
    Total: ₦${total.toLocaleString()}
    </h2>

    <button onclick="checkout(${total})"
    class="checkout-btn">

      Proceed To Payment

    </button>

  </div>

  `;
}

/* REMOVE ITEM */

function removeItem(index){

  cart.splice(index,1);

  updateCart();

}

/* PAYMENT METHOD */

function checkout(total){

  if(cart.length === 0){

    alert("Your cart is empty");

    return;

  }

  let paymentMethod =
  prompt(
  "Choose Payment Method:\n\n1. Card\n2. Bank Transfer\n3. Cash On Delivery"
  );

  if(paymentMethod === null){

    return;

  }

  if(paymentMethod == "1"){

    processCardPayment(total);

  }

  else if(paymentMethod == "2"){

    processTransfer(total);

  }

  else if(paymentMethod == "3"){

    processCashDelivery(total);

  }

  else{

    alert("Invalid Payment Method");

  }

}

/* CARD PAYMENT */

function processCardPayment(total){

  let cardNumber =
  prompt("Enter Card Number");

  let expiry =
  prompt("Enter Expiry Date");

  let cvv =
  prompt("Enter CVV");

  if(cardNumber && expiry && cvv){

    alert(
    `Payment Successful\n\nAmount: ₦${total.toLocaleString()}`
    );

    clearCart();

  }
  else{

    alert("Payment Cancelled");

  }

}

/* BANK TRANSFER */

function processTransfer(total){

  alert(

`Transfer ₦${total.toLocaleString()}

Bank: GTBank
Account Name: Jumia Clone
Account Number: 0123456789`

  );

  alert("Order Placed Successfully");

  clearCart();

}

/* CASH ON DELIVERY */

function processCashDelivery(total){

  alert(

`Order Confirmed

You will pay ₦${total.toLocaleString()}
upon delivery.`

  );

  clearCart();

}

/* CLEAR CART */

function clearCart(){

  cart = [];

  updateCart();

}

/* WISHLIST */

function addWishlist(){

alert("Added To Wishlist");

}

/* PRODUCT POPUP */

function showPopup(title,price,image){

document.getElementById("popup")
.style.display = "flex";

document.getElementById("popup-title")
.innerText = title;

document.getElementById("popup-price")
.innerText = price;

document.getElementById("popup-img")
.src = image;

}

function closePopup(){

document.getElementById("popup")
.style.display = "none";

}