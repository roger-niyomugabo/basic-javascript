let menu=document.querySelector(".menu");
let menuItem=document.querySelectorAll(".menuItem");
let hamburger=document.querySelector(".hamburger");
let menuIcon=document.querySelector(".menuIcon");
let closeIcon=document.querySelector(".closeIcon");


hamburger.addEventListener("click", function menuToggle(){
    if(menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
        closeIcon.style.display="none";
        menuIcon.style.display="block";
    }else{
        menu.classList.add("showMenu");
        closeIcon.style.display="block";
        menuIcon.style.display="none";
    }
});


menuItem.forEach(function(menuItem){
    menuItem.addEventListener("click", menuToggle());
})
