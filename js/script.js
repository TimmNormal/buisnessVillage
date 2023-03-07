document.querySelectorAll(".header_text").forEach(t=>{
    t.addEventListener("click",()=>{
        document.querySelector(`#${t.dataset.block}`).scrollIntoView({ behavior: "smooth", block: "top"})
    })
})
var slideIndex = 0

const blocks = document.querySelectorAll(".scrollFade")

right.addEventListener("click",()=>{
    next()
})

left.addEventListener("click",()=>{
    prev()
})


const SLIDES = [
    "slide1.jpg",
    "slide2.jpg",
    "slide3.jpg",
    "slide4.jpg",
]



function changeSlide (){
    slider.animate([
        {opacity:1},
        {opacity:0},
        {opacity:0},
        {opacity:1},
    ], {
        duration:1000
    })
    slider.src = `images/${SLIDES[slideIndex]}`
}


function next(){
    slideIndex +=1
    if(slideIndex >= SLIDES.length){
        slideIndex = 0
    }
    changeSlide()
}


function prev(){
    slideIndex -=1
    if(slideIndex < 0){
        slideIndex = SLIDES.length - 1
    }
    changeSlide()
}


window.addEventListener("scroll",()=>{
    blocks.forEach(e=>{
        const top = e.getBoundingClientRect().top
        if(window.innerHeight - top > 0){

            e.classList.add("scrollVis")
        }
    })
})