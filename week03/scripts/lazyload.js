const currentYear = new Date().getFullYear();

// Get the element where the copyright year will be displayed
const footerParagraph = document.querySelector("footer p:first-of-type");
footerParagraph.innerHTML = `&copy; ${currentYear} Carlos De Avila - Mexico City`;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Display the last modified date in the second paragraph of the footer
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last Modification: ${lastModified}`;