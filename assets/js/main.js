

$(document).ready(function () {
    // navbar and scroll to top fixed start
    var navbar = $('.navWrap');
    var scrollTopBtn = $('.scrollTop');

    // Single scroll event listener to handle both navbar and scroll button logic
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        // Toggle navbar class
        if (scroll > 50) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }

        // Toggle scroll to top button class
        if (scroll > 100) {
            scrollTopBtn.addClass('scrolled');
        } else {
            scrollTopBtn.removeClass('scrolled');
        }
    });

    // Scroll to top functionality on button click
    scrollTopBtn.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    // navbar and scroll to top fixed end

    // hero slick start 
    $('.heroSlick').slick({
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        swipe: true,
        swipeToSlide: true,
        dots: true,

        // nextArrow: '.slick-next-testi',
        // prevArrow: '.slick-prev-testi',

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // hero slick end
});