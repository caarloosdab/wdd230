// Get the current year and display it in the footer
const currentYear = new Date().getFullYear();
const footerParagraph = document.querySelector("footer p:first-of-type");
if (footerParagraph) {
    footerParagraph.innerHTML = `&copy; ${currentYear} Carlos De Avila - Mexico City`;
}

// Get the last modified date of the document and display it
const lastModified = document.lastModified;
const lastModifiedParagraph = document.getElementById("lastModified");
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modification: ${lastModified}`;
}

// Hamburger menu toggle functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Toggle the 'show' class on the nav element when the hamburger is clicked
if (hamburger) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
        // Change hamburger icon to an X
        if (nav.classList.contains('show')) {
            hamburger.textContent = '✖'; // X icon to close
        } else {
            hamburger.textContent = '≡'; // Hamburger icon to open
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const visitMessageElement = document.getElementById("visitMessage");
    if (visitMessageElement) {
        const visitDateKey = "lastVisitDate";

        // Handle visit counter with localStorage and message display
        const lastVisitDate = localStorage.getItem(visitDateKey);
        const currentDate = Date.now();

        if (lastVisitDate) {
            const timeDifference = currentDate - lastVisitDate;
            const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

            if (daysDifference < 1) {
                visitMessageElement.textContent = "Back so soon! Awesome!";
            } else {
                const dayText = daysDifference === 1 ? "day" : "days";
                visitMessageElement.textContent = `You last visited ${daysDifference} ${dayText} ago.`;
            }
        } else {
            visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
        }

        // Store current visit date in localStorage
        localStorage.setItem(visitDateKey, currentDate);
    }

    // Lazy load images (class name is 'lazy-load')
    const lazyImages = document.querySelectorAll("img.lazy-load");

    const lazyLoad = () => {
        lazyImages.forEach((image) => {
            if (image.getBoundingClientRect().top < window.innerHeight) {
                image.src = image.dataset.src;
                image.classList.remove("lazy-load");
            }
        });
    };

    // Load images when scrolling
    window.addEventListener("scroll", lazyLoad);
    lazyLoad(); // Initial load check in case images are already in view
});