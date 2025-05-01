document.addEventListener('DOMContentLoaded', function() {
    // Project carousel navigation
    let currentIndex = 0;
    const projectCarousel = document.getElementById('projectCarousel');
    const writingCarousel = document.getElementById('writingCarousel');
    
    // Project carousel navigation
    function moveCarousel(direction) {
        const slides = document.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;

        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        const offset = -currentIndex * 100;  // Move slide by 100%
        projectCarousel.style.transform = `translateX(${offset}%)`;
    }

    // Writing carousel navigation
    function moveWritingCarousel(direction) {
        const slides = document.querySelectorAll('.writing-slide');
        const totalSlides = slides.length;

        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        const offset = -currentIndex * 100;  // Move slide by 100%
        writingCarousel.style.transform = `translateX(${offset}%)`;
    }

    // Event listeners for carousel buttons
    document.getElementById('projectPrev').addEventListener('click', () => moveCarousel(-1));
    document.getElementById('projectNext').addEventListener('click', () => moveCarousel(1));

    document.getElementById('writingPrev').addEventListener('click', () => moveWritingCarousel(-1));
    document.getElementById('writingNext').addEventListener('click', () => moveWritingCarousel(1));

    // Cache busting for CSS and JS
    var timestamp = new Date().getTime(); // Get the current timestamp

    var stylesheet = document.getElementById('stylesheet'); // Get the stylesheet link
    if (stylesheet) {
        stylesheet.href = 'styles.css?v=' + timestamp;  // Append timestamp to CSS link
    }

    var script = document.querySelector('script[src="scripts.js"]'); // Get the script tag
    if (script) {
        script.src = 'scripts.js?v=' + timestamp;  // Append timestamp to script link
    }
});

// Ensure page reloads when navigating back
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload();
    }
};
