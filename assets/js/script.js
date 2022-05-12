window.addEventListener('load',function(){

    const buttonAside = document.getElementById("show-aside");
    const asideMenu = document.getElementById("aside-menu");

    buttonAside.addEventListener('click', function(){
        asideMenu.classList.toggle("open")
    })



});

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn-read-more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "ver mais"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "ver menos"; 
    moreText.style.display = "inline";
  }
}