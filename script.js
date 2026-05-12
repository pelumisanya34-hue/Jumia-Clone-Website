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

/* CART */

let cartCount = 0;

function addToCart(product){

cartCount++;

document.getElementById("cart-count")
.innerText = cartCount;

const cartItems =
document.getElementById("cart-items");

const item =
document.createElement("div");

item.classList.add("cart-item");

item.innerHTML = `
<h3>${product}</h3>
<p>Added Successfully</p>
`;

cartItems.appendChild(item);

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