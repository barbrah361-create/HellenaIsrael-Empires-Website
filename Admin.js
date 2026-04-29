document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById("menu-btn");
  const nav = document.getElementById("nav");
  const themeBtn = document.getElementById("theme-btn");

  
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      themeBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      themeBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });

  
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });


  const productForm = document.getElementById("product-form");
  const productTable = document.getElementById("product-table").querySelector("tbody");

  productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;
    const image = document.getElementById("product-image").value;
    const desc = document.getElementById("product-desc").value;

    
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>${price}</td>
      <td><img src="${image}" alt="${name}" class="product-thumb"></td>
      <td>${desc}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;
    productTable.appendChild(row);

    
    productForm.reset();

    
    row.querySelector(".delete-btn").addEventListener("click", () => {
      row.remove();
    });
  });
});