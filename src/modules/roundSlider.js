const roundSlider = () => {
    const roundSlide = document.querySelectorAll('.col-sm-6'),
        roundSliderBox = document.querySelector('.services-elements'),
        roundSlider = document.querySelector('.services-carousel'),
        btnRight = document.querySelector('.arrow-right'),
        btnLeft = document.querySelector('.arrow-left');

    let position,
        slidesToShow,
        infinity,
        widthSlide;

    position = 0;
    slidesToShow = 3;
    widthSlide = Math.floor(100 / slidesToShow);
    infinity = true;

    const addClass = () => {
        roundSlider.classList.add('round_slider');
        roundSliderBox.classList.add('round_slider-box');
        for (const item of roundSlide) {
            item.classList.add('round-item-slide');
        }
    };

    addClass();

    const addStyle = () => {
        const style = document.createElement('style');
        style.id = 'roundSlider-style';
        style.textContent = `
        .round_slider-box {
            overflow: hidden !important;
        }
        .round_slider {
           display: flex !important;
           transition: transform 0,5s !important;
           will-change: transform !important;
       }
       .round-item-slide {
           flex: 0 0 ${widthSlide}% !important;
           margin: auto 0 !important;
       }
       `;
        document.head.appendChild(style);
    };

    addStyle();

    const prevSlider = () => {
        if (infinity || position > 0) {
            --position;
            if (position < 0) {
                position = roundSlide.length - slidesToShow;
            }
            roundSlider.style.transform = `translateX(-${position * widthSlide}%)`;
        }

    };

    const nextSlider = () => {
        if (infinity || position < roundSlide.length - slidesToShow) {
            ++position;
            if (position > roundSlide.length - slidesToShow) {
                position = 0;
            }
            roundSlider.style.transform = `translateX(-${position * widthSlide}%)`;
        }

    };

    const controlSlider = () => {
        btnLeft.addEventListener('click', prevSlider);
        btnRight.addEventListener('click', nextSlider);
    };

    controlSlider();

};

export default roundSlider;