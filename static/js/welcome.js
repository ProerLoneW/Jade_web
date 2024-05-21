document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to each image wrapper
    const wrappers = document.querySelectorAll('.image-wrapper');
    wrappers.forEach(wrapper => {
        wrapper.addEventListener('mouseenter', () => {
            const image = wrapper.querySelector('img');
            image.src = image.src.replace('image', 'image-alt'); // Assume alt images are named image-alt1.png, etc.
        });
        wrapper.addEventListener('mouseleave', () => {
            const image = wrapper.querySelector('img');
            image.src = image.src.replace('image-alt', 'image'); // Revert to original on mouse leave
        });
    });
});
