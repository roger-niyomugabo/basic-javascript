let hide=document.getElementById("hide");
let pres=document.getElementById("press");


press.onclick=function(){
    if(hide.style.display==="none"){
    hide.style.display="block";
     pres.innerHTML="show less";
   }
   else{
       hide.style.display="none";
        pres.innerHTML="show more";
   }
}

// function myFunction() {
//     var hide = document.getElementById("hide");
//     if (hide.style.display === "none") {
//       hide.style.display = "block";
//     } else {
//       hide.style.display ="none";
//     }
//   }

    
