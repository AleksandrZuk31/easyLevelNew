const sendForm = () => {

    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        successMesage = 'Спасибо! Мы скоро с вами свяжемся!';

    const formPopup = document.querySelector('.user-form');

    const statusMessage = document.createElement('div');

    statusMessage.style.cssText = 'font-size: 2 rem;';
    statusMessage.style.cssText = 'color: green';

    const purifyName = document.querySelector('.user-fio'),
        purifyPhone = document.querySelector('.user-tel');

    const postData = (body, outputData, errorData) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                outputData();
            } else {
                errorData(request.status);
            }
        });

        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'multipart/form-data');
        request.send(JSON.stringify(body));

        purifyName.value = '';
        purifyPhone.value = '';
    };

    const verifyPopup = () => {
        purifyName.addEventListener('input', () => {
            purifyName.value = purifyName.value.replace(/[\dA-Za-z?"!'@#^&$_%~+=:;/|\-*<>(){}[\]\\]/g, '').replace(/^\-/, '').replace(/ {0,}/g, '').replace(/\-{1,}/g, '-');
        });

        purifyPhone.addEventListener('input', () => {
            purifyPhone.value = purifyPhone.value.replace(/[А-яа-яЁёA-Za-z?"!'@#^&$_,.%~=:;/|\-*<>(){}[\]\\]/g, '').replace(/^\-/, '').replace(/ {0,}/g, '').replace(/\-{1,}/g, '-');
        });
    };

    verifyPopup();

    formPopup.addEventListener('submit', event => {
        if (purifyName.value.length > 2 && purifyPhone.value.length > 10) {
            event.preventDefault();

            formPopup.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;

            const formData = new FormData(formPopup);
            const body = {};
            for (const val of formData.entries()) {
                body[val[0]] = val[1];
            }

            postData(body,
                () => {
                    statusMessage.textContent = successMesage;
                },
                error => {
                    statusMessage.textContent = errorMessage;
                    console.log(error);
                });
        } else {
            event.preventDefault();
            return;
        }
    });

};

export default sendForm;