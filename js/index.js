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

})();