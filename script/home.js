// --- LÓGICA DO BANNER PRINCIPAL (HERO) ---
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    // Remove classes ativas de todos
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Cálculo de índice para Loop infinito
    if (index >= slides.length) { 
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Ativa o slide e o dot correspondente
    slides[currentSlide].classList.add('active');
    if (dots.length > 0) {
        dots[currentSlide].classList.add('active');
    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
    resetTimer();
}

function prevSlide() {
    showSlide(currentSlide - 1);
    resetTimer();
}

function goToSlide(n) {
    showSlide(n);
    resetTimer();
}

// Timer para troca automática (10 segundos)
let autoSlide = setInterval(nextSlide, 10000);

function resetTimer() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 10000);
}

// --- LÓGICA DOS CARDS (EM ALTA) ---
function scrollTrend(direction) {
    const list = document.getElementById('trendList');
    const scrollAmount = 320; // Largura do card + gap

    if (!list) return; // Segurança caso o elemento não exista

    if (direction === 1) {
        // Lógica para AVANÇAR (Direita)
        // Verifica se o scroll chegou ao fim: (posição atual + largura visível >= largura total)
        const isAtEnd = list.scrollLeft + list.clientWidth >= list.scrollWidth - 10;
        
        if (isAtEnd) {
            // Se chegou no fim, volta para o começo (Loop)
            list.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Se não, avança normalmente
            list.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    } else {
        // Lógica para VOLTAR (Esquerda)
        // Só executa o scroll se não estiver no marco zero (início)
        if (list.scrollLeft > 0) {
            list.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
        // Se estiver no 0, o botão simplesmente não faz nada (conforme solicitado)
    }
}

const cards = document.querySelectorAll('.anime-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const rect = card.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        // Se o card estiver muito na borda esquerda ou direita, 
        // evitamos que ele abra ou ajustamos a posição
        if (rect.left < 50 || rect.right > windowWidth - 50) {
            card.style.pointerEvents = 'none'; // Desabilita o card
            setTimeout(() => card.style.pointerEvents = 'auto', 500); // Reabilita após o scroll
        }
    });
});


function scrollTrend(direction) {
    const list = document.getElementById('trendList');
    // Calcula quanto scrollar: largura de 2 cards + o gap entre eles
    const scrollAmount = (260 + 20) * 2; 
    
    list.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}