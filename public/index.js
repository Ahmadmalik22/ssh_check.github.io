const ul=document.querySelector("ul");
const hamburger=document.querySelector(".hamburger")
const top_in=document.querySelector(".top_in")
const body=document.querySelector("main")
const left=document.querySelector(".left")
const right=document.querySelector(".right")
const gallery=document.querySelector(".b_gallery")
ham_icon_control=true;
hamburger.addEventListener("click",()=>{
if(ham_icon_control){
    // top_in.style.top="72px"
    ul.classList.add("top_in")
body.style.backgroundImage="linear-gradient(to right,rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(./bg.webp)"
hamburger.innerHTML='<i class="fa-solid fa-xmark"></i>'
ham_icon_control=false;}
else {
    ham_icon_control=true;
    hamburger.innerHTML='<i class="fa-solid fa-bars"></i>'
    ul.classList.remove("top_in")
body.style.backgroundImage="url(./bg.webp)"
}
})

// slider
left.addEventListener("click",()=>{
    gallery.scrollLeft -=300;
})
right.addEventListener("click",()=>{
    gallery.scrollLeft +=300;
})