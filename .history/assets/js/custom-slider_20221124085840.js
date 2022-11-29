/*====================
   swiper custom js
=======================*/

var logo6 = new Swiper(".logo-6", {
    slidesPerView: 6,
    spaceBetween: 12,
    loop: true,
    autoplay: {
        pauseOnMouseEnter: true,
        delay: 1,
        disableOnInteraction: false,
    },
    speed: 1800,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 5,
        },
        1400: {
            slidesPerView: 6,
        },
    },
});

var swiper3 = new Swiper(".slider-3", {
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
    },
});

var swiper5 = new Swiper(".slider-5", {
    slidesPerView: 4.5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
});


