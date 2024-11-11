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

const sliderContainer = document.querySelectorAll("#slider-container");
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
        button.forEach(button => {
            button.style.backgroundColor = ""
        })
        button[i].style.backgroundColor = "rgba(255, 0, 0, .5)";
        slideImage(i);
    })
}
const images = document.querySelectorAll(".slider-image")
function slideImage (index) {
    const distance = index * -100;
    sliderContainer[0].style.transform = `translate(${distance}%)`
}

/* I'm ... changing text */

const phrases = ["AN ATHLETE", "A DESIGNER", "A DEVELOPER"];
let currentPhrase = 0;
let currentLetter = 0;
let deleting = false;

const typingElement = document.getElementById("changing-text");

function typeEffect() {
    const text = "HI I'M " + phrases[currentPhrase].slice(0, currentLetter);
    typingElement.textContent = text;

    const typingSpeed = 150;
    const deletingSpeed = 80;

    if (!deleting && currentLetter < phrases[currentPhrase].length) {
        currentLetter++;
        setTimeout(typeEffect, typingSpeed);
    } else if (deleting && currentLetter > 0) {
        currentLetter--;
        setTimeout(typeEffect, deletingSpeed); 
    } else if (currentLetter === phrases[currentPhrase].length) {
        deleting = true;
        setTimeout(typeEffect, 1000);
    } else if (deleting && currentLetter === 0) {
        deleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();

const MousePosDisplay = document.createElement("div");
const body = document.querySelector("body")
body.appendChild(MousePosDisplay)
MousePosDisplay.classList.add("mouse-position-display" , "text")

body.addEventListener("mousemove", MousePosDisplayMove)

function MousePosDisplayMove (event) {
    MousePosDisplay.style.left = `${event.clientX + 0}px`;
    MousePosDisplay.style.top = `${event.clientY + 0}px`
    MousePosDisplay.textContent = `X: ${event.clientX}, Y: ${event.clientY}`
    let color2 = event.clientY / 3.13;
    let color1 = event.clientX / 5.64;
    MousePosDisplay.style.backgroundColor = `rgb(${color1}, ${color2}, 0)`
}