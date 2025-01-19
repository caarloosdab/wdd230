// Get the current year
const currentYear = new Date().getFullYear();

// Get the element where the copyright year will be displayed
const footerParagraph = document.querySelector("footer p:first-of-type");
footerParagraph.innerHTML = `&copy; ${currentYear} Carlos De Avila - Mexico City`;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Display the last modified date in the second paragraph of the footer
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last Modification: ${lastModified}`;



const darkModeToggle = document.getElementById('darkModeToggle');
const main = document.querySelector('main');

// When the dark mode toggle is clicked
darkModeToggle.addEventListener('click', () => {
    main.classList.toggle('dark-mode');
    // Change the icon between sun and moon
    if (main.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '🌞'; // Sun icon
    } else {
        darkModeToggle.textContent = '🌙'; // Moon icon
    }
});

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