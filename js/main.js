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
    /* var totalPrise = 0;
     var totalItems = 0;*/
    /* $('.popular .items > .btn_popular').click((event) => {
         // $('.btn_popular').appendTo($('.btn_header_nav'))
         var $elem = $(this);
         var value = $elem.val();
         $elem.val(value * value);
     });*/

    $('.popular .items > .btn_popular').click((event) => {
        var $elem = $(this).val()
        console.log($elem);

        // TODO: добавить в корзину

    });
});

var s = 0
var i = 0
var arrayBtn = []
var firstItem = 0
var secondItem = 0
var thirdItem = 0
var fourthItem = 0
var fifthItem = 0
var valueBtn = 0
var kosik = 0

/*popular1.onclick = function(event) {
    var checkOnClick = event.target.parentNode.childNodes[3].tagName
    console.log(checkOnClick)
    if (checkOnClick == 'BUTTON' && checkOnClick != 'P') {
        valueBtn = event.target.parentNode.childNodes[3].innerHTML /*potomok*/
// console.log(event.target.parentNode.childNodes[3].tagName)
//console.log(event.currentTarget.tagName)/*roditelskij element*/
/*valueBtn = parseInt(valueBtn)
        kosik = document.querySelector('#kosik')
        s = s + valueBtn
        i++
        kosik.innerHTML = '   count: ' + i + '<br>  ' + s + 'Kč  '

    }
}*/



/*login Form*/
// Get this modal window
var modal = document.getElementById('id01');


window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    /*-add prices from items Set*/
combo.onclick = function(event) {
    if (event.target.parentNode.childNodes[1].tagName == 'P') {
        valueBtn = event.target.parentNode.childNodes[1].innerHTML /*potomok*/
            //console.log(event.currentTarget.tagName)/*roditelskij element*/
        valueBtn = parseInt(valueBtn)
        kosik = document.querySelector('#kosik')
        s = s + valueBtn
        i++
        kosik.innerHTML = '   count: ' + i + '<br>  ' + s + 'Kč  '

    }
}
pizza.onclick = function(event) {
    if (event.target.parentNode.childNodes[1].tagName == 'P') {
        valueBtn = event.target.parentNode.childNodes[1].innerHTML /*potomok*/
            //console.log(event.currentTarget.tagName)/*roditelskij element*/
        valueBtn = parseInt(valueBtn)
        kosik = document.querySelector('#kosik')
        s = s + valueBtn
        i++
        kosik.innerHTML = '   count: ' + i + '<br>  ' + s + 'Kč  '

    }
}
obcerstveni.onclick = function(event) {
    if (event.target.parentNode.childNodes[1].tagName == 'P') {
        valueBtn = event.target.parentNode.childNodes[1].innerHTML /*potomok*/
            //console.log(event.currentTarget.tagName)/*roditelskij element*/
        valueBtn = parseInt(valueBtn)
        kosik = document.querySelector('#kosik')
        s = s + valueBtn
        i++
        kosik.innerHTML = '   count: ' + i + '<br>  ' + s + 'Kč  '

    }
}