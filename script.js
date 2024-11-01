function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// logic for dark mode
const viewIcons = [document.getElementById("view-icon"), document.getElementById("view-icon-1")];
const arrow = document.querySelector(".arrow");
const icons = {
    github: document.querySelector(".github-icon"),
    linkedin: document.querySelector(".linkedin-icon"),
    linkedin2: document.querySelector(".linkedin-icon-2"),
    experience: document.querySelector(".experience-icon"),
    education: document.querySelector(".education-icon"),
    email: document.querySelector(".email-icon")
};

function toggleTheme(icon) {
    document.body.classList.toggle("dark-theme");
    const isDarkTheme = document.body.classList.contains("dark-theme");

    icon.setAttribute("src", isDarkTheme ? "./assets/sun.png" : "./assets/moon.png");
    arrow.setAttribute("src", isDarkTheme ? "./assets/arrow-white.png" : "./assets/arrow.png");

    icons.github.setAttribute("src", isDarkTheme ? "./assets/github-white.png" : "./assets/github.png");
    icons.experience.setAttribute("src", isDarkTheme ? "./assets/experience-white.png" : "./assets/experience.png");
    icons.education.setAttribute("src", isDarkTheme ? "./assets/education-white.png" : "./assets/education.png");
    icons.linkedin.setAttribute("src", isDarkTheme ? "./assets/linkedin-white.png" : "./assets/linkedin.png");
    icons.linkedin2.setAttribute("src", isDarkTheme ? "./assets/linkedin-white.png" : "./assets/linkedin.png");
    icons.email.setAttribute("src", isDarkTheme ? "./assets/email-white.png" : "./assets/email.png");
}

viewIcons.forEach(icon => {
    icon.onclick = function () {
        toggleTheme(icon);
    };
});
