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
