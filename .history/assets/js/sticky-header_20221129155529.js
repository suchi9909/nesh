window.addEventListener('scroll', function () {
    window.scrollY >= 300 ? document.querySelector("header").classList.add("fade-in") :
        document.querySelector("header").classList.remove("fade-in");
})