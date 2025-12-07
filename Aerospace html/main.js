console.log('Script loaded!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready!');

    const articles = document.querySelectorAll('.article');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('dotsContainer');
    const sliderImage = document.getElementById('sliderImage');
    const sliderLink = document.getElementById('sliderLink');
    
    let currentIndex = 0;
    

    const images = [
        'b747.jpg',
        'conc.jpg',
        'sr.jpg',
        'space-shuttle-qbwkvn9d9z3vrsf3.jpg',
        'f22.avif',
        'f15.jpeg',
        'b2spirit.jpg',
        'b777.jpg'
    ];
    

    const imageLinks = [
        'https://wall.alphacoders.com/big.php?i=412791',
        'https://wallpapers.com/wallpapers/flying-concorde-aircraft-from-british-airways-po9zm7x9usa6hcvn.html',
        'https://wall.alphacoders.com/big.php?i=569214',
        'https://wallpapers.com/wallpapers/space-shuttle-qbwkvn9d9z3vrsf3.html',
        'https://simpleflying.com/5-remarkable-features-lockheed-martin-f-22-raptor/',
        'https://wallpaper.mob.org/pc/image/military-mcdonnell_douglas_f_15_eagle-169911.html',
        'https://wallpapersafari.com/b2-bomber-wallpaper/',
        'https://mediacentre.britishairways.com/image/details/181050',
    ];

    articles.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('#dotsContainer .dot');

    function updateSlider() {
        console.log('Updating to slide:', currentIndex);
        articles.forEach((article, index) => {
            article.classList.remove('active');
            dots[index].classList.remove('active');
        });
        articles[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
        sliderImage.src = images[currentIndex];
        sliderLink.href = imageLinks[currentIndex];
        console.log('Link set to:', imageLinks[currentIndex]);
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === articles.length - 1;
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    function nextSlide() {
        if (currentIndex < articles.length - 1) {
            currentIndex++;
            updateSlider();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    

    
    updateSlider();

    const heliArticles = document.querySelectorAll('.heli-article');
    const prevBtn2 = document.getElementById('prevBtn2');
    const nextBtn2 = document.getElementById('nextBtn2');
    const dotsContainer2 = document.getElementById('dotsContainer2');
    const sliderImage2 = document.getElementById('sliderImage2');
    const sliderLink2 = document.getElementById('sliderLink2');
    
    let currentIndex2 = 0;
    
    const heliImages = [
        'belluh1.jpeg',
        'blackhawk.jpg',
        'ah64.jpeg',
        'chinook.jpg'
    ];
    
    
    const heliLinks = [
        'https://wallpaper.mob.org/gallery/tag=bell%20uh%201%20iroquois/',
        'https://wallpapercave.com/w/wp1985643',
        'https://wallpaper.mob.org/gallery/tag=boeing%20ah%2064%20apache/',
        'https://wallpaper.mob.org/gallery/tag=boeing%20ah%2064%20apache/'
    ];

    heliArticles.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide2(index));
        dotsContainer2.appendChild(dot);
    });

    const dots2 = dotsContainer2.querySelectorAll('.dot');

    function updateSlider2() {
        console.log('Updating helicopter to slide:', currentIndex2);
        heliArticles.forEach((article, index) => {
            article.classList.remove('active');
            dots2[index].classList.remove('active');
        });
        heliArticles[currentIndex2].classList.add('active');
        dots2[currentIndex2].classList.add('active');
        sliderImage2.src = heliImages[currentIndex2];
        sliderLink2.href = heliLinks[currentIndex2];
        console.log('Helicopter link set to:', heliLinks[currentIndex2]);
        prevBtn2.disabled = currentIndex2 === 0;
        nextBtn2.disabled = currentIndex2 === heliArticles.length - 1;
    }

    function goToSlide2(index) {
        currentIndex2 = index;
        updateSlider2();
    }

    function nextSlide2() {
        if (currentIndex2 < heliArticles.length - 1) {
            currentIndex2++;
            updateSlider2();
        }
    }

    function prevSlide2() {
        if (currentIndex2 > 0) {
            currentIndex2--;
            updateSlider2();
        }
    }

    nextBtn2.addEventListener('click', nextSlide2);
    prevBtn2.addEventListener('click', prevSlide2);

    
    updateSlider2();
});