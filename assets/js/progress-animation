/*=====================
Progress animation js 
==========================*/
document.addEventListener('DOMContentLoaded', function () {
    const progressBarSec = document.querySelector('.progress-bar-sec');
    const progressBar = progressBarSec.querySelector('.progress-bar span');
    const countBox = progressBarSec.querySelector('.count-box');
    const numberCount = document.getElementById('numberCount');
    const targetProgress = parseInt(progressBar.getAttribute('data-progress'), 10);
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                animateProgress(targetProgress);
                observer.disconnect();
            }
        });
    });

    observer.observe(progressBarSec);

    function animateProgress(target) {
        progressBar.style.width = target + '%';
        countBox.style.left = `calc(${target}% - 26px)`;
        animateNumber(0, target, numberCount);
    }

    function animateNumber(start, end, element) {
        let current = start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(2000 / (end - start)));
        const timer = setInterval(() => {
            current += increment;
            element.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
});