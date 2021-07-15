const sendForm = () => {

    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        successMesage = 'Спасибо! Мы скоро с вами свяжемся!';

    const formPopup = document.getElementById('callback');

    const statusMessage = document.createElement('div');

    statusMessage.style.cssText = 'font-size: 2 rem;';
    statusMessage.style.cssText = 'color: green';

    // const postData = (body, outputData, errorData) => {
    //     const request = new XMLHttpRequest();
    //     request.addEventListener('readystatechange', () => {
    //         if (request.readyState !== 4) {
    //             return;
    //         }
    //         if (request.status === 200) {
    //             outputData();
    //         } else {
    //             errorData(request.status);
    //         }
    //     });

    //     request.open('POST', './server.php');
    //     request.setRequestHeader('Content-Type', 'application/json');
    //     request.send(JSON.stringify(body));

    //     const purifyName = formPopup.querySelector('.user-fio'),
    //         purifyPhone = formPopup.querySelector('.user-tel');

    //     purifyName.value = '';
    //     purifyPhone.value = '';
    // };
    // const formSending = () => {
    //     const formData = new FormData(form);
    //     let body = {};

    //     for (let val of formData.entries()) {
    //         body[val[0]] = val[1];
    //     }

    //     postData(body, () => {
    //         statusMessage.textContent = successMesage;
    //     }, (error) => {
    //         statusMessage.textContent = errorMessage;
    //         console.log(error);
    //     });
    // };

    // formPopup.addEventListener('submit', (event) => {
    //     if (purifyName.value.length > 2 && purifyPhone.value.length > 10) {
    //         event.preventDefault();
    //         formPopup.appendChild(statusMessage);
    //         statusMessage.textContent = loadMessage;
    //         formSending();
    //     } else {
    //         return;
    //     }
    // });


};

export default sendForm;


// const verifyPopup = () => {
//     const userName = document.getElementById('form3-name'),
//         userPhone = document.getElementById('form3-phone');

//     userName.addEventListener('input', () => {
//         userName.value = userName.value.replace(/[\dA-Za-z?"+=/\-*()\\]/g, '');
//     });
//     userEmail.addEventListener('input', () => {
//         userEmail.value = userEmail.value.replace(/[А-яа-яЁё?"+=/*()\\]/g, '');
//     });
//     userPhone.addEventListener('input', () => {
//         userPhone.value = userPhone.value.replace(/[А-яа-яЁёA-Za-z?"=/\-*()\\]/g, '');
//     });
// };

// verifyPopup();