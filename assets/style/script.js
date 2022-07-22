// ubah navbar jika di scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0);
    
})

// Navbar Active
var navbarActive = document.getElementById("navbar");
var active = navbarActive.getElementsByClassName("nav-link");
for(var i = 0; i<active.length; i++){
    active[i].addEventListener('click', function(){
        var current = document.getElementsByClassName("nav-active");
        current[0].className = current[0].className.replace(" nav-active")
        this.className += " nav-active"
    });
}

// navbar humburger
const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-nav");
const closeBtn = document.querySelector("#close-menu-nav");

// show navbar menu 
menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

// close navbar menu
const closeNav =() =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);

//dropdwon-menu
const layanan1 = document.getElementById("layanan1");
const content1 = document.getElementById("content1");
const layanan2 = document.getElementById("layanan2");
const content2 = document.getElementById("content2");
const layanan3 = document.getElementById("layanan3");
const content3 = document.getElementById("content3");
layanan1.addEventListener("click", ()=>{
    content1.classList.toggle("description-active");
})
layanan2.addEventListener("click", ()=>{
    content2.classList.toggle("description-active");
})
layanan3.addEventListener("click", ()=>{
    content3.classList.toggle("description-active");
})

// slider courses
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slideshow");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000);
}