function setup(){
    // let myImage=document.getElementsByClassName("image");
    // document.getElementsByClassName("remove")[0].addEventListener("click", function(){
    //     myImage[0].parentNode.removeChild(myImage[0]);
    // })
    let myImage=document.querySelectorAll(".remove").forEach(function (button){
    button.addEventListener('click', function(){
        button.parentElement.remove()
    })
    });
}
document.body.innerHTML=`
<h2>REMOVE ANY IMAGE FROM THE GALLERY</h2>
<div class="image">
<img src="imges/image1.jpg" alt="first">
<button class="remove">delete</button>
</div>
 <div class="image">
<img src="imges/image5.jpg" alt="second">
<button class="remove">delete</button>
</div>
 <div class="image">
<img src="imges/image3.jpg" alt="third">
<button class="remove">delete</button>
 </div>
 <div class="image">
<img src="imges/image4.jpg" alt="fourth">
<button class="remove">delete</button>
</div>
<div class="image">
<img src="imges/image5.jpg" alt="second">
<button class="remove">delete</button>
</div>
<div class="image">
<img src="imges/image4.jpg" alt="fourth">
<button class="remove">delete</button>
</div>
<div class="image">
<img src="imges/image1.jpg" alt="first">
<button class="remove">delete</button>
</div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);
