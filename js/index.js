(() => {
    const banner = document.querySelector('#image-slider');
    const dots = document.querySelectorAll('.dots .dot');
    let bannerWidth = banner.clientWidth;
  
    let currentIndex = 0;

    function showBanner(index) {
      const bannerTransform = -index * bannerWidth + 'px';
      console.log(bannerTransform);
      banner.style.transform = 'translateX(' + bannerTransform + ')';
    }

    function updateSlideWidth() {
      bannerWidth = banner.clientWidth;
      showBanner(currentIndex); // Adjust the position of the current slide on resize  
  }

    function pickBanner(index) {
        currentIndex = index;
        showBanner(currentIndex);
    }

    dots.forEach((dot, index) => dot.addEventListener('click', () => pickBanner(index)));

    window.addEventListener('resize', updateSlideWidth);
    updateSlideWidth();
})();