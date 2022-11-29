/*=====================
    Sticky header js 
==========================*/
window.addEventListener('scroll', function () {
    window.scrollY >= 300 ? document.querySelector("header").classList.add("sticky-header") :
        document.querySelector("header").classList.remove("sticky-header");
})