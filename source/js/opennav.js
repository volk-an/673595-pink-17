

    var pageHeader__togleWwrap = document.querySelector('.page-header__togle-wrap');
    var mainNav = document.querySelector('.main-navigation');
    var topNav = document.querySelector('.page-header__top-navigation');
    var pageHeader = document.querySelector('.page-header');

    var btnOpen = document.querySelector('.page-header__button--open');
    var btnClose = document.querySelector('.page-header__button--close');

    pageHeader__togleWwrap.classList.remove('page-header__togle-wrap--nojs');
    mainNav.classList.add('main-navigation--closed');
    topNav.classList.add('page-header__top-navigation--closed');
    pageHeader.classList.add('page-header--closed');
    btnClose.classList.add('page-header__buton--togle');
    btnOpen.classList.remove('page-header__buton--togle');

    btnOpen.addEventListener('click', function() {
      btnOpen.classList.add('page-header__buton--togle');
      btnClose.classList.remove('page-header__buton--togle');
      mainNav.classList.remove('main-navigation--closed');
      topNav.classList.remove('page-header__top-navigation--closed');
      pageHeader.classList.remove('page-header--closed');
    });
    btnClose.addEventListener('click', function() {
      btnClose.classList.add('page-header__buton--togle');
      btnOpen.classList.remove('page-header__buton--togle');
      mainNav.classList.add('main-navigation--closed');
      topNav.classList.add('page-header__top-navigation--closed');
      pageHeader.classList.add('page-header--closed');
    });
