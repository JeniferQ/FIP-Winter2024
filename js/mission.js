(() => {

const goal = document.querySelector('#goal-text'),
circle = document.querySelectorAll('.ball-pop'),
circleText = document.querySelectorAll('.ball-text'),
text = document.querySelector(".text-pop"),
trees = document.querySelector("#tree-pop"),
exp = document.querySelector(".text-expand"),
redText = document.querySelector(".text h3"),
buttons = document.querySelectorAll(".web-button button");

function checkScrollDistance() {

    const scrollDistance = window.scrollY;
    const deviceWidth = window.innerWidth;

    if (deviceWidth <= 775) {
        if (scrollDistance >= 600) {
            animateAchievementContainer();
        }
        if (scrollDistance >= 1700) {
            animateText();
        }
        if (scrollDistance >= 2200) {
            animateWebButtonsContainer();
        }
    }
    else {
        if (scrollDistance >= 500) {
            animateAchievementContainer();
        }
        if (scrollDistance >= 1000) {
            animateText();
        }
        if (scrollDistance >= 1300) {
            animateWebButtonsContainer();
        }
    }

    function animateAchievementContainer() {
        goal.classList.add('animate');
        circle.forEach(element => element.classList.add('animate'));
        circleText.forEach(element => element.classList.add('animate'));
        text.classList.add('animate');
        trees.classList.add('animate');
        exp.classList.add('animate');
    }

    function animateText() {
        redText.classList.add('animate');
    }

    function animateWebButtonsContainer() {
        buttons.forEach(button => button.classList.add('animate'));
    }
}

window.onscroll = function() {checkScrollDistance()};

})();