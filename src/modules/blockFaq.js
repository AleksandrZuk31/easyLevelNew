const getFaq = () => {
    const accordeon = document.querySelector('.accordeon'),
        accordeonElems = accordeon.querySelectorAll('.element'),
        accordeonTitle = accordeon.querySelectorAll('.title'),
        accordeonContent = accordeon.querySelectorAll('.element-content');

    const toggleTitle = (index) => {
        for (let i = 0; i < accordeonTitle.length; i++) {
            if (index === i) {
                accordeonElems[i].classList.add('active');
                accordeonTitle[i].classList.add('active');
                accordeonContent[i].style.display = 'block';
            } else {
                accordeonElems[i].classList.remove('active');
                accordeonTitle[i].classList.remove('active');
                accordeonContent[i].style.display = 'none';
            }
        }
    };

    accordeon.addEventListener('click', () => {
        let target = event.target;
        if (target.matches('.title')) {
            accordeonTitle.forEach((item, i) => {
                if (item === target) {
                    toggleTitle(i);
                }
            });
        }
    });
};

export default getFaq;