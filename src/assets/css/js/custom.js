"use strict";
$(document).ready(function() {

    $("select").niceSelect();

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        AOS Animation Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    AOS.init();
    window.addEventListener("load", AOS.refresh);

    /*Mesonary active*/


    var $grid = $('.iso-grid-wrap');
    $grid.packery({
        // options
        itemSelector: '.isotope-item',
        // gutter: 15,
        resize: true
    });
    $grid.imagesLoaded().progress(function() {
        $grid.packery('layout');
    });


    var $gridMas = $('.iso-mas-grid-wrap');
    $gridMas.packery({
        // options
        itemSelector: '.isotope-mas-item',
        // gutter: 15,
        resize: true
    });
    $gridMas.imagesLoaded().progress(function() {
        $gridMas.packery('layout');
    });


    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('#isotope-filters').on('click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });
    // bind filter button click
    $('#isotope-mas-filters').on('click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $gridMas.isotope({
            filter: filterValue
        });
    });

    // change is-checked class on buttons
    $('.isotope-nav').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a', function() {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
        L4 Tesimonial slider
     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    if (jQuery(".testimonial-l4-slider").length > 0) {
        $(".testimonial-l4-slider").slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            cssEase: 'linear',
            responsive: [{
                breakpoint: 768,
            }, ],
        });
    }


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
         Landing 9 feature area-1
     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    if (jQuery(".feature-slider-l9-1").length > 0) {
        $('.feature-slider-l9-1').slick({

            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            swipe: true,
            infinite: true,
            autoplaySpeed: 2000,
            appendArrows: '.l9-slider-arrow-1',
            prevArrow: $('.prev9'),
            nextArrow: $('.next9'),
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        centerPadding: '10%',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '20px',
                        slidesToShow: 1
                    }
                }

            ]
        });
    }


    /*l9 Testimonial slider button active*/

    $(document).ready(function() {
        $('.l9-slider-arrow-1 i').click(function() {
            $('.l9-slider-arrow-1 i').removeClass("slick-active");
            $(this).addClass("slick-active");
        });
    });

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
        Landing 9 Testimonial 1
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    if (jQuery(".testimonial-slider-l9-1").length > 0) {
        $('.testimonial-slider-l9-1').slick({

            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            swipe: true,
            infinite: true,
            autoplaySpeed: 2000,
            appendArrows: '.l9-slider-arrow-2',
            prevArrow: $('.prev9-1'),
            nextArrow: $('.next9-1'),
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        centerPadding: '10%',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '20px',
                        slidesToShow: 1
                    }
                }

            ]
        });
    }

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
         Product Details SLider
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    if (jQuery(".product-details-vertical-slider").length > 0) {
        $('.product-details-vertical-slider').slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            focusOnSelect: true,
            vertical: true,
            asNavFor: '.product-details-slider',
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        vertical: false
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        vertical: false
                    }
                }
            ]
        });
    }

    if (jQuery(".product-details-slider").length > 0) {
        $('.product-details-slider').slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.product-details-vertical-slider'
        });
    }



    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Auto count number SHop page
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    function increseNumber() {
        $('.input--amount-control').on('click', function(e) {
            var $button = $(e.target);
            var oldValue = $button.parent('.input--amount-control').find('input').val();
            if ($button.hasClass('amount-inc-btn')) {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 0;
                }
            }
            $button.parent('.input--amount-control').find('input').val(newVal);
        });
    }

    increseNumber();


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Counter Up Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });





    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Sticky Header
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            $(".site-header--sticky").addClass("scrolling");
        } else {
            $(".site-header--sticky").removeClass("scrolling");
        }
        if (
            document.body.scrollTop > 700 ||
            document.documentElement.scrollTop > 700
        ) {
            $(".site-header--sticky.scrolling").addClass("reveal-header");
        } else {
            $(".site-header--sticky.scrolling").removeClass("reveal-header");
        }
    }

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Input Count Up Button
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    $(".count-btn").on("click", function() {
        var $button = $(this);
        var oldValue = $button
            .parent(".count-input-btns")
            .parent()
            .find("input")
            .val();
        if ($button.hasClass("inc-ammount")) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent(".count-input-btns").parent().find("input").val(newVal);
    });

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Prcing Dynamic Script
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    $("[data-pricing-trigger]").on("click", function(e) {
        $(e.target).addClass("active").siblings().removeClass("active");
        var target = $(e.target).attr("data-target");
        console.log($(target).attr("data-value-active") == "monthly");
        if ($(target).attr("data-value-active") == "monthly") {
            $(target).attr("data-value-active", "yearly");
        } else {
            $(target).attr("data-value-active", "monthly");
        }
    });

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Smooth Scroll
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(".goto").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                    scrollTop: $(hash).offset().top,
                },
                2000,
                function() {
                    window.location.hash = hash;
                }
            );
        } // End if
    });



    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Preloader Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(window).load(function() {
        setTimeout(function() {
            $("#loading").fadeOut(500);
        }, 1000);
        setTimeout(function() {
            $("#loading").remove();
        }, 2000);
    });




    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Home-2- testimonial  Slider 
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    var slickContentslide = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        asNavFor: '.l2-testimonial-image-slider',
        adaptiveHeight: false,
        prevArrow: $('.prev3'),
        nextArrow: $('.next3'),
        fade: true,
        cssEase: 'linear'
    }

    var slickImgslide2 = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        asNavFor: '.l2-testimonial-text-slider',
        prevArrow: $('.prev3'),
        nextArrow: $('.next3'),
        fade: true,
        cssEase: 'linear'
    }


    $('.l2-testimonial-image-slider').slick(slickImgslide2);
    $('.l2-testimonial-text-slider').slick(slickContentslide);

    /*l2 Testimonial slider button active*/

    $(document).ready(function() {
        $('.next-prev-btn3 span').click(function() {
            $('.next-prev-btn3 span').removeClass("active");
            $(this).addClass("active");
        });
    });



    /*----------------------------------------
            Accordian Plugin
        ----------------------------------------*/

    (function($) {
        $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

        $('.accordion a').click(function(j) {
            var dropDown = $(this).closest('li').find('p');

            $(this).closest('.accordion').find('p').not(dropDown).slideUp();

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).closest('.accordion').find('a.active').removeClass('active');
                $(this).addClass('active');
            }

            dropDown.stop(false, true).slideToggle();

            j.preventDefault();
        });
    })(jQuery);


    /*Accordian main page li active*/

    $(document).ready(function() {
        $('.faq-main-area-single li').click(function() {
            $('.faq-main-area-single li').removeClass("active");
            $(this).addClass("active");
        });
    });


    /*FAQ TAB li active*/

    $(document).ready(function() {
        $('.faq-main-tab-area li').click(function() {
            $('.faq-main-tab-area li').removeClass("active");
            $(this).addClass("active");
        });
    });

    /*Pagination active*/

    $(document).ready(function() {
        $('.shop-pagination a').click(function() {
            $('.shop-pagination a').removeClass("active");
            $(this).addClass("active");
        });
    });


    $(document).ready(function() {
        $('.blog-pagination a').click(function() {
            $('.blog-pagination a').removeClass("active");
            $(this).addClass("active");
        });
    });




});