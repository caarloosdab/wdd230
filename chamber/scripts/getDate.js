// Get the current year
const currentYear = new Date().getFullYear();
const footerParagraph = document.querySelector("footer p:first-of-type");
footerParagraph.innerHTML = `&copy; ${currentYear} Carlos De Avila - Mexico City`;

// Get the last modified date of the document
const lastModified = document.lastModified;
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last Modification: ${lastModified}`;

// Hamburger menu toggle functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Toggle the 'show' class on the nav element when hamburger is clicked
hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
    // Change hamburger icon to an X
    if (nav.classList.contains('show')) {
        hamburger.textContent = '✖'; // X icon to close
    } else {
        hamburger.textContent = '≡'; // Hamburger icon to open
    }
});