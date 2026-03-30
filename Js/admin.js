let products = JSON.parse(localStorage.getItem("products")) || []

function addProduct(){

const name=document.getElementById("name").value
const price=parseInt(document.getElementById("price").value)
const image=document.getElementById("image").value

const id=Date.now()

products.push({id,name,price,image})

localStorage.setItem("products",JSON.stringify(products))

showProducts()

}

function showProducts(){

const box=document.getElementById("adminProducts")

box.innerHTML=""

products.forEach((p,index)=>{

box.innerHTML+=`

<div>

${p.name} - ${p.price}

<button onclick="deleteProduct(${index})">Delete</button>

</div>

`

})

}

function deleteProduct(index){

products.splice(index,1)

localStorage.setItem("products",JSON.stringify(products))

showProducts()

}

showProducts()