//MENU
function toggleMenu(event) {
    event.stopPropagation();
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("blurOverlay");
    const isOpen = menu.classList.contains("show");
    menu.classList.toggle("show");
    overlay.classList.toggle("show", !isOpen);
    content.classList.toggle("blur", !isOpen);
}

function closeMenu(event) {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("blurOverlay");
    const button = document.querySelector(".menu-button");
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("show");
        overlay.classList.remove("show");
        document.getElementById("mainContent").classList.remove("blur");
    }
}

document.addEventListener("click", function (event) {
    closeMenu(event);
});

//ANIMAÇAO TITULO-HOME
const text = "Frontend Developer.";
const typingElement = document.getElementById("typing");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

//PROJETOS
//IR PARA NORTE BUSS
function norteBuss() {
    window.open("../projeto_norte-buss/html-1/index.html", "_blank");
}

//IR PARA PROJETO AR
function projetoAr() {
    window.open("../projeto-ar_condicionado/html-2/index.html", "_blank");
}