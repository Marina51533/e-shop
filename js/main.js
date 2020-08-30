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
   

});
// Get this modal window
var modal = document.getElementById('id01');
window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

/*--open/close popup for kosik--*/
$('.btn_header_nav').click(() => {
  $('.kosik_popup').toggleClass('close_open');
});

/*--close popup kosik's items--*/
$('.kosik_popup_close').click(() => {
  $('.kosik_popup').toggleClass('close_open');
});

$('.main_items_footer>.btn_main_items').click((event) => {
    // Извлекаем внутренний HTML кноки
    // Пример: 235 Kč
    const priceText = parseInt($('.price').html());
    const kosikText = $('#kosik-price').html();
    let kosikPrice = parseInt(kosikText);  
    let kosikCount = parseInt($('#kosik-count').html());
    kosikPrice = kosikPrice + priceText;
    kosikCount = kosikCount + 1;
    $('#kosik-price').html(kosikPrice);
    $('#kosik-count').html(kosikCount);
//console.log(priceText)

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

