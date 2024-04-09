(() => {
    const slider = document.querySelector('#product-slider'),
    banner = document.querySelector('#image-slider'),
    prevBtn = document.querySelector('#prev'),
    nextBtn = document.querySelector('#next'),
    productInfo = document.querySelector("#info"),
    nutritionalTable = document.querySelector("#nv-table"),
    waveUp = document.querySelector('.wave-up'),
    flavorImages = document.querySelectorAll('.flavor-selector img');

    const products = [
        { name: "Dr. Nut Almond", stars: "4.5", rating: "images/stars45.svg" },
        { name: "Dr. Nut Peanut", stars: "4", rating: "images/stars4.svg" },
        { name: "Dr. Nut Hazelnut", stars: "5", rating: "images/stars5.svg" },
        { name: "Dr. Nut Pistachio", stars: "4.5", rating: "images/stars45.svg" },
    ];
    
    const values = [
        { cal: "120cal", fat: "5g", sodium: "20mg", carb: "40g", sugar: "30g", protein: "0g",
        ing: "Ingredients: Carbonated Water, Sugar, Almond Concentrate, Caffeine, Sodium Benzoate, Citric Acid and Almond Extract."},
        { cal: "120cal", fat: "4g", sodium: "21mg", carb: "45g", sugar: "25g", protein: "0g", 
        ing: "Ingredients: Carbonated Water, Sugar, Peanut Concentrate, Guarana Extract, Sodium Benzoate, Citric Acid and Roasted Peanut Extract."},
        { cal: "120cal", fat: "5g", sodium: "22mg", carb: "42g", sugar: "24g", protein: "0g", 
        ing: "Ingredients: Carbonated Water, Sugar, Hazelnut Concentrate, Caffeine, Sodium Benzoate, Citric Acid and Hazelnut Extract."},
        { cal: "120cal", fat: "4g", sodium: "20mg", carb: "38g", sugar: "28g", protein: "0g", 
        ing: "Ingredients: Carbonated Water, Sugar, Pistachio Concentrate, Caffeine, Sodium Benzoate, Lactic Acid and Pistachio Extract."},
    ];

    let slideWidth = slider.clientWidth;
    let count = 0;
    let currentIndex = 0;

    function waveAnimation() {
        let waveColor = '';
    
        if (count === 0) {
            waveColor = 'images/wave1.svg';
        } else if (count === 1) {
            waveColor = 'images/wave2.svg'
        } else if (count === 2) {
            waveColor = 'images/wave3.svg';
        } else if (count === 3) {
            waveColor = 'images/wave4.svg';
        }
    
        waveUp.querySelector('img').src = waveColor;
    }
      
    function showSlide(index) {
        const newTranslateX = -index * slideWidth + 'px';
        console.log(newTranslateX);
        slider.style.transform = 'translateX(' + newTranslateX + ')';
    }

    function showText() {
        const infoDiv = document.createElement("div");
        infoDiv.innerHTML = 
    
        `<h2 class="hidden">Product Information</h2>
        <div id="nut"><h1>${products[count].name}</h1></div>
        <div id="rating">
            <img class="stars" src="${products[count].rating}" alt="${products[count].stars} star rating">
            <a class="link" href="#">Read reviews</a>
        </div>`

        const tableDiv = document.createElement("div");
        tableDiv.innerHTML = 
    
        `<h2 class="hidden">Nutritional Information</h2>
        <h2>Nutrition Facts / Valeur Nutritive</h2>
        <h3>Serving Size: 355 mL</h3>
        <h4>Amount</h4>
        <ul id="nv-info">
            <li><span class="label-heading">Calories</span><span class="label-value" id="cal">${values[count].cal}</span></li>
            <li><span class="label-heading">Fat</span><span class="label-value" id="fat">${values[count].fat}</span></li>
            <li><span class="label-heading">Sodium</span><span class="label-value" id="sodium">${values[count].sodium}</span></li>
            <li><span class="label-heading">Carbohydrates</span><span class="label-value" id="carb">${values[count].carb}</span></li>
            <li><span class="label-heading">Sugars</span><span class="label-value" id="sugar">${values[count].sugar}</span></li>
            <li><span class="label-heading">Protein</span><span class="label-value" id="protein">${values[count].protein}</span></li>
        </ul>
        <p class="ing">${values[count].ing}</p>`
    
        productInfo.innerHTML = "";
        nutritionalTable.innerHTML = "";
        productInfo.appendChild(infoDiv);
        nutritionalTable.appendChild(tableDiv);
    }
      
    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slider.children.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    function nextText() {
        count++;
        if (count >= products.length) {
            count = 0;
        }
        showText();
        waveAnimation();
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slider.children.length-1;
        }
        showSlide(currentIndex);
    }

    function prevText() {
        count--;
        if (count < 0) {
            count = products.length-1;
        }
        showText();
        waveAnimation();
    }
    
    function slideResize() {
        slideWidth = slider.clientWidth;
        showSlide(currentIndex);
    }

    function pickFlavor(index) {
        currentIndex = index;
        count = index;
        showSlide(currentIndex);
        showText(count);
        waveAnimation(count);
    }

    flavorImages.forEach((image, index) => image.addEventListener('click', () => pickFlavor(index)));
   
    showText();
    
    prevBtn.addEventListener('click', prevSlide);
    prevBtn.addEventListener('click', prevText);
    
    nextBtn.addEventListener('click', nextSlide);
    nextBtn.addEventListener('click', nextText);
    
    window.addEventListener('resize', slideResize);
    
    slideResize();
})();