let hide=document.getElementById("hide");
let pres=document.getElementById("press");


pres.onclick=function(){
    if(hide.style.display==="none"){
    hide.style.display="block";
    pres.innerHTML="show less";
   
   }
   else{
       hide.style.display="none";
       pres.innerHTML="show more";
   }
}
pres.onmouseover=function(){
    pres.style.backgroundColor="violet";
}
pres.onmouseout=function(){
    pres.style.backgroundColor="whitesmoke";
}

// function myFunction() {
//     var hide = document.getElementById("hide");
//     if (hide.style.display === "none") {
//       hide.style.display = "block";
//     } else {
//       hide.style.display ="none";
//     }
//   }

    


    
