'use strict';
(function () {
  var pageHeader = document.querySelector('.page-header');
  var pageHeaderNav = document.querySelector('.page-header__navigation');
  var pageHeaderNavList = document.querySelector('.page-header__navigation-list');
  var headerToggle = document.querySelector('.page-header__navigation-toggle');

  pageHeaderNav.classList.remove('page-header__navigation--nojs');
  pageHeaderNav.classList.add('page-header__navigation--closed');
  pageHeaderNav.classList.remove('page-header__navigation--opened');

  headerToggle.addEventListener('click', function () {
    if (document.body.clientWidth < 1023) {
      document.body.classList.toggle('lock-scroll');
      pageHeader.style.height = pageHeader.style.height === '100vh' ? '' : '100vh';
      pageHeaderNavList.style.height = pageHeaderNavList.style.height === '100%' ? '' : '100%';
    }
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
      if (document.body.clientWidth < 1023) {
        document.body.classList.toggle('lock-scroll');
        pageHeader.style.height = pageHeader.style.height === '100vh' ? '' : '100vh';
        pageHeaderNavList.style.height = pageHeaderNavList.style.height === '100%' ? '' : '100%';
      }
      pageHeaderNav.classList.add('page-header__navigation--closed');
      pageHeaderNav.classList.remove('page-header__navigation--opened');
    });
  }

  var phoneInput = document.querySelector('#phone');
  phoneInput.addEventListener('input', function () {
    var regex = /^[\d ()+-]+$/;
    if (!regex.test(phoneInput.value)) {
      phoneInput.setCustomValidity('Разрешены цифры и символы ()+-');
    } else {
      phoneInput.setCustomValidity('');
    }
    phoneInput.reportValidity();
  });
})();
