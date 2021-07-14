const moveSection = () => {
    const topMenuServices = document.querySelector('.top-menu-services'),
        topMenuFaq = document.querySelector('.top-menu-faq'),
        topMenuContacts = document.querySelector('.top-menu-contacts'),
        menuServices = document.getElementById('services'),
        menuFaq = document.getElementById('faq'),
        menuContacts = document.getElementById('contacts');
    

    const scrollView = (elem) => {
        event.preventDefault();
        elem.scrollIntoView(top);
    };

    topMenuServices.addEventListener('click', () => {
        scrollView(menuServices);
    });
    topMenuFaq.addEventListener('click', () => {
        scrollView(menuFaq);
    });
    topMenuContacts.addEventListener('click', () => {
        scrollView(menuContacts);
    });

};

export default moveSection;