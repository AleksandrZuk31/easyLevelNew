const togglePopup = () => {
    const popup = document.querySelector('.modal-callback'),
        popupBase = document.querySelector('.modal-overlay'),
        popupClose = document.querySelector('.modal-close'),
        popupBtnHeader = document.querySelector('.callback_btn'),
        popupInSlider = document.querySelectorAll('.absolute'),
        popupBtn = document.querySelector('.button-services');

    const popupAppear = () => {
        event.preventDefault();
        popup.style.display = 'block';
        popupBase.style.display = 'block';
    };

    const popupHide = () => {
        event.preventDefault();
        popup.style.display = 'none';
        popupBase.style.display = 'none';
    };

    popupBtn.addEventListener('click', () => {
        popupAppear();
    });

    popupBtnHeader.addEventListener('click', () => {
        popupAppear();
    });

    for (const item of popupInSlider) {
        item.addEventListener('click', () => {
            popupAppear();
        });
    }

    popupClose.addEventListener('click', () => {
        popupHide();
    });

    popupBase.addEventListener('click', () => {
        popupHide();
    });

    popup.addEventListener('click', () => {
        popupHide();
    });

};

export default togglePopup;