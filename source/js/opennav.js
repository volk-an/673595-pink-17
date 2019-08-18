

    var pageHeader__togleWwrap = document.querySelector('.page-header__togle-wrap');
    var mainNav = document.querySelector('.main-navigation');

    var btnOpen = document.querySelector('.page-header__button--open');
    var btnClose = document.querySelector('.page-header__button--close');

    pageHeader__togleWwrap.classList.remove('page-header__togle-wrap--nojs');
    mainNav.classList.add('main-navigation--closed');
    btnClose.classList.add('page-header__buton--togle');
    btnOpen.classList.remove('page-header__buton--togle');

    btnOpen.addEventListener('click', function() {
      btnOpen.classList.add('page-header__buton--togle');
      btnClose.classList.remove('page-header__buton--togle');
      mainNav.classList.remove('main-navigation--closed');
    });
    btnClose.addEventListener('click', function() {
      btnClose.classList.add('page-header__buton--togle');
      btnOpen.classList.remove('page-header__buton--togle');
      mainNav.classList.add('main-navigation--closed');
    });
