const text = "Visite...";
const typingElement = document.getElementById("titulo");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

typeEffect();