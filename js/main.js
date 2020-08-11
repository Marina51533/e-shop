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
    /* $('.items').click(function() {
             $('main').css('filter', 'blur(5px)');
             $('.js_overlay').fadeIn();


             $('.js_overlay').addClass('disabled');
         })
         /*-close-*/
    /*$('.js_close').click(function() {

        $('.js_overlay').fadeOut();
        $('main').css('filter', 'none');
    })*/


});
var s = 0
var i = 0
var arrayBtn = []
var firstItem = 0
var secondItem = 0
var thirdItem = 0
var fourthItem = 0
var fifthItem = 0
id_btn_popular.onclick = function() {
    var valueBtn = document.getElementById('id_btn_popular').innerHTML
    var valueBtn = parseInt(valueBtn)
    var kosik = document.querySelector('#kosik')
    s = s + valueBtn
    i++
    kosik.innerHTML = '   count: ' + i + '<br>  ' + s + 'Kč  '
    firstItem++
    arrayBtn[0] = firstItem

}
id_btn_popular1.onclick = function() {
    valueBtn = document.getElementById('id_btn_popular1').innerHTML
    valueBtn = parseInt(valueBtn)
    kosik = document.querySelector('#kosik')
    s = s + valueBtn
    i++
    kosik.innerHTML = '   count: ' + i + '<br>  ' + s + 'Kč  '
    secondItem++
    arrayBtn[1] = secondtItem
}
id_btn_popular2.onclick = function() {
    valueBtn = document.getElementById('id_btn_popular2').innerHTML
    valueBtn = parseInt(valueBtn)
    kosik = document.querySelector('#kosik')
    s = s + valueBtn
    i++
    kosik.innerHTML = '   count: ' + i + '<br>  ' + s + 'Kč  '
    thirdItem++
    arrayBtn[2] = thirdItem
}
id_btn_popular3.onclick = function() {
    valueBtn = document.getElementById('id_btn_popular3').innerHTML
    valueBtn = parseInt(valueBtn)
    kosik = document.querySelector('#kosik')
    s = s + valueBtn
    i++
    kosik.innerHTML = '   count: ' + i + '<br>  ' + s + 'Kč  '
    fourthItem++
    arrayBtn[3] = fourthItem
}
id_btn_popular4.onclick = function() {
    valueBtn = document.getElementById('id_btn_popular4').innerHTML
    valueBtn = parseInt(valueBtn)
    kosik = document.querySelector('#kosik')
    s = s + valueBtn
    i++
    kosik.innerHTML = '   count: ' + i + '<br>  ' + s + 'Kč  '
    fifthItem++
    arrayBtn[4] = fifthItem
}