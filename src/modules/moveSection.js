const moveSection = () => {
    const topMenu = document.querySelector('.top-menu');

    topMenu.addEventListener('click', () => {
        let target = event.target;

        if (target.tagName === 'A') {

            target.scrollIntoView(top);

        }
    });

};

export default moveSection;