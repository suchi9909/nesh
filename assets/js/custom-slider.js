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

var blog3 = new Swiper(".blog-3", {
    slidesPerView: 3,
    spaceBetween: 25,
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

var blog3 = new Swiper(".blog-three", {
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
    },
});

var podcast3 = new Swiper(".podcast-3", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1.5,
        },
        991: {
            slidesPerView: 2.5,
        },
        1400: {
            slidesPerView: 3.5,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var slidertwo = new Swiper(".slider-2", {
    slidesPerView: 2,
    autoHeight: true,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        }
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
            slidesPerView: 1,
            spaceBetween: 25,
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 15,
        },
        767: {
            slidesPerView: 2,
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
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 5,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var slider6 = new Swiper(".slider-6", {
    slidesPerView: 6,
    spaceBetween: 1,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 6,
        },
    }
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
        400: {
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
        nextEl: ".process-next",
        prevEl: ".process-prev",
    },
});

var screenSlide = new Swiper(".screenshot-slide", {
    slidesPerView: 5,
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 15,
        },
        380: {
            slidesPerView: 2.5,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var pricing3 = new Swiper(".pricing-3", {
    slidesPerView: 3,
    autoHeight: true,
    spaceBetween: 50,
    centeredSlides: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        480: {
            slidesPerView: 1.5,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2.5,
        },
        1199: {
            slidesPerView: 3,
        },
    },
});


var team4 = new Swiper(".team-4", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        420: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
    },
});

var slide1 = new Swiper(".slide-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".testi-next",
        prevEl: ".testi-prev",
    },
});
