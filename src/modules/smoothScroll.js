const smoothScroll = () => {
    const arrowUp = document.querySelector('.up');

    const sections = [...document.getElementsByTagName('section')];
    let currentSection = 0;
    console.log(sections);

    window.addEventListener('wheel', function (e) {


        if (e.deltaY < 0) {
            --currentSection;
            console.log(1);
        } else {
            ++currentSection;
            console.log(2);
        }

        if (currentSection < 0) {
            currentSection = 0;
        } else if (currentSection > (sections.length - 1)) {
            currentSection = (sections.length - 1);
        }

       // scrollToSection(currentSection);
    });


// const rock = document.getElementsByTagName('section');
// console.log(rock);
//  function scrollToSection(i) {
//      console.log(i);
//         document.getElementsByTagName('sections'[i]).scrollIntoView({
//             behavior: 'smooth'
//         });

  //  };

};

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





export default smoothScroll;