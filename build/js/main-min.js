"use strict";!function(){var e=document.querySelector(".page-header"),t=document.querySelector(".page-header__navigation"),a=document.querySelector(".page-header__navigation-list"),i=document.querySelector(".page-header__navigation-toggle");t.classList.remove("page-header__navigation--nojs"),t.classList.add("page-header__navigation--closed"),t.classList.remove("page-header__navigation--opened"),t.style.height="100%",i.addEventListener("click",function(){document.body.clientWidth<1023&&(document.body.classList.toggle("lock-scroll"),e.style.height="100vh"===e.style.height?"":"100vh",a.style.height="100%"===a.style.height?"":"100%"),t.classList.contains("page-header__navigation--closed")?(t.classList.remove("page-header__navigation--closed"),t.classList.add("page-header__navigation--opened")):(t.classList.add("page-header__navigation--closed"),t.classList.remove("page-header__navigation--opened"))});for(var o=document.querySelectorAll(".page-header__navigation-item"),s=0;s<o.length;s++)o[s].addEventListener("click",function(){document.body.clientWidth<1023&&(document.body.classList.toggle("lock-scroll"),e.style.height="100vh"===e.style.height?"":"100vh",a.style.height="100%"===a.style.height?"":"100%"),t.classList.add("page-header__navigation--closed"),t.classList.remove("page-header__navigation--opened")});var n=document.querySelector("#phone");n.addEventListener("input",function(){/^[\d ()+-]+$/.test(n.value)?n.setCustomValidity(""):n.setCustomValidity("Разрешены цифры и символы ()+-"),n.reportValidity()})}();