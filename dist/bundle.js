!function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r,o,a,l,c;document.querySelector(".top-menu").addEventListener("click",(function(){event.preventDefault();var e=event.target;e.matches("a")&&document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"})})),function(){var e=document.querySelectorAll(".item"),t=document.querySelectorAll(".table"),n=0;t[0].classList.add("active");var r=function(){t[n].classList.remove("active"),e[n].style.display="none",++n>=e.length&&(n=0),t[n].classList.add("active"),e[n].style.display="block"};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(r,e)}(3e3)}(),function(){var t,n,r,o=document.querySelectorAll(".col-sm-6"),a=document.querySelector(".services-elements"),l=document.querySelector(".services-carousel"),c=document.querySelector(".arrow-right"),i=document.querySelector(".arrow-left");t=0,n=Math.floor(100/3),function(){l.classList.add("round_slider"),a.classList.add("round_slider-box");var t,n=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,i=!1;return{s:function(){r=r.call(t)},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,l=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw l}}}}(o);try{for(n.s();!(t=n.n()).done;)t.value.classList.add("round-item-slide")}catch(e){n.e(e)}finally{n.f()}}(),(r=document.createElement("style")).id="roundSlider-style",r.textContent="\n        .round_slider-box {\n            overflow: hidden !important;\n        }\n        .round_slider {\n           display: flex !important;\n           transition: transform 0,5s !important;\n           will-change: transform !important;\n       }\n       .round-item-slide {\n           flex: 0 0 ".concat(n,"% !important;\n           margin: auto 0 !important;\n       }\n       "),document.head.appendChild(r);i.addEventListener("click",(function(){--t<0&&(t=o.length-3),l.style.transform="translateX(-".concat(t*n,"%)")})),c.addEventListener("click",(function(){++t>o.length-3&&(t=0),l.style.transform="translateX(-".concat(t*n,"%)")}))}(),function(){var e=document.querySelector(".modal-callback"),n=document.querySelector(".modal-overlay"),r=document.querySelector(".modal-close"),o=document.querySelector(".callback_btn"),a=document.querySelectorAll(".absolute"),l=document.querySelector(".button-services"),c=function(){event.preventDefault(),e.style.display="block",n.style.display="block"},i=function(){event.preventDefault(),e.style.display="none",n.style.display="none"};l.addEventListener("click",(function(){c()})),o.addEventListener("click",(function(){c()}));var u,s=function(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,l=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw l}}}}(a);try{for(s.s();!(u=s.n()).done;)u.value.addEventListener("click",(function(){c()}))}catch(e){s.e(e)}finally{s.f()}r.addEventListener("click",(function(){i()})),n.addEventListener("click",(function(){i()}))}(),(c=document.querySelector(".up")).style.display="none",c.addEventListener("click",(function(e){var t=document.querySelector(".header-push");console.log(t),t.scrollIntoView({behavior:"smooth",block:"start"}),c.style.display="none"})),window.addEventListener("wheel",(function(){console.log(pageYOffset),console.log(document.documentElement.clientHeight),pageYOffset<600?c.style.display="none":c.style.display="block"})),r=document.querySelector(".accordeon"),o=r.querySelectorAll(".element"),a=r.querySelectorAll(".title"),l=r.querySelectorAll(".element-content"),r.addEventListener("click",(function(){var e=event.target;e.matches(".title")&&a.forEach((function(t,n){t===e&&function(e){for(var t=0;t<a.length;t++)e===t?(o[t].classList.add("active"),a[t].classList.add("active"),l[t].style.display="block"):(o[t].classList.remove("active"),a[t].classList.remove("active"),l[t].style.display="none")}(n)}))})),function(){var e=document.querySelector(".user-form"),t=document.createElement("div");t.style.cssText="font-size: 2 rem;",t.style.cssText="color: green";var r=document.querySelector(".user-fio"),o=document.querySelector(".user-tel");r.addEventListener("input",(function(){r.value=r.value.replace(/[\dA-Za-z?"!'@#^&$_%~+=:;/|\-*<>(){}[\]\\]/g,"").replace(/^\-/,"").replace(/ {0,}/g,"").replace(/\-{1,}/g,"-")})),o.addEventListener("input",(function(){o.value=o.value.replace(/[А-яа-яЁёA-Za-z?"!'@#^&$_,.%~=:;/|\-*<>(){}[\]\\]/g,"").replace(/^\-/,"").replace(/ {0,}/g,"").replace(/\-{1,}/g,"-")})),e.addEventListener("submit",(function(a){if(r.value.length>2&&o.value.length>10){a.preventDefault(),e.appendChild(t),t.textContent="Загрузка...";var l,c={},i=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,l=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw l}}}}(new FormData(e).entries());try{for(i.s();!(l=i.n()).done;){var u=l.value;c[u[0]]=u[1]}}catch(e){i.e(e)}finally{i.f()}!function(e,n,a){var l=new XMLHttpRequest;l.addEventListener("readystatechange",(function(){var e;4===l.readyState&&(200===l.status?t.textContent="Спасибо! Мы скоро с вами свяжемся!":(e=l.status,t.textContent="Что то пошло не так...",console.log(e)))})),l.open("POST","./server.php"),l.setRequestHeader("Content-Type","multipart/form-data"),l.send(JSON.stringify(e)),r.value="",o.value=""}(c)}else a.preventDefault()}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"+7 (___) ___-__-__",t=document.querySelector(".user-tel");function n(t){var n=t.keyCode,r=e,o=r.replace(/\D/g,""),a=this.value.replace(/\D/g,""),l=0,c=r.replace(/[_\d]/g,(function(e){return l<a.length?a.charAt(l++)||o.charAt(l):e}));-1!==(l=c.indexOf("_"))&&(c=c.slice(0,l));var i=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(i=new RegExp("^"+i+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=c),"blur"==t.type&&this.value.length<5&&(this.value="")}t.addEventListener("input",n),t.addEventListener("focus",n),t.addEventListener("blur",n)}()}();