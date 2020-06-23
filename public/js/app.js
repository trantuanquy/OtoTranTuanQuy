$(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    new WOW().init();
});

$(document).ready(function () {
    setInterval( () => {
        $(".owl-next").click();
    }, 4000 )
});