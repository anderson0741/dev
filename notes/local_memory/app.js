
let cucBtn = document.getElementById("cucumber");
let salsaBtn = document.getElementById("salsa");
let milkBtn = document.getElementById("milk");
let berrBtn = document.getElementById("berr");

let cartView = document.getElementById("cartView")



function appendLi(name){
    let li = document.createElement("li");
    li.innerHTML = name;
    cartView.appendChild(li);
}

// let cart = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);
cart.forEach(appendLi);


function addToCart(event){
    cart.push(event.target.name);
    localStorage.setItem("cart", JSON.stringify(cart)); 
    appendLi(event.target.name); 
}

cucBtn.onclick = addToCart;
salsaBtn.onclick = addToCart;
milkBtn.onclick = addToCart;
berrBtn.onclick = addToCart;