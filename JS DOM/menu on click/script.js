const menu = document.getElementById("menu-button")
const navLinks = document.getElementById("nav-links")

menu.addEventListener("click", () => {
    navLinks.classList.toggle("visible")
})

const answer = Array.from(document.querySelectorAll(".answer"))
const arrow = Array.from(document.querySelectorAll(".drop-down-arrow"))

arrow.forEach((arrow, i) => {
    arrow.addEventListener("click", () => {
        answer[i].classList.toggle("visible")
        arrow.classList.toggle("rotate")
    })
});

/* buttons in the image slider creator, and image container creator */


const imagesSources = [
    {src: "assets/slider-images/img1.jpg"},
    {src: "assets/slider-images/img2.jpg"},
    {src: "assets/slider-images/img3.webp"}
]
let numberOfImages = imagesSources.length;
const sliderButtonContainer = document.getElementById("button-span-holder")
function createSliderButtons(amount) {
    for(let i = 0; i < amount; i++) {
        const div = document.createElement("div");
        div.classList.add("slider-button");
        sliderButtonContainer.appendChild(div)
    }
}
createSliderButtons(numberOfImages);

const sliderContainer = document.querySelectorAll(".slider.container");
function createImageContainers(amount) {
    for(let i = 0; i < amount; i++) {
        /*creates the image container */
        const div = document.createElement("div");
        div.classList.add("slider-image")
        sliderContainer[0].appendChild(div);
        /* sets the image with bacgrond-image */
        div.style.backgroundImage = `url(${imagesSources[i].src})`;
        div.style.backgroundPosition = "center";
        div.style.backgroundSize = "cover";
    }
}
createImageContainers(imagesSources.length)

/* slideshow */
for (let i = 0; i < numberOfImages; i++) {
    const button = document.querySelectorAll(".slider-button");
    button[i].addEventListener("click", () => {

    })
}
function ShowImage (i) {
    const images = document.querySelectorAll(".slider-imag")
}