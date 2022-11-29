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
    autoHeight: true,
    spaceBetween: 0,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
    },
});

var swiper5half = new Swiper(".slider-5-half", {
    slidesPerView: 4.5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoHeight: true,
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 2.5,
        },
        1199: {
            slidesPerView: 3.5,
        },
        1400: {
            slidesPerView: 4.5,
        },
    },
});


var swiper5 = new Swiper(".slider-5", {
    slidesPerView: 5,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var processSlide = new Swiper(".process-slide", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: false,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var screenSlide = new Swiper(".screenshot-slide", {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5,
        },
    }
});