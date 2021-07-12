const togglePopup = () => {
    const popup = document.querySelector('.modal-callback'),
        popupBase = document.querySelector('.modal-overlay'),
        popupClose = document.querySelector('.modal-close'),
        popupBtn = document.querySelector('.button-services');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        popupBase.style.display = 'block';
    });

    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
        popupBase.style.display = 'none';
    });

    popupBase.addEventListener('click', () => {
        popup.style.display = 'none';
        popupBase.style.display = 'none';
    });

    popup.addEventListener('click', () => {
        popup.style.display = 'none';
        popupBase.style.display = 'none';
    });

};

export default togglePopup;