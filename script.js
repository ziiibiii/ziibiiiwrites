document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");
    const dotsContainer = document.querySelector(".carousel-dots");
    
    prevButton.textContent = "←";
    nextButton.textContent = "→";
    
    prevButton.classList.add("carousel-button", "prev");
    nextButton.classList.add("carousel-button", "next");

    carousel.parentElement.appendChild(prevButton);
    carousel.parentElement.appendChild(nextButton);

    const totalItems = document.querySelectorAll(".carousel-item").length;
    let currentIndex = 0;
    let autoplayInterval;

    // Create dots for navigation
    for (let i = 0; i < totalItems; i++) {
        const dot = document.createElement("button");
        dot.classList.add("dot");
        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll(".carousel-dots button");

    // Function to update the carousel
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;

        // Update the active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    // Go to a specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    // Autoplay function
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
            updateCarousel();
        }, 3000); // Change slide every 3 seconds
    }

    // Pause autoplay on manual navigation
    prevButton.addEventListener("click", function () {
        clearInterval(autoplayInterval);
        currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
        updateCarousel();
        startAutoplay();
    });

    nextButton.addEventListener("click", function () {
        clearInterval(autoplayInterval);
        currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
        updateCarousel();
        startAutoplay();
    });

    // Start autoplay when the page loads
    startAutoplay();
});
