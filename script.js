function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open")
}

var viewIcon = document.getElementById("view-icon");
var viewIcon1 = document.getElementById("view-icon-1");

viewIcon.onclick = function(){
    console.log("happy")
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        viewIcon.setAttribute("src", "./assets/sun.png");
    }else{
        viewIcon.setAttribute("src", "./assets/moon.png");
    }
}

viewIcon1.onclick = function(){
    console.log("happy")
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        viewIcon1.setAttribute("src", "./assets/sun.png");
    }else{
        viewIcon1.setAttribute("src", "./assets/moon.png");
    }
}


 