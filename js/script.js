$('.menu-btn').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('menu-ntb_active');
    $('.menu__nav').toggleClass('menu__nav-active');
});