
// Initialize the boolean variable
let rowFull = false;

// Function to add an image to the current row
function addImageToRow(imageSrc) {
    // Create an image element
    const image = document.createElement("img");
    image.src = imageSrc;

    // Get the current row (or create a new one)
    const currentRow = getCurrentRow();
    currentRow.appendChild(image);

    // Check if the row is full
    if (currentRow.children.length >= 3) {
        rowFull = true;
    }
}

// Function to get the current row (or create a new one)
function getCurrentRow() {
    const galleryContainer = document.querySelector(".gallery-container");
    const rows = galleryContainer.querySelectorAll(".gallery-row");

    if (rows.length === 0 || rowFull) {
        // Create a new row
        const newRow = document.createElement("div");
        newRow.classList.add("gallery-row");
        galleryContainer.appendChild(newRow);
        rowFull = false; // Reset the flag
        return newRow;
    } else {
        // Use the last row
        return rows[rows.length - 1];
    }
}

// Example usage:
addImageToRow("../images/architecture/vrijwerk7.jpg");
addImageToRow("./images/square/RIK7396-1.jpg");
addImageToRow("../images/people/6-Meganck-P9.jpg");
addImageToRow("../images/people/6-Meganck-P9.jpg");
addImageToRow("../images/people/6-Meganck-P9.jpg");
addImageToRow("../images/people/6-Meganck-P9.jpg");
// Repeat for other images
