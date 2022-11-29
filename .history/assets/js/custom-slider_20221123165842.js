/*====================
   swiper custom js
=======================*/

var logo6 = new Swiper(".logo-6", {
    slidesPerView: 6,
    spaceBetween: 12,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    speed: 1500,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
});

var swiper3 = new Swiper(".slider-3", {
    slidesPerView: 3,
    spaceBetween: 0,
});

var swiper5 = new Swiper(".slider-5", {
    slidesPerView: 4.5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
});


