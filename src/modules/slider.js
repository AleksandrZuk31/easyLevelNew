const mainSlider = () => {
    const slide = document.querySelectorAll('.item'),
        slideTable = document.querySelectorAll('.table');

    let currentSlide = 0;
    slideTable[0].classList.add('active');
    const autoPlaySlide = () => {
        slideTable[currentSlide].classList.remove('active');
        slide[currentSlide].style.display = 'none';
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        slideTable[currentSlide].classList.add('active');
        slide[currentSlide].style.display = 'block';
    };

    const startSlide = (time = 3000) => {
        setInterval(autoPlaySlide, time);
    };
    startSlide(3000);
};

export default mainSlider;