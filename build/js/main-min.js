"use strict";!function(){var e=document.querySelector(".page-header__navigation"),a=document.querySelector(".page-header__navigation-toggle");e.classList.remove("page-header__navigation--nojs"),e.classList.add("page-header__navigation--closed"),e.classList.remove("page-header__navigation--opened"),a.addEventListener("click",function(){e.classList.contains("page-header__navigation--closed")?(e.classList.remove("page-header__navigation--closed"),e.classList.add("page-header__navigation--opened")):(e.classList.add("page-header__navigation--closed"),e.classList.remove("page-header__navigation--opened"))});for(var t=document.querySelectorAll(".page-header__navigation-item"),i=0;i<t.length;i++)t[i].addEventListener("click",function(){e.classList.add("page-header__navigation--closed"),e.classList.remove("page-header__navigation--opened")});var n=document.querySelector("#phone");n.addEventListener("input",function(){/^[\d ()+-]+$/.test(n.value)?n.setCustomValidity(""):n.setCustomValidity("Разрешены цифры и символы ()+-"),n.reportValidity()})}();