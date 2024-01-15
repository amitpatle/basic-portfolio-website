document.addEventListener("DOMContentLoaded", function () {
    // ... (existing JavaScript code)

    // Hide the loading overlay when the page has fully loaded
    window.addEventListener("load", function () {
        const loadingOverlay = document.getElementById("loading-overlay");
        loadingOverlay.style.display = "none";
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the "fade-in" class
    const fadeElements = document.querySelectorAll(".fade-in");

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll events
    function handleScroll() {
        fadeElements.forEach((element) => {
            if (isInViewport(element)) {
                element.classList.add("active");
            }
        });
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Trigger the animation on page load
    handleScroll();
});
