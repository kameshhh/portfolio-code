function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open")
}

var viewIcon = document.getElementById("view-icon");
var viewIcon1 = document.getElementById("view-icon-1");
var arrow = document.querySelector(".arrow");
var github = document.querySelector(".github-icon");
var linkedin = document.querySelector(".linkedin-icon");
var linkedin2 = document.querySelector(".linkedin-icon-2");
var experience = document.querySelector(".experience-icon");
var education = document.querySelector(".education-icon")
var email = document.querySelector(".email-icon");

viewIcon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        viewIcon.setAttribute("src", "./assets/sun.png");
        arrow.setAttribute("src", "./assets/arrow-white.png");
        github.setAttribute("src", "./assets/github-white.png");
        experience.setAttribute("src", "./assets/experience-white.png");
        education.setAttribute("src", "./assets/education-white.png");
        linkedin.setAttribute("src", "./assets/linkedin-white.png");
        linkedin2.setAttribute("src", "./assets/linkedin-white.png");
        email.setAttribute("src", "./assets/email-white.png");
    } else {
        viewIcon.setAttribute("src", "./assets/moon.png");
        arrow.setAttribute("src", "./assets/arrow.png");
        github.setAttribute("src", "./assets/github.png");
        experience.setAttribute("src", "./assets/experience.png");
        education.setAttribute("src", "./assets/education.png");
        linkedin.setAttribute("src", "./assets/linkedin.png");
        linkedin.setAttribute("src", "./assets/linkedin.png");
        email.setAttribute("src", "./assets/email.png");
    }
}

viewIcon1.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        viewIcon1.setAttribute("src", "./assets/sun.png");
    } else {
        viewIcon1.setAttribute("src", "./assets/moon.png");
    }
}
