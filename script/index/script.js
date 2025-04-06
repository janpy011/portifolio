//ANIMAÇAO CHEGADA
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("content").style.left = "50%";
    document.getElementById("content").style.transform = "translateX(-50%)";
});

//ANIMAÇAO BUTAO
const text = "Saiba mais clicando aqui...";
const typingElement = document.getElementById("botao");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

typeEffect();