function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open")
}

var viewIcon = document.getElementById("view-icon");

viewIcon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        viewIcon.setAttribute("src", "./assets/sun.png");
    }else{
        viewIcon.setAttribute("src", "./assets/moon.png");
    }
}

 