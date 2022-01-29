//Get the button:
button = document.querySelector(".north");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {
//     scrollFunction()
// };
window.onscroll = function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
button.onclick=function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




//back to top using anchor tag
$("a").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});
