/*=====================
    Mobile Accordion setting js 
==========================*/
function updateAccordionState() {
    const button = document.querySelector('#headingseven .accordion-button');
    const collapseseven = document.getElementById('collapseseven');

    if (window.innerWidth <= 768) {
        button.setAttribute('aria-expanded', 'false');
        button.classList.add('collapsed');
        collapseseven.classList.remove('show');
    } else {
        button.setAttribute('aria-expanded', 'true');
        button.classList.remove('collapsed');
        collapseseven.classList.add('show');
    }
}
window.addEventListener('load',
    updateAccordionState);
window.addEventListener('resize', updateAccordionState);