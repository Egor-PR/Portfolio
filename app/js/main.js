
$(function () {
  $('.header__menu').click(function () {
    $('.menu,.header__menu, .hero__block').toggleClass('show-menu')
  })
});


$(function () {
  $('.menu__list').click(function () {
    $('.menu__sub-list').toggleClass('sub-menu')
  })
});