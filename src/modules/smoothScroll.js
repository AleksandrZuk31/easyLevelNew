const smoothScroll = () => {
    const arrowUp = document.querySelector('.up');

    arrowUp.addEventListener('click', (e) => {
        window.scrollTo(0, 600);
        arrowUp.style.display = 'none';
    });

    window.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
            arrowUp.style.display = 'block';
        } else {
            arrowUp.style.display = 'none';
        }
    });
};

export default smoothScroll;