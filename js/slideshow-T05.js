// Før/efter slideshow
const slide6 = document.getElementById("slide-img6")
const slide7 = document.getElementById("slide-img7")
let counter3 = 1;

slide6.addEventListener("click", beforeAfter);
slide7.addEventListener("click", beforeAfter);

function beforeAfter() {
    if (counter3 == 1) {
        slide7.style.display = "block";
        slide6.classList.toggle("hide");
        counter3 = 0;
    }
    else if (counter3 == 0) {
        slide6.classList.toggle("hide");
        slide7.style.display = "none";
        counter3 = 1;
    }
}