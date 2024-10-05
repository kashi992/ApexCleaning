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
