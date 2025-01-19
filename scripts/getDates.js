// Toggle Dark Mode
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