(() => {
    const slider = document.querySelector('#product-slider');
    const prevBtn = document.querySelector('#prev');
    const nextBtn = document.querySelector('#next');
    
    let slideWidth = slider.clientWidth;
      
    let currentIndex = 0;
      
    function showSlide(index) {
        const newTranslateX = -index * slideWidth + 'px';
        console.log(newTranslateX);
        slider.style.transform = 'translateX(' + newTranslateX + ')';
    }
      
    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slider.children.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }
      
    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
         currentIndex = slider.children.length-1;
        }
        showSlide(currentIndex);
    }
    
    function slideResize() {
        slideWidth = slider.clientWidth;
        showSlide(currentIndex);
    }
    
    prevBtn.addEventListener('click', prevSlide);
    
    nextBtn.addEventListener('click', nextSlide);
    
    window.addEventListener('resize', slideResize);
    
    slideResize();
})();