
const form = document.getElementById("skinForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const skinType = document.getElementById("skinType").value;
    const concern = document.getElementById("concern").value;

    const message =
`Hey Helena 💖, I need skincare advice:

Skin Type: ${skinType}
Skin Problem: ${concern}

What do you recommend?`;

    window.open(
        "https://wa.me/254717263203text=" + encodeURIComponent(message),
        "_blank"
    );
});


let i = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
}, 4000);