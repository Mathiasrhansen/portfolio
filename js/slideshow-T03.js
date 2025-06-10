// Style tile slideshow
const slide1 = document.getElementById("slide-img1");
const slide2 = document.getElementById("slide-img2");
const slide3 = document.getElementById("slide-img3")
let counter = 1;

slide1.addEventListener("click", nextSlide)
slide2.addEventListener("click", nextSlide)
slide3.addEventListener("click", nextSlide)

function nextSlide() {
    if (counter == 0) {
        slide1.classList.toggle("hide");
        slide1.classList.add("fade");
        slide3.style.display = "none";
        slide3.classList.remove("fade");
        counter = 1;
    }
    else if (counter == 1) {
        slide1.classList.toggle("hide");
        slide1.classList.remove("fade");
        slide2.style.display = "block";
        slide2.classList.add("fade");
        counter = 2;
    }
    else if (counter == 2) {
        slide2.style.display = "none";
        slide2.classList.remove("fade");
        slide3.style.display = "block";
        slide3.classList.add("fade");
        counter= 0;
    }
}

// Prototype/layoutdiagram slideshow
const slide4 = document.getElementById("slide-img4")
const slide5 = document.getElementById("slide-img5")
let counter2 = 1;

slide4.addEventListener("click", slideshow);
slide5.addEventListener("click", slideshow);

function slideshow() {
    if (counter2 == 1) {
        slide5.style.display = "block";
        slide4.classList.toggle("hide");
        counter2 = 0;
    }
    else if (counter2 == 0) {
        slide4.classList.toggle("hide");
        slide5.style.display = "none";
        counter2 = 1;
    }
}

