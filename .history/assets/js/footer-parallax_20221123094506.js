/*====================
   Footer parallax js
=======================*/

let footerSelect = document.querySelector('footer');
let height = footerSelect.offsetHeight;
document.querySelector('body').style.marginBottom = `${height}px`;
footerSelect.style.height = `${height}px`;