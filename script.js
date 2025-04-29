document.addEventListener('DOMContentLoaded', function() {
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
});

// Ensure page reloads when navigating back
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload();
    }
};

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Get the current timestamp
        var timestamp = new Date().getTime();

        // Get the stylesheet and script elements
        var stylesheet = document.getElementById('stylesheet');
        var script = document.getElementById('script');

        // Append the timestamp as a query parameter to the href and src attributes
        stylesheet.href = 'styles.css?v=' + timestamp;
        script.src = 'scripts.js?v=' + timestamp;
    });
</script>
