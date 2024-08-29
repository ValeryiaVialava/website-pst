document.addEventListener('scroll', function() {
    const arrow = document.querySelector('.wrapper-arrow');
    const header = document.querySelector('.header-text');
    const headerRect = header.getBoundingClientRect();

    // Если верхняя граница заголовка видима (т.е. не полностью прокручена)
    if (headerRect.bottom > 0 && headerRect.top < window.innerHeight) {
        arrow.style.opacity = 1;
    } else {
        arrow.style.opacity = 0;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const cityImg = document.querySelector('.wrapper-choice-section');
    const houseImg = document.querySelector('.wrapper-choice-section');

    // Обработчик для клика по правой части страницы
    document.addEventListener('click', function(event) {
        const pageWidth = window.innerWidth;
        const clickX = event.clientX;

        if (clickX > pageWidth / 2) {
            // Клик по правой стороне
            houseImg.classList.add('animate-left');
        } else {
            // Клик по левой стороне
            cityImg.classList.add('animate-left');

        }

        // Удаление классов после завершения анимации (опционально)
        setTimeout(() => {
            cityImg.classList.remove('animate-left', 'animate-right');
            houseImg.classList.remove('animate-left', 'animate-right');
        }, 1000); // Длительность анимации в миллисекундах
    });
});

