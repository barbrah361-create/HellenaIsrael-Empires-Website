let index = 0
const slides = document.querySelectorAll(".slide")

function showSlide(){

slides.forEach(slide=>{
slide.style.display="none"
})

index++

if(index>slides.length){index=1}

slides[index-1].style.display="block"

setTimeout(showSlide,3500)

}

showSlide()