/*=====================
    Onscroll animation js 
==========================*/

window.addEventListener('scroll', function () {
    const bottomTarget = document.querySelector('.box-before');
    const topTarget = document.querySelector('.box-after');
    const section = document.getElementById('saas-tab-section');
    const sectionTop = section.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= sectionTop) {
        const offset = scrollPosition - sectionTop;
        const newPosition = Math.min(offset - 150, 0); // Adjust value as needed
        bottomTarget.style.bottom = `${newPosition}px`;
        topTarget.style.top = `${newPosition}px`;
    } else {
        bottomTarget.style.bottom = '-150px';
        topTarget.style.top = '-290px';
    }
});