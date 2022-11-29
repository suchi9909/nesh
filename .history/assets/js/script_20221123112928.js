/*====================
   01. Ratio js
=======================*/
window.addEventListener('load', () => {
    const bgImg = document.querySelectorAll(".bg-img");
    for (i = 0; i < bgImg.length; i++) {

        let bgImgEl = bgImg[i];
        /// Optional Class Add /// 
        if (bgImgEl.classList.contains('bg-top')) {
            bgImgEl.parentNode.classList.add("b-top");
        }
        else if (bgImgEl.classList.contains('bg-bottom')) {
            bgImgEl.parentNode.classList.add("b-buttom");
        }
        else if (bgImgEl.classList.contains('bg-center')) {
            bgImgEl.parentNode.classList.add("b-center");
        }
        else if (bgImgEl.classList.contains('bg-left')) {
            bgImgEl.parentNode.classList.add("b-left");
        }
        else if (bgImgEl.classList.contains('bg-right')) {
            bgImgEl.parentNode.classList.add("b-right");
        }

        /// Lazyloader Class Add ///
        if (bgImgEl.classList.contains('blur-up')) {
            bgImgEl.parentNode.classList.add("blur-up", "lazyload");
        }

        /// Size Class Add ///
        if (bgImgEl.classList.contains('bg_size_content')) {
            bgImgEl.parentNode.classList.add("b_size_content");
        }

        /// Ratio Style ///
        bgImgEl.parentNode.classList.add("bg-size");
        const bgSrc = bgImgEl.src;
        bgImgEl.style.display = 'none';
        bgImgEl.parentNode.setAttribute("style", `
        background-image: url(${bgSrc});
        background-size:cover;
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        `);
    }
});


/*====================
   02. Back to tap js
=======================*/
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("backToTop");
    let pos = document.documentElement.scrollTop;

    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "flex";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;