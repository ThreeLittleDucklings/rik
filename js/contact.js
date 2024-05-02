document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'images/people/RIK7398-1.jpg',
        'images/people/6-Meganck-P9.jpg',
        'images/people/RIK7396-1.jpg',
        'images/people/6-Meganck-P9.jpg',
        'images/people/foto2.jpg',
        'images/people/foto2.jpg',
        'images/people/6-Meganck-P9.jpg',
        'images/people/foto2.jpg',
        'images/people/foto2.jpg',
        'images/people/foto2.jpg',
        'images/people/foto2.jpg',
        'images/people/foto2.jpg',
        'images/people/foto2.jpg',
        // Add more image URLs as needed
    ];

    function populateGallery() {
        const gallery = document.getElementById('gallery');
        gallery.innerHTML = '';

        const containerWidth = gallery.clientWidth;
        const idealImageWidth = 200; // Adjust this value as needed

        // Calculate the number of images per row
        let numImagesPerRow = Math.floor(containerWidth / idealImageWidth);
        if (numImagesPerRow < 1) numImagesPerRow = 1;

        let rowImages = '';
        let totalWidth = 0; // Total width of images in the row

        for (let i = 0; i < images.length; i++) {
            const img = new Image();
            img.src = images[i];

            // Check if adding the next image exceeds the row width
            if (totalWidth + img.width <= containerWidth) {
                rowImages += `<img src="${images[i]}" class="image" alt="Image ${i + 1}">`;
                totalWidth += img.width;
            } else {
                // Start a new row
                gallery.innerHTML += `<div class="row">${rowImages}</div>`;
                rowImages = `<img src="${images[i]}" class="image" alt="Image ${i + 1}">`;
                totalWidth = img.width;
            }
        }

        // Add the last row
        gallery.innerHTML += `<div class="row">${rowImages}</div>`;
    }

    // Call the function initially and on window resize
    populateGallery();
    window.addEventListener('resize', populateGallery);
});