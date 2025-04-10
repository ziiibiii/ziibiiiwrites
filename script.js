document.addEventListener('DOMContentLoaded', function () {
    let carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextItem() {
        currentIndex++;
        if (currentIndex >= carouselItems.length) {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            item.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }

    setInterval(showNextItem, 3000); // Change item every 3 seconds
});
