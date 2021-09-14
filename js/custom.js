$(document).ready(function () {

    //header fixed js start
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
            $(".header").removeClass("scroll-header");
        } else {
            $(".header").addClass("scroll-header");
        }
    });
    //header fixed js ends

    //animation scroll js start
    $('header a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 2000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    //animation scroll js ends

    // scrollspy js start
    $('body').scrollspy({
        target: '#navbarSupportedContent'
    })
    // scrollspy js ends

    // progress bar js start
    $('#bar1').barfiller({
        duration: 2000
    });
    $('#bar2').barfiller({
        duration: 2000
    });
    $('#bar3').barfiller({
        duration: 2000
    });
    $('#bar4').barfiller({
        duration: 2000
    });
    // progress bar js ends




    // isotop filter js start
    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.port_menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    $('.port_menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    })
    // isotop filter js ends

    //counter js start
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });
    //counter js ends

    // testimonial slick slide js start
    $('.test_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    });
    // testimonial slick slide js ends

    // team slick slide js start
    $('.team_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    prevArrow: '<i class="fa fa fa-angle-left slidPrv4"></i>',
                    nextArrow: '<i class="fa fa-angle-right slidNext4"></i>',
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    prevArrow: '<i class="fa fa fa-angle-left slidPrv4"></i>',
                    nextArrow: '<i class="fa fa-angle-right slidNext4"></i>',
                }
            }
        ]
    });
    // team slick slide js ends

    // venobox js start
    $('.venobox').venobox();
    // venobox js ends

    // blog_img_slide js start
    $('.blog_img_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fa fa fa-angle-left slidPrv3"></i>',
        nextArrow: '<i class="fa fa-angle-right slidNext3"></i>',
        autoplay: true,
        autoplaySpeed: 4000,
    });
    // blog_img_slide js ends

    // top_to_scroll up js start
    $.scrollUp({
        scrollName: 'top_to_scroll', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 200, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fa fa-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // top_to_scroll up js ends


    // =================color panel=====================//


        $('.fa-cog').click(function () {
            $('.switcher_box').toggleClass('switcher_box_open');
        });

        $('.blue').click(function () {
            $('body').addClass('blue_bg').removeClass('red_bg orange_bg sky_bg green_bg yellow_bg');
        });

        $('.red').click(function () {
            $('body').addClass('red_bg').removeClass('blue_bg orange_bg sky_bg green_bg yellow_bg');
        });


        $('.orange').click(function () {
            $('body').addClass('orange_bg').removeClass('blue_bg red_bg sky_bg green_bg yellow_bg');
        });
    
        $('.sky').click(function () {
            $('body').addClass('sky_bg').removeClass('blue_bg red_bg orange_bg green_bg yellow_bg');
        });
    
        $('.green').click(function () {
            $('body').addClass('green_bg').removeClass('blue_bg red_bg  orange_bg sky_bg yellow_bg');
        });

        $('.yellow').click(function () {
            $('body').addClass('yellow_bg').removeClass('blue_bg red_bg orange_bg sky_bg green_bg');
        });



    // =================color panel=====================//


});