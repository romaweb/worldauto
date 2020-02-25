// main-nav
$(document).ready(function() {

    $(".nav-toggle").click(function(e) {
        e.preventDefault();
        $(".main-nav").addClass("main-nav--active");
    });

    $(".main-nav__icon-close").click(function(e) {
        $(".main-nav").removeClass("main-nav--active");
    });
})





// scrollup

var $scrolltop = jQuery('.car-scroll');
jQuery(window).scroll(function(){
    if(jQuery(window).scrollTop() >= 200) {
        $scrolltop.addClass("car-scroll--show");
        $scrolltop.addClass("car-down");
    } else {
        $scrolltop.removeClass("car-scroll--show");
        setTimeout(function(){ $scrolltop.removeClass('car-scroll--down');},300);
    }
});
$scrolltop.on('click', function () {
    jQuery('html,body').animate({ scrollTop: 0}, 800);
    jQuery(this).addClass("car-scroll--drive");
    setTimeout(function(){ $scrolltop.removeClass('car-scroll--drive');},1000);
    return false;
});


// sticky header
// jQuery(document).ready(function($){
//     $('.page-header').removeClass('page-header--no-js');
//     checkOffset();
//     $(window).bind('resize orientationchange scroll', function() {
//         checkOffset();
//     });

//     function checkOffset() {

//         if (($('.page-header--result')) && ($(window).scrollTop() > 0)) {
//             $('.page-header--result').css('position', 'fixed');
//         } else {
//             $('.page-header--result').css('position', 'static');
//         }


//         if ($(window).width() >= '768') {
//             var headerTopHeight = $('.page-header__top').outerHeight();
//             console.log(headerTopHeight);

//             if ($(window).scrollTop() >= 300) {

//                 $(".page-header").css('top', -headerTopHeight + 'px');
//                 $('.page-header__bottom').addClass('page-header__bottom--scrolled');


//             } else {
//                 $(".page-header").css('top', 0 + 'px');
//                 $('.page-header__bottom').removeClass('page-header__bottom--scrolled');

//             }
//         } else {
//             headerTopHeight = 0;
//             if ($(window).scrollTop() >= 300) {

//                 $(".page-header").css('top', -headerTopHeight + 'px');
//                 $('.page-header__bottom').addClass('page-header__bottom--scrolled');
//             } else {
//                 $(".page-header").css('top', 0 + 'px');
//                 $('.page-header__bottom').removeClass('page-header__bottom--scrolled');
//             }
//         }


//     }

// });



/////////////////////////////

jQuery(document).ready(function($){
    $('.page-header').removeClass('page-header--no-js');
    checkOffset();
    $(window).bind('resize orientationchange scroll', function() {
        checkOffset();
    });

    function checkOffset() {

      

        if ($(window).width() >= '1200') {
            var headerTopHeight = $('.page-header__top').outerHeight();
            console.log(headerTopHeight);

            if ($(window).scrollTop() >= 300) {

                $(".page-header").css('top', -headerTopHeight + 'px');
                $('.page-header__bottom').addClass('page-header__bottom--scrolled');


            } else {
                $(".page-header").css('top', 0 + 'px');
                $('.page-header__bottom').removeClass('page-header__bottom--scrolled');

            }
        } else {
            headerTopHeight = 0;
            if ($(window).scrollTop() >= 300) {

                $(".page-header").css('top', -headerTopHeight + 'px');
                $('.page-header__top').addClass('page-header__top--scrolled');
            } else {
                $(".page-header").css('top', 0 + 'px');
                $('.page-header__top').removeClass('page-header__top--scrolled');
            }
        }


    }

});

    //contact popup
    var contactPopup = document.querySelector('.popup--contact');
    var contactPopupClose = contactPopup.querySelector('.popup__close');
    var contactPopupOpen = document.querySelectorAll('.btn--popup-contact');
    var car_name = $("#popup_contact_car_example").attr("data-car_name");

    if (contactPopup && contactPopupOpen) {
        if(car_name)
            $("#popup_contact_car_name").val(car_name);
        contactPopup.classList.remove('popup--no-js');
        for (i = 0; i < contactPopupOpen.length; i++) {
            contactPopupOpen[i].addEventListener('click', function (e) {
                e.preventDefault();
                contactPopup.classList.add('popup--active');
            });
        }
    }

    if (contactPopupClose) {
        contactPopupClose.addEventListener('click', function (e) {
            e.preventDefault();
           // console.log("close");
            $(".popup__msg").each(function (i) {
                $(this).removeClass("popup__msg--active");
            });
            $(".help-block-error").each(function (i) {
                $(this).html("");
            });
            $(".clearable").each(function (i) {
                $(this).val("");
            });
            contactPopup.classList.remove('popup--active');
        });
    }


    window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
            if (contactPopup.classList.contains('popup--active')) {
                contactPopup.classList.remove('popup--active');
                $(".popup__msg").each(function (i) {
                    $(this).removeClass("popup__msg--active");
                });
                $(".help-block-error").each(function (i) {
                    $(this).html("");
                });
                $(".clearable").each(function (i) {
                    $(this).val("");
                });
            }
        }
    });

// calc popup
    var calcPopup = document.querySelector('.popup--calc');
    var calcPopupClose = calcPopup.querySelector('.popup__close');
    var calcPopupOpen = document.querySelectorAll('.btn--popup-calc');

    if (calcPopup && calcPopupOpen) {
        calcPopup.classList.remove('popup--no-js');
        for (i = 0; i < calcPopupOpen.length; i++) {
            calcPopupOpen[i].addEventListener('click', function (e) {
                e.preventDefault();
                calcPopup.classList.add('popup--active');
            });
        }
    }

    if (calcPopupClose) {
        calcPopupClose.addEventListener('click', function (e) {
            e.preventDefault();
           // console.log("close");
            calcPopup.classList.remove('popup--active');
            $(".popup__msg").each(function (i) {
                $(this).removeClass("popup__msg--active");
            });
            $(".help-block-error").each(function (i) {
                $(this).html("");
            });
            $(".clearable").each(function (i) {
                $(this).val("");
            });

        });
    }


    window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
            if (calcPopup.classList.contains('popup--active')) {
                calcPopup.classList.remove('popup--active');
           ///     console.log("close");
                $(".popup__msg").each(function (i) {
                    $(this).removeClass("popup__msg--active");
                });
                $(".help-block-error").each(function (i) {
                    $(this).html("");
                });
                $(".clearable").each(function (i) {
                    $(this).val("");
                });
            }
        }
    });



// Preloader
// var preloader = document.querySelector('.preloader');
// if (preloader) {
//     window.addEventListener('load', function() {
//         setTimeout(function(){
//             preloader.style.display = 'none';
//         },1000);
//     })
// }