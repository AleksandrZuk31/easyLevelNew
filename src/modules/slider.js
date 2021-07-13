const slider = () => {
    const slide = document.querySelectorAll('.item'),
        slideTable = document.querySelectorAll('.table'),
        slider = document.querySelector('.top-slider');

    // так тоже пробовал, сначала криво потом все хорошо. Подскажите как исправить
        // slider.style.display = 'flex';


    // посмотрите пожалуста этот фрагмент кода , тоже не работает как надо //

    const addClassSlider = () => {
        slider.classList.add('slider_table');

        for (const item of slide) {
            item.classList.add('item-slide');
        }
    };

    addClassSlider();

    const addStyleSlider = () => {
        const style = document.createElement('style');
        style.id = 'slider-style';
        style.textContent = `
        .slider_table {
           display: flex !important;
           transition: transform 0,5s !important;
           will-change: transform !important;
       }
       .item-slide {
           flex: 0 0 100% !important;
           margin: auto 0 !important;
       }
       `;
        document.head.appendChild(style);
    };

    addStyleSlider();

//                                              //

    let currentSlide = 0;

    const prevSlide = (elem, item, index) => {
        elem[index].style.width = '0%';
        elem[index].style.opacity = '0';
        elem[index].style.visibility = 'hidden';
        item[index].style.opacity = '0';
        item[index].style.visibility = 'hidden';
    };

    const nextSlide = (elem, item, index) => {
        elem[index].style.width = '100%';
        elem[index].style.opacity = '1';
        elem[index].style.visibility = 'visible';
        item[index].style.opacity = '1';
        item[index].style.visibility = 'visible';
    };

    const autoPlaySlide = () => {

        prevSlide(slide, slideTable, currentSlide);

        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, slideTable, currentSlide);
    };

    const startSlide = (time = 3000) => {
        setInterval(autoPlaySlide, time);
    };

    startSlide(3000);
};

export default slider;