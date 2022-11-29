/*====================
   Footer parallax js
=======================*/
document.querySelector('body').className = "footer-parallax";
let footerSelect = document.querySelector('footer');
let height = footerSelect.offsetHeight;
document.querySelector('body').style.marginBottom = `${height}px`;
footerSelect.style.height = `${height}px`;


let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  // let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;