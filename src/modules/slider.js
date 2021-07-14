const mainSlider = () => {
    const slide = document.querySelectorAll('.item'),
        slideTable = document.querySelectorAll('.table'),
        slider = document.querySelector('.top-slider');

    const addClassSlider = () => {
        slider.classList.add('slider_wrapper');

        for (const item of slide) {
            item.classList.add('main-slider-hidden');
            item.classList.add('main-slider-active');
        }

        for (const item of slideTable) {
            item.classList.add('main-slider-hidden');
            item.classList.add('main-slider-active');
        }

    };

    const addStyleSlider = () => {
        const style = document.createElement('style');
        style.id = 'slider-style';
        style.textContent = `
                .slider_wrapper {
                   display: flex !important;
               }
                .main-slider-active {
                   flex: 0 0 100% !important;
                   opacity: 1 !important;
                   visibility: visible !important; 
               }
               .main-slider-hidden {
                flex: 0 0 0% !important;
                margin: auto 0 !important;
                opacity: 0 !important;
                visibility: hidden !important; 
               }
               `;
        document.head.appendChild(style);
    };
    addClassSlider();
    addStyleSlider();
    const prevSlide = (elem, index) => {
        elem[index].classList.remove('main-slider-hidden');
        elem[index].classList.add('main-slider-active');
    };

    const nextSlide = (elem, index) => {
        elem[index].classList.add('main-slider-hidden');
        elem[index].classList.remove('main-slider-active');

    };
    let currentSlide = 0;

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide);
        prevSlide(slideTable, currentSlide);
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide);
        nextSlide(slideTable, currentSlide);
    };

    const startSlide = (time = 3000) => {
        setInterval(autoPlaySlide, time);
    };

    startSlide(3000);
};

export default mainSlider;