const track = document.getElementById("image-track");
// Function to position the images initially
function positionImages() {
    const nextPercentage = parseFloat(track.dataset.percentage) || 0;

    for (const image of track.getElementsByClassName("image")) {
        const imageCenter = (image.offsetLeft + image.offsetWidth / 2) / window.innerWidth * 100;
        const centerDelta = imageCenter - 50; // Offset from the center
        let adjustedPercentage = nextPercentage + centerDelta;
        adjustedPercentage = Math.max(Math.min(adjustedPercentage, 0), -100); // Clamp within [-100, 0]
        image.style.objectPosition = `${100 + adjustedPercentage}% center`;
    }
}

// Call the function to position images when the DOM content is loaded
document.addEventListener("DOMContentLoaded", positionImages);
const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 600, fill: "forwards" });

    for(const image of track.getElementsByClassName("image")) {
        const imageCenter = (image.offsetLeft + image.offsetWidth / 2) / window.innerWidth * 100;
        const centerDelta = imageCenter - 50; // Offset from the center
        let adjustedPercentage = nextPercentage + centerDelta;
        adjustedPercentage = Math.max(Math.min(adjustedPercentage, 0), -100);
        image.animate({
            objectPosition: `${100 + adjustedPercentage}% center`
        }, { duration: 600, fill: "forwards" });
    }
}
const handleOnScroll = e => {
    const scrollDelta = e.deltaY;
    const maxDelta = window.innerWidth / 2;
    const currentPercentage = parseFloat(track.dataset.percentage) || 0;

    const nextPercentageUnconstrained = currentPercentage + (scrollDelta*0.5 / maxDelta) * 100;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 600, fill: "forwards" });

    for (const image of track.getElementsByClassName("image")) {
        const imageCenter = (image.offsetLeft + image.offsetWidth / 2) / window.innerWidth * 100;
        const centerDelta = imageCenter - 50; // Offset from the center
        let adjustedPercentage = nextPercentage + centerDelta;
        adjustedPercentage = Math.max(Math.min(adjustedPercentage, 0), -100); // Clamp within [-100, 0]
        image.animate({
            objectPosition: `${100 + adjustedPercentage}% center`
        }, { duration: 600, fill: "forwards" });
    }

}

// Attach scroll event listener to the document
document.addEventListener('wheel', handleOnScroll);

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);