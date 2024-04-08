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
    
    const productInfo = document.querySelector("#info");
    const nutritionalTable = document.querySelector("#nv-table");
    
    let count = 0;
    const products = [
        { name: "Dr. Nut Almond", stars: "4", rating: "images/stars.svg" },
        { name: "Dr. Nut Peanut", stars: "5", rating: "images/stars1.svg" },
        { name: "Dr. Nut Hazelnut", stars: "4", rating: "images/stars.svg" },
        { name: "Dr. Nut Pistachio", stars: "5", rating: "images/stars1.svg" },
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
    
    function showInfo() {
        const infoDiv = document.createElement("div");
        infoDiv.innerHTML = 
    
        `<h2 class="hidden">Product Information</h2>
        <div id="nut"><h1>${products[count].name}</h1></div>
        <div id="rating">
            <img class="stars" src="${products[count].rating}" alt="${products[count].stars} star rating">
            <a class="link" href="#">Read reviews</a>
        </div>`
    
        productInfo.innerHTML = "";
        productInfo.appendChild(infoDiv);
    }
    
    function showValues() {
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
    
        nutritionalTable.innerHTML = "";
        nutritionalTable.appendChild(tableDiv);
    }
    
    const waveUp = document.querySelector('.wave-up');

    function waveAnimation() {
        let waveColor = '';
    
        if (count === 0) {
            waveColor = 'images/wave1.svg'; // Change the URL accordingly
        } else if (count === 1) {
            waveColor = 'images/wave2.svg'; // Change the URL accordingly
        } else if (count === 2) {
            waveColor = 'images/wave1.svg'; // Change the URL accordingly
        } else if (count === 3) {
            waveColor = 'images/wave2.svg'; // Change the URL accordingly
        }
    
        waveUp.querySelector('img').src = waveColor;
    }
    
    function nextInfo() {
        count++;
        if (count >= products.length) {
            count = 0;
        }
    
        showInfo();
        showValues();
        waveAnimation();
    }
    
    function prevInfo() {
        count--;
        if (count < 0) {
            count = products.length-1;
        }
    
        showInfo();
        showValues();
        waveAnimation();
    }
    
    showInfo();
    showValues();
    
    prevBtn.addEventListener('click', prevSlide);
    prevBtn.addEventListener('click', prevInfo);
    
    nextBtn.addEventListener('click', nextSlide);
    nextBtn.addEventListener('click', nextInfo);
    
    window.addEventListener('resize', slideResize);
    
    slideResize();
})();