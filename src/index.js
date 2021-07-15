

import mainSlider from './modules/slider';
import roundSlider from './modules/roundSlider';
import togglePopup from './modules/popup';
import moveSection from './modules/moveSection';
import smoothScroll from './modules/smoothScroll';
import getFaq from './modules/blockFaq';
import sendForm from './modules/form';


//выбор раздела
moveSection();
//слайдер
mainSlider();
//слайдер карусель
roundSlider();
//модальное окно
togglePopup();
// плавный скролл
smoothScroll();
//блок ЧАВО
getFaq();
//отправка формы
sendForm();
