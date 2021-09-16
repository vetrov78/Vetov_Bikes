'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__navigation-toggle');

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header__navigation--closed')) {
    pageHeader.classList.remove('page-header__navigation--closed');
    pageHeader.classList.add('page-header__navigation--opened');
  } else {
    pageHeader.classList.add('page-header__navigation--closed');
    pageHeader.classList.remove('page-header__navigation--opened');
  }
});
