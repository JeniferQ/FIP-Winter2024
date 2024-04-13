(() => {

    const video = document.querySelector('.up-video'),
    mission = document.querySelector('.up-mission'),
    story = document.querySelector('.up-story'),
    contact = document.querySelector('.up-contact');
    
    function checkScrollDistance() {
    
        const scrollDistance = window.scrollY,
        deviceWidth = window.innerWidth;
    
        if (deviceWidth <= 775) {
            if (scrollDistance >= 250) {
                animateVideo();
            }
            if (scrollDistance >= 700) {
                animateMission();
            }
            if (scrollDistance >= 1200) {
                animateStory();
            }
            if (scrollDistance >= 1800) {
                animateContact();
            }
        }
    
        else {
            if (scrollDistance >= 250) {
                animateVideo();
            }
            if (scrollDistance >= 800) {
                animateMission();
            }
            if (scrollDistance >= 1300) {
                animateStory();
            }
            if (scrollDistance >= 1900) {
                animateContact();
            }
        }
    
        function animateVideo() {
            video.classList.add('animate');
        }
    
        function animateMission() {
            mission.classList.add('animate');
        }
    
        function animateStory() {
            story.classList.add('animate');
        }
    
        function animateContact() {
            contact.classList.add('animate');
        }
    }
    
    window.onscroll = function() {checkScrollDistance()};
    
    //     const banner = document.querySelector('#image-slider'),
    //     dots = document.querySelectorAll('.dots .dot'),
    //     bannerInfo = document.querySelector("#banner-text");
    //     let bannerWidth = banner.clientWidth;
      
    //     let currentIndex = 0,
    //     count = 0;
    
    //     const info = [
    //         { heading: "Taste the Pistachio", paragraph: "Our newest release, at your reach today. Try out the limited edition Dr. Nut Pistachio while the stocks last." },
    //         { heading: "Our flagship product", paragraph: "The unbeatable Dr. Nut Almond could be arriving at your home tomorrow. Don't miss this opportunity." },
    //         { heading: "Fresh from the farms", paragraph: "The delicious Dr. Nut Peanut is crafted with the best roasted peanuts in town. Experience the freshness today." },
    //         { heading: "Our nuttiest soda", paragraph: "An explosion of flavours inside a single can. Better than ever, the Dr. Nut Hazelnut is back with a new formula." },
    //     ];
    
    //     function showBannerText() {
    //         const bannerTextDiv = document.createElement("div");
    //         bannerTextDiv.innerHTML = 
    
    //         `<h2>${info[count].heading}</h2>
    //         <p>${info[count].paragraph}</p>
    //         <button>Explore our products</button>`
    
    //         bannerInfo.innerHTML = "";
    //         bannerInfo.appendChild(bannerTextDiv);
    //     }
    
    //     function showBanner(index) {
    //         const bannerTransform = -index * bannerWidth + 'px';
    //         banner.style.transform = 'translateX(' + bannerTransform + ')';
    //         selectedDot();
    //     }
    
    //     function selectedDot() {
    //         dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
    //     }
    
    //     function nextBanner() {
    //         currentIndex++;
    //         if (currentIndex >= dots.length) {
    //             currentIndex = 0;
    //         }
    //         showBanner(currentIndex);
    //     }
    
    //     function nextBannerInfo() {
    //         count++;
    //         if (count >= info.length) {
    //             count = 0;
    //         }
    //         showBannerText();
    //     }
    
    //     function startAutoplay() {
    //         intervalId = setInterval(() => {
    //             nextBanner();
    //             nextBannerInfo();
    //         },6000);
    //     }
    
    //     function stopAutoplay() {
    //         clearInterval(intervalId);
    //     }
    
    //     function resizeBanner() {
    //       bannerWidth = banner.clientWidth;
    //       showBanner(currentIndex);
    //   }
    
    //     function pickBanner(index) {
    //         currentIndex = index;
    //         count = currentIndex;
    //         showBanner(currentIndex);
    //         showBannerText(count);
    //         stopAutoplay();
    //     }
    
    //     dots.forEach((dot, index) => dot.addEventListener('click', () => pickBanner(index)));
    //     startAutoplay();
    //     showBannerText();
    //     window.addEventListener('resize', resizeBanner);
    //     resizeBanner();
    
 })();