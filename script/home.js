let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    if (index >= slides.length) { 
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

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

let autoSlide = setInterval(nextSlide, 10000);

function resetTimer() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 10000);
}



function scrollTrend(direction) {
    // CORREÇÃO: O nome da classe no seu HTML é 'trend-list'
    const list = document.getElementById('trendList'); 
    const scrollAmount = 320; 

    if (direction === 1) {
        // Lógica para a DIREITA com Loop
        const isAtEnd = list.scrollLeft + list.clientWidth >= list.scrollWidth - 10;
        if (isAtEnd) {
            list.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            list.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    } else {
        // Lógica para a ESQUERDA (Só volta se não estiver no início)
        if (list.scrollLeft > 0) {
            list.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    }
}