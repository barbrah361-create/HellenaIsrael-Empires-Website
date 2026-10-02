
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav.nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });
}


const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
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
}



function updateCheckoutLinkCount() {
  const checkoutLink = document.getElementById("checkout-link");
  if (!checkoutLink) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  const totalItems = Object.values(cart).reduce((sum, item) => sum + (item.qty || 0), 0);
  checkoutLink.textContent = totalItems > 0 ? `Checkout (${totalItems})` : "Checkout";
}

updateCheckoutLinkCount();
window.addEventListener("storage", updateCheckoutLinkCount);

const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".content-section");

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.section;

    sections.forEach(section => section.classList.remove("active"));

    const targetSection = document.getElementById(target);
    if (targetSection) targetSection.classList.add("active");

    if (nav) nav.classList.remove("active");
    if (menuBtn) menuBtn.classList.remove("active");
  });
});




const countryButtons = document.querySelectorAll(".tab-btn");
const countryContents = document.querySelectorAll(".tab-content .content");

countryButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    const target = btn.dataset.country;

    
    countryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    
    countryContents.forEach(content => {
      content.classList.remove("active");
    });

    const activeContent = document.getElementById(target);
    if (activeContent) {
      activeContent.classList.add("active");
    }

  });
});




const sliders = document.querySelectorAll(".country-slider");

sliders.forEach(slider => {
  const images = slider.querySelectorAll("img");
  let index = 0;

  if (images.length > 0) {
    images.forEach(img => (img.style.display = "none"));
    images[0].style.display = "block";

    setInterval(() => {
      images.forEach(img => (img.style.display = "none"));

      index = (index + 1) % images.length;
      images[index].style.display = "block";
    }, 3000);
  }
});

// ---------------------------------------------------------
// STRICT ANTI-DOWNLOAD & IMAGE PROTECTION MEASURES
// ---------------------------------------------------------

// 1. Prevent right-click (context menu) on all images
document.addEventListener('contextmenu', (e) => {
  if (e.target.tagName === 'IMG' || e.target.classList.contains('product-image-wrapper') || e.target.classList.contains('modal-image-wrapper') || e.target.classList.contains('single-product-image')) {
    e.preventDefault();
  }
});

// 2. Prevent dragging and dropping images
document.addEventListener('dragstart', (e) => {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});

// 3. Inject strict CSS rules to prevent mobile long-press and selection
const protectionStyle = document.createElement('style');
protectionStyle.textContent = `
  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none !important; /* Disables the long-press popup on iOS/Android */
    pointer-events: none !important; /* Disables direct interaction with the img element */
  }
  
  /* Create an invisible shield over the product images so right-clicking/long-pressing 
     hits the shield instead of the image, while still allowing the click to pass to the wrapper */
  .product-image-wrapper::before,
  .modal-image-wrapper::before,
  .single-product-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    cursor: pointer;
  }

  /* Prevent printing */
  @media print {
    body {
      display: none !important;
    }
  }
`;
document.head.appendChild(protectionStyle);

