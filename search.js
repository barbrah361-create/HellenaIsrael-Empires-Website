const input = document.getElementById("searchInput");
const results = document.getElementById("results");


input.addEventListener("input", () => {

    const value = input.value.toLowerCase().trim();

    
    if(value === ""){
        results.innerHTML = "<p class='empty'>Start typing to search products ✨</p>";
        return;
    }

    
    const filtered = products.filter(p => {
        const name = p.name.toLowerCase();
        return name.startsWith(value) || name.includes(value);
    });

    display(filtered);
});


function display(items){

    results.innerHTML = "";

    if(items.length === 0){
        results.innerHTML = "<p class='empty'>No matching products 😢</p>";
        return;
    }

    items.forEach(p => {

        results.innerHTML += `
        <div class="card">
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p>KES ${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
        `;
    });
}


function addToCart(id){
    const product = products.find(p => p.id === id);
    alert(product.name + " added 💖");
}