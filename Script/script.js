let currentSlide = 0; // Slide inicial
const slides = document.querySelectorAll('.slide'); // Seleciona todas as slides
const totalSlides = slides.length; // Número total de slides

// Função para mostrar o próximo slide
function showNextSlide() {
    slides[currentSlide].style.display = 'none'; // Esconde o slide atual
    currentSlide = (currentSlide + 1) % totalSlides; // Vai para o próximo slide
    slides[currentSlide].style.display = 'block'; // Mostra o próximo slide
}

// Inicializa o carousel
function initCarousel() {
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? 'block' : 'none'; // Mostra apenas o primeiro slide
    });
    setInterval(showNextSlide, 3000); // Alterna os slides a cada 3 segundos
}

document.addEventListener('DOMContentLoaded', initCarousel);

// Função para salvar o estado das checkboxes no localStorage
function saveCheckboxState() {
    // Seleciona todas as checkboxes da checklist
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        // Armazena o estado de cada checkbox (marcada ou não)
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
}

// Função para restaurar o estado das checkboxes
function restoreCheckboxState() {
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        // Verifica se existe um estado salvo no localStorage para cada checkbox
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState !== null) {
            checkbox.checked = (savedState === 'true'); // Se estiver marcado no localStorage, marca a checkbox
        }
    });
}

// Quando a página carregar, restaura o estado das checkboxes
window.onload = function() {
    restoreCheckboxState();
};

// Quando o estado das checkboxes mudar, salva o novo estado
document.querySelectorAll('.checklist input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', saveCheckboxState);
});
    