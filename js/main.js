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
    $('.popular .items > .btn_popular').click((event) => {
        // Извлекаем внутренний HTML кноки
        // Пример: 235 Kč
        const buttonText = $(event.target).html();
    
        // Преобразовуем строку к числу
        // Пример: 235
        const buttonPrice = parseInt(buttonText);
    
        // Получаем итоговую сумму корзины
        // Пример: 0 
        const kosikText = $('#kosik-price').html();
        let kosikPrice = parseInt(kosikText);
    
        // Получаем кол-во товаров в корзине
        // Пример: 0 
        let kosikCount = parseInt($('#kosik-count').html());
    
        // Складывает значение и выводим итоговое значение в kosik-price
        kosikPrice = kosikPrice + buttonPrice;
        kosikCount = kosikCount + 1;
        $('#kosik-price').html(kosikPrice);
        $('#kosik-count').html(kosikCount);
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
        valueBtn = parseInt(valueBtn)
        kosik = document.querySelector('#kosik')
        s = s + valueBtn
        i++
        kosik.innerHTML = '   count: ' + i + '<br>  ' + s + 'Kč  '

    }
}

