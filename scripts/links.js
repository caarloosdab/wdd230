// Step 1: Set the base URL and links URL
const baseURL = "https://caarloosdab.github.io/wdd230/"; // Replace with your GitHub Pages URL
const linksURL = "https://caarloosdab.github.io/wdd230/data/links.json"; // URL to the JSON data

// Step 2: Asynchronous function to fetch the links data
async function getLinks() {
    try {
      const response = await fetch(linksURL);
      const data = await response.json();
      console.log(data); // Log the data to ensure it's correct
  
      // Check if weeks is an array before passing it to displayLinks
      if (Array.isArray(data.weeks)) {
        displayLinks(data.weeks); // Call displayLinks with weeks data
      } else {
        console.error("The 'weeks' property is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching the links:", error);
    }
  }

// Step 3: Create the displayLinks function to process the data and display it in HTML
function displayLinks(weeks) {
  // Get the container where the links will be displayed
  const linksContainer = document.querySelector('.container .card ul'); // Adjust the selector as needed
  
  // Loop through each week and create the list of links dynamically
  weeks.forEach(week => {
    // Create a new list item for each week
    const weekItem = document.createElement('li');
    const weekTitle = document.createElement('a');
    weekTitle.textContent = week.week + ": "; // Display the week number/title
    weekItem.appendChild(weekTitle);

    // Loop through each link in the week and create a list item for each link
    week.links.forEach(link => {
      const linkItem = document.createElement('a');
      const linkElement = document.createElement('a');
      linkElement.href = link.url; // Use the base URL and link URL
      linkElement.textContent = link.title + "  |  "; // Set the link title
      linkItem.appendChild(linkElement);
      weekItem.appendChild(linkItem);
    });

    // Append the weekItem to the linksContainer
    linksContainer.appendChild(weekItem);
  });
}

// Step 5: Call getLinks() to fetch and display the links
getLinks();
