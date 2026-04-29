
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