'use strict';
(function () {
  var pageHeaderNav = document.querySelector('.page-header__navigation');
  var headerToggle = document.querySelector('.page-header__navigation-toggle');

  pageHeaderNav.classList.remove('page-header__navigation--nojs');
  pageHeaderNav.classList.add('page-header__navigation--closed');
  pageHeaderNav.classList.remove('page-header__navigation--opened');

  headerToggle.addEventListener('click', function () {
    if (pageHeaderNav.classList.contains('page-header__navigation--closed')) {
      pageHeaderNav.classList.remove('page-header__navigation--closed');
      pageHeaderNav.classList.add('page-header__navigation--opened');
    } else {
      pageHeaderNav.classList.add('page-header__navigation--closed');
      pageHeaderNav.classList.remove('page-header__navigation--opened');
    }
  });

  // Закрытие мобильного меню после выбора любого пункта
  var menuItem = document.querySelectorAll('.page-header__navigation-item');

  for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', function () {
      pageHeaderNav.classList.add('page-header__navigation--closed');
      pageHeaderNav.classList.remove('page-header__navigation--opened');
    });
  }

  var phoneInput = document.querySelector('#phone');
  phoneInput.addEventListener('input', function () {
    var regex = /^\d+$/;
    if (!regex.test(phoneInput.value)) {
      phoneInput.setCustomValidity('Только цифры');
    } else {
      phoneInput.setCustomValidity('');
    }
    phoneInput.reportValidity();
  });
})();
