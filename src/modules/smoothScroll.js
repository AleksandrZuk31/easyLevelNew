const smoothScroll = () => {
    const arrowUp = document.querySelector('.up'),
        wrap = document.querySelector('.top-slider');

    const sections = [...document.getElementsByTagName('section')];
    let currentSection = sections.length - 1;

    const chapter = document.getElementsByTagName('section');

    const scrollToSection = (i) => {
        console.log(i);
        chapter[i].scrollIntoView({
            behavior: 'smooth'
        });
    };

    arrowUp.addEventListener('click', (e) => {
        if (currentSection < (sections.length)) {
            currentSection--;
        } else {
            currentSection++;
        }

        if (currentSection < 0) {
            currentSection = 0;
        } else if (currentSection > (sections.length - 1)) {
            currentSection = (sections.length - 1);
        }

        scrollToSection(currentSection);
    });

    window.addEventListener('wheel', (e) => {
        if (e.deltaY < 0) {
            wrap.scrollIntoView();
            arrowUp.style.display = 'none';
        } else {
            arrowUp.style.display = 'block';
        }
    });
};

export default smoothScroll;