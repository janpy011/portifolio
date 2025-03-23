//MENU
function toggleMenu(event) {
    event.stopPropagation();
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("blurOverlay");
    const content = document.getElementById("mainContent");
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
document.addEventListener("click", function(event) {
    closeMenu(event);
});
function loadContent(type) {
    const content = document.getElementById("mainContent");
    if (type === 'home') {
        content.innerHTML = '<div class="section"><h1>Bem-vindo ao Transporte Público Moderno</h1><p>Nosso objetivo é oferecer um transporte de qualidade para todos.</p></div>';
    } else if (type === 'endereco') {
        content.innerHTML = '<div class="section"><h2>Nosso Endereço</h2><iframe src="https://www.google.com/maps/embed?..." allowfullscreen></iframe></div>';
    } else if (type === 'video') {
        content.innerHTML = '<div class="section"><h2>Vídeo Institucional</h2><iframe src="https://www.youtube.com/embed/..." allowfullscreen></iframe></div>';
    } else if (type === 'noticias') {
        content.innerHTML = '<div class="section"><h2>Últimas Notícias</h2><p>Fique por dentro das novidades do transporte público.</p></div>';
    } else if (type === 'funcionario') {
        content.innerHTML = '<div class="section"><h2>Área do Funcionário</h2><p>Acesse informações e comunicados exclusivos.</p></div>';
    }
}
