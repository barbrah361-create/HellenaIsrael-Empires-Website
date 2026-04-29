document.addEventListener("DOMContentLoaded", () => {

  const cartItemsContainer = document.getElementById("cart-items");
  const totalAmountEl = document.getElementById("total-amount");
  const clearCartBtn = document.getElementById("clear-cart");
  const sendWhatsAppBtn = document.getElementById("send-whatsapp");

  let cart = JSON.parse(localStorage.getItem("cart")) || {};

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function renderCart() {
    cartItemsContainer.innerHTML = "";

    const items = Object.values(cart);
    let total = 0;

    if (items.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      totalAmountEl.textContent = "0";
      return;
    }

    items.forEach(item => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;

      const div = document.createElement("div");
      div.classList.add("cart-item");

      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="item-details">
          <h4>${item.name}</h4>
          <p>Ksh ${item.price} × ${item.qty}</p>
          <p><strong>Total: Ksh ${itemTotal}</strong></p>

          <div class="qty-controls">
            <button class="decrease" data-id="${item.id}">-</button>
            <span>${item.qty}</span>
            <button class="increase" data-id="${item.id}">+</button>
            <button class="remove" data-id="${item.id}">Remove</button>
          </div>
        </div>
      `;

      cartItemsContainer.appendChild(div);
    });

    totalAmountEl.textContent = total;
  }

  
  cartItemsContainer.addEventListener("click", (e) => {

    const id = e.target.dataset.id;
    if (!id) return;

    if (e.target.classList.contains("increase")) {
      cart[id].qty += 1;
    }

    if (e.target.classList.contains("decrease")) {
      cart[id].qty -= 1;

      if (cart[id].qty <= 0) {
        delete cart[id];
      }
    }

    if (e.target.classList.contains("remove")) {
      delete cart[id];
    }

    saveCart();
    renderCart();
  });

  
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      cart = {};
      saveCart();
      renderCart();
    });
  }


  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener("click", () => {

      const items = Object.values(cart);

      if (items.length === 0) {
        alert("Your cart is empty!");
        return;
      }

      let message = "Hello, I would like to order:%0A";
      let total = 0;

      items.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;

        message += `- ${item.name} x${item.qty} = Ksh ${itemTotal}%0A`;
      });

      message += `%0ATotal: Ksh ${total}`;

      const url = `https://wa.me/254717263203?text=${message}`;
      window.open(url, "_blank");
    });
  }

  renderCart();
});