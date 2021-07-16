const moveSection = () => {
    const topMenu = document.querySelector('.top-menu');

    topMenu.addEventListener('click', () => {
        let target = event.target;
        if (target.matches('a')) {
            const thisLink = document.querySelector(target.getAttribute("href"));
            thisLink.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });

};

export default moveSection;