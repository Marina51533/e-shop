$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 14000,
        autoplaySpeed: 6000,
        autoplayHoverPause: true,
        lazyLoad: true,

    });
    /*-open with .items and add blur-*/
    $('.items').click(function() {
            $('main').css('filter', 'blur(5px)');
            $('.js_overlay').fadeIn();


            $('.js_overlay').addClass('disabled');
        })
        /*-close-*/
    $('.js_close').click(function() {

        $('.js_overlay').fadeOut();
        $('main').css('filter', 'none');
    })


});