$(".header__menu-btn").click(function () {
    $(".header__menu-btn").toggleClass("is-active");
});

$('.header__menu-btn').on('click', function () {
    $('.header__categories').slideToggle();
});