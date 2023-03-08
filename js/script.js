document.querySelectorAll(".header_text").forEach(t=>{
    t.addEventListener("click",()=>{
        document.querySelector(`#${t.dataset.block}`).scrollIntoView({ behavior: "smooth", block: "start"})
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
    "slide5.jpg",
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

blocks.forEach(e=>{
    const top = e.getBoundingClientRect().top
    if(window.innerHeight - top > 0){

        e.classList.add("scrollVis")
    }
})
window.addEventListener("scroll",()=>{
    blocks.forEach(e=>{
        const top = e.getBoundingClientRect().top
        if(window.innerHeight - top > 0){

            e.classList.add("scrollVis")
        }
    })
})


send.addEventListener("click",async()=>{
    var isValid = true
    var message = ""
    document.querySelectorAll(".send_input").forEach(i=>{
        message += i.value + "\n"
        if(!i.value){
            isValid = false
            i.animate([
                {
                    transform:"translate(0,0)",
                    borderColor:"#ff7066"
                },
                {
                    transform:"translate(20px,20px)",
                    borderColor:"#ff7066"
                },
                {
                    transform:"translate(-20px,-20px)",
                    borderColor:"#ff7066"
                },
                {
                    transform:"translate(0,0)",
                   
                }
            ],{
                duration:500
            })
        }
    })

    if(isValid){
        var title = "Лид форма по Buisness village"
        console.log("D");
        const response = await fetch(
            "https://tools.cleverra.ru/send_mail", {
            method: 'POST', // или 'PUT'
            mode: 'cors',
            body: JSON.stringify({
                title,
                message,
                to_mail:"cleveratest@gmail.com"
            }), // данные могут быть 'строкой' или {объектом}!
            headers: {
            'Content-Type': 'application/json'
            }
            });
    }
})