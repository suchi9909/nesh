/*=====================
    Sticky header js 
==========================*/
window.addEventListener('scroll', function () {
    window.scrollY >= 300 ? document.querySelector("header").classList.add("sticky-header") :
        document.querySelector("body").classList.remove("sticky-header");
})