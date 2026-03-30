let products = [
{
id:1,
name:"Luxury Perfume",
price:2500,
image:"images/product1.jpg"
},

{
id:2,
name:"Body Lotion",
price:1800,
image:"images/product2.jpg"
},

{
id:3,
name:"Makeup Kit",
price:3200,
image:"images/product3.jpg"
}

]

let cart = JSON.parse(localStorage.getItem("cart")) || []

function displayProducts(){

const container = document.getElementById("products")

container.innerHTML=""

products.forEach(product=>{

container.innerHTML += `

<div class="productCard">

<img src="${product.image}" class="productImg">

<h3>${product.name}</h3>

<p class="price">KSh ${product.price}</p>

<button onclick="addToCart(${product.id})">Add to Cart</button>

</div>

`

})

}

function addToCart(id){

const product = products.find(p=>p.id===id)

cart.push(product)

localStorage.setItem("cart",JSON.stringify(cart))

displayCart()

}

function displayCart(){

const cartBox = document.getElementById("cartItems")

cartBox.innerHTML=""

let total = 0

cart.forEach((item,index)=>{

cartBox.innerHTML += `

<div class="cartItem">

${item.name} - KSh ${item.price}

<button onclick="removeItem(${index})">Remove</button>

</div>

`

total += item.price

})

document.getElementById("total").innerText =
"Total: KSh " + total

}

function removeItem(index){

cart.splice(index,1)

localStorage.setItem("cart",JSON.stringify(cart))

displayCart()

}

function clearCart(){

cart = []

localStorage.setItem("cart",JSON.stringify(cart))

displayCart()

}

displayProducts()
displayCart()
function orderWhatsApp(){

let cart = JSON.parse(localStorage.getItem("cart")) || []

if(cart.length === 0){
alert("Your cart is empty")
return
}

let message = "Hello, I want to order:%0A"
let total = 0

cart.forEach(item=>{
message += item.name + " - KSh " + item.price + "%0A"
total += item.price
})

message += "%0ATotal: KSh " + total

window.open("https://wa.me/254717263203?text=" + message)

}