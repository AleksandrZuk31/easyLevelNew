const smoothScroll = () => {
    const arrowUp = document.querySelector('.up');

    arrowUp.style.display = 'none';
    arrowUp.addEventListener('click', (e) => {
        const sectionHead = document.querySelector('.header-push');
        console.log(sectionHead);
        sectionHead.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        arrowUp.style.display = 'none';
    });

    window.addEventListener('wheel', () => {
        console.log(pageYOffset);
        console.log(document.documentElement.clientHeight);
        if (pageYOffset < 600) {
            arrowUp.style.display = 'none';
        } else {
            arrowUp.style.display = 'block';
        }
    });
};

export default smoothScroll;