const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let autoSlideInterval;

// Function to move to the next slide
const goToNextSlide = () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);

    // Update classes for active state
    items.forEach(item => item.classList.remove('active'));
    items[1].classList.add('active'); // Adjust as needed
};

// Function to move to the previous slide
const goToPrevSlide = () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);

    // Update classes for active state
    items.forEach(item => item.classList.remove('active'));
    items[items.length - 2].classList.add('active'); // The new first item
};

// Function to reset the auto-slide timer
const resetAutoSlideTimer = () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(goToNextSlide, 5000); // 5 seconds
};

// Add event listeners for buttons
next.addEventListener('click', () => {
    goToNextSlide();
    resetAutoSlideTimer();
});

prev.addEventListener('click', () => {
    goToPrevSlide();
    resetAutoSlideTimer();
});

// Start the auto-slide timer initially
resetAutoSlideTimer();
