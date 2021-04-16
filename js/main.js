$(document).ready(function() {
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[а-я\s]+$/i.test(value);
    }, "");

    $('.promo-section-slider').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        appendArrows: $('.slider-arrow'),
        prevArrow: '<span class="slider-arrow_left" aria-hidden="true"></span>',
        nextArrow: '<span class="slider-arrow_right" aria-hidden="true"></span>'
    });


    function PopUpHide() {
        $("#popup1").css("display", "none")
    }

    function PopUpShow() {
        $("#popup1").css("display", "block");
    }

    $('.header-phone_text').click(function() {
        PopUpShow()
    });

    $('.popup-close-action').click(function() {
        PopUpHide()
    });


    $("#phone").mask("+9(999)999-99-99");
    $("#phone2").mask("+9(999)999-99-99");
    $("#form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                lettersonly: true

            },
            phone: {
                required: true
            }
        },
        messages: {
            name: {
                required: "",
                minlength: "2",

            },
            phone: {
                required: ""

            }
        }

    });

    $("#form2").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                lettersonly: true

            },
            phone: {
                required: true
            }
        },
        messages: {
            name: {
                required: "",
                minlength: "2",

            },
            phone: {
                required: ""

            }
        }

    });

    $("#form3").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                lettersonly: true

            },
            phone: {
                required: true
            }
        },
        messages: {
            name: {
                required: "",
                minlength: "2",

            },
            phone: {
                required: ""

            }
        }

    });

    checkMedia(); // запускаем при открытии страницы
    $(window).on('resize', function() { // запускаем при каждом ресайзе окна
        checkMedia();
    });

    function checkMedia() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 57.766749, lng: 40.926458 },
                zoom: 15

            });

            var image = 'images/placeholder.png';
            var store1 = new google.maps.Marker({
                position: { lat: 57.769977, lng: 40.941769 },
                map: map,
                icon: image
            });
            var store2 = new google.maps.Marker({
                position: { lat: 57.767905, lng: 40.921437 },
                map: map,
                icon: image
            });
            var store3 = new google.maps.Marker({
                position: { lat: 57.761722, lng: 40.943347 },
                map: map,
                icon: image
            });


        } else {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 57.7697525, lng: 40.9275988 },
                zoom: 14
            });
            var image = 'images/placeholder.png';
            var store1 = new google.maps.Marker({
                position: { lat: 57.769977, lng: 40.941769 },
                map: map,
                icon: image
            });
            var store2 = new google.maps.Marker({
                position: { lat: 57.767905, lng: 40.921437 },
                map: map,
                icon: image
            });
            var store3 = new google.maps.Marker({
                position: { lat: 57.761722, lng: 40.943347 },
                map: map,
                icon: image
            });


        }
        if (window.matchMedia('(max-width: 768px)').matches) {
            $('.slider').slick({
                autoplay: false,
                dots: true

            });
        }

    }





    $('.show-link').on('click', function(e) {
        e.preventDefault();
        $('.hidden-item', $(this).parent()).css('display', 'block');
        $(this).hide();
    });

});

$('.filter-item .filter-item-title').on('click', f_acc);

function f_acc() {
    $(this).next().slideToggle(1000);
    $(this).toggleClass('red');
    $('.filter-item-title').toggleClass('border-none');
}


    
    var $burger = $('.header-menu-btn');  
   
    
    $burger.click(function(){

        $('.header-menu-hide').slideToggle(500);
    });

