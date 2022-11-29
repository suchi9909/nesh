/*====================
   Footer parallax js
=======================*/
document.querySelector('body').className = "footer-parallax";
let footerSelect = document.querySelector('footer');
let height = footerSelect.offsetHeight;
document.querySelector('body').style.marginBottom = `${height}px`;
footerSelect.style.height = `${height}px`;
