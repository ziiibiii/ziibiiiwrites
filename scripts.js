document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");
    
    prevButton.textContent = "←";
    nextButton.textContent = "→";
    
    prevButton.classList.add("carousel-button", "prev");
    nextButton.classList.add("carousel-button", "next");

    carousel.parentElement.appendChild(prevButton);
    carousel.parentElement.appendChild(nextButton);

    let currentIndex = 0;
    const totalItems = document.querySelectorAll(".carousel-item").length;

    function updateCarousel() {
        const offset = -currentIndex * 100; // Move to the correct slide
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });
});

