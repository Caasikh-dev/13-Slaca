window.addEventListener('load',function(){

    const buttonAside = document.getElementById("show-aside");
    const asideMenu = document.getElementById("aside-menu");

    buttonAside.addEventListener('click', function(){
        asideMenu.classList.toggle("open")
    })


});