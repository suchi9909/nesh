/*=====================
    Tab active effect js 
==========================*/
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.nav-link[tab-direction]');
    const tabStyle5 = document.querySelector('.tab-style-5');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const direction = tab.getAttribute('tab-direction');

            if (direction === 'left') {
                tabStyle5.classList.add('left');
                tabStyle5.classList.remove('right');
            } else if (direction === 'right') {
                tabStyle5.classList.add('right');
                tabStyle5.classList.remove('left');
            }
        });
    });
});