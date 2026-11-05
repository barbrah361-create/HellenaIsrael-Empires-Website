document.addEventListener("DOMContentLoaded", () => {

  const cartItemsContainer = document.getElementById("cart-items");
  const totalAmountEl = document.getElementById("total-amount");
  const clearCartBtn = document.getElementById("clear-cart");
  const sendWhatsAppBtn = document.getElementById("send-whatsapp");

  let cart = JSON.parse(localStorage.getItem("cart")) || {};

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    if (typeof updateCheckoutLinkCount === "function") {
      updateCheckoutLinkCount();
    }
  }

  function renderCart() {
    cartItemsContainer.innerHTML = "";

    const items = Object.values(cart);
    let total = 0;

    if (items.length === 0) {
      cartItemsContainer.classList.add("is-empty");
      cartItemsContainer.innerHTML = `
        <div class="empty-cart-state">
          <i class="fas fa-shopping-basket" aria-hidden="true"></i>
          <strong>Your cart is empty</strong>
          <span>Browse our products and add your favourites to get started.</span>
        </div>
      `;
      totalAmountEl.textContent = "0";
      return;
    }
    cartItemsContainer.classList.remove("is-empty");

    items.forEach(item => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;

      const div = document.createElement("div");
      div.classList.add("cart-item");

      const image = document.createElement("img");
      image.src = item.image;
      image.alt = item.name;

      const details = document.createElement("div");
      details.className = "item-details";

      const name = document.createElement("h4");
      name.textContent = item.name;

      const unitPrice = document.createElement("p");
      unitPrice.textContent = `Ksh ${item.price} × ${item.qty}`;

      const subtotal = document.createElement("p");
      subtotal.className = "cart-item-subtotal";
      subtotal.textContent = `Subtotal: Ksh ${itemTotal}`;

      const controls = document.createElement("div");
      controls.className = "qty-controls";

      const decrease = document.createElement("button");
      decrease.className = "decrease";
      decrease.dataset.id = item.id;
      decrease.type = "button";
      decrease.setAttribute("aria-label", `Decrease quantity of ${item.name}`);
      decrease.textContent = "-";

      const quantity = document.createElement("span");
      quantity.className = "cart-qty";
      quantity.textContent = item.qty;

      const increase = document.createElement("button");
      increase.className = "increase";
      increase.dataset.id = item.id;
      increase.type = "button";
      increase.setAttribute("aria-label", `Increase quantity of ${item.name}`);
      increase.textContent = "+";

      const remove = document.createElement("button");
      remove.className = "remove";
      remove.dataset.id = item.id;
      remove.type = "button";
      remove.textContent = "Remove";

      controls.append(decrease, quantity, increase, remove);
      details.append(name, unitPrice, subtotal, controls);
      div.append(image, details);

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

      let message = "Hello, I would like to place an order with the following items:\n\n";
      let total = 0;
      let totalQty = 0;

      items.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        totalQty += item.qty;

        message += `- ${item.name}\n`;
        message += `  Quantity: ${item.qty}\n`;
        message += `  Unit price: Ksh ${item.price}\n`;
        message += `  Subtotal: Ksh ${itemTotal}\n\n`;
      });

      message += `Total items: ${totalQty}\n`;
      message += `Total amount: Ksh ${total}\n\n`;
      message += "Please let me know the next steps for payment and delivery.";

      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/254717263203?text=${encodedMessage}`;
      window.open(url, "_blank");
    });
  }

  renderCart();
});