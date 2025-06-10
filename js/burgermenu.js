const burger = document.querySelector(".burgermenu")
const navbar = document.getElementById("nav")
const closeBtn = document.getElementById("nav-close")
// const navContent = document.querySelectorAll("content")

burger.addEventListener("click", showMenu);
closeBtn.addEventListener("click", closeMenu);
// navContent.addEventListener("click", closeMenu);

function showMenu() {
    if (window.innerWidth < 600) {
        navbar.style.width = "100%";
    }
    else navbar.style.width = "33%"
}

function closeMenu() {
    console.log("Luk");
    navbar.style.width = "0%";
} 