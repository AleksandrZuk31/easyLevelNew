const smoothScroll = () => {
    const arrowUp = document.querySelector('.up');

    // const sections = [...document.getElementsByTagName('section')];
    // let currentSection = 0;


    // window.addEventListener('wheel', function (e) {
    //     e.preventDefault();

    //     if (e.deltaY < 0) {
    //         --currentSection;
    //     } else {
    //         ++currentSection;
    //     }

    //     if (currentSection < 0) {
    //         currentSection = 0;
    //     } else if (currentSection > (sections.length - 1)) {
    //         currentSection = (sections.length - 1);
    //     }

    //     scrollToSection(currentSection);
    // });

    // function scrollToSection(i) {
    //     document.getElementById(sections[i].id).scrollIntoView({
    //         behavior: 'smooth'
    //     });

    // }

    // arrowUp.addEventListener('click', () => {
    //     console.log(1);
    //     document.body.scrollBy(0, 50);
    // });


    // console.log(arrowUp);



};

export default smoothScroll;