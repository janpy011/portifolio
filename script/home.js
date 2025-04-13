// Animação título
const texto = "Frontend Developer.";
const div = document.querySelector(".titulo");
let i = 0;

function digitar() {
  if (i < texto.length) {
    div.textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, 100);
  } else {
    div.style.borderRight = "none";
  }
}
digitar();

// Função reutilizável para aplicar animação ao entrar na tela
function observarEntrada(selector, animationClass = 'apareceu', threshold = 0.3) {
  const elementos = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold });

  elementos.forEach(el => observer.observe(el));
}

// Animações com base no scroll
observarEntrada('.eu-2, .sobreMim-paragrafo');
observarEntrada('.articles article');
observarEntrada('.outros-titulo');
observarEntrada('#sobreMim');

// Animação lateral alternada nos artigos (habilidades)
const artigos = document.querySelectorAll('.articles article');
artigos.forEach((el, index) => {
  el.classList.add(index % 2 === 0 ? 'surge-esquerda' : 'surge-direita');
});

const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});
