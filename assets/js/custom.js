$(document).ready(function () {

    //==== Banner slider
    $('#home').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        autoplay: true,
    });

    //===== Progress-Bar
    $(".progress-bar").ProgressBar();

    //==== Isotope filter
    var $grid = $('.projects-items').isotope();

    //==== filter items on menu click
    $('.project-menu').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //==== filter items menu active
    $('.project-menu').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //==== Magnific Image Gallery
    $('.img-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    //== Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //==== Testimolnial slider
    $('.testimonial').owlCarousel({
        'items': 3,
        'loop': true,
        'autoplay': true,
        'margin': 30,
        'center': true,
        responsive: {
            0: {
                items: 1,
                margin: 30
            },
            576: {
                items: 2,
                center: false
            },
            992: {
                items: 3
            }
        }
    });

    //==== Sticky Navbar
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass("sticky");
        } else {
            $('.header').removeClass("sticky");
        }
    });



    //==== Scroll Top Button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#scroll').addClass('scroll-top');
        } else {
            $('#scroll').removeClass('scroll-top');
        }
    });
    $('#scroll').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    });
    
    //===Wow Js===
    new WOW().init();
});

//==== Mobile Menu
function openNav() {
    document.getElementById('mynav').style.width = "100%";
};

function closeNav() {
    document.getElementById('mynav').style.width = "0%";
};

//==== type js
var typed = new Typed('.type1', {
    strings: ['Freelancer', 'Web Designer', 'Front End Developer', 'Wordpress Expert'],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50
});
var typed = new Typed('.type2', {
    strings: ['Freelancer', 'Web Designer', 'Front End Developer', 'Wordpress Expert'],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50
});

//==== Smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
});
