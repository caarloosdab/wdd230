// Step 1: Set the base URL and links URL
const baseURL = "https://caarloosdab.github.io/wdd230/"; // Replace with your GitHub Pages URL
const linksURL = "https://caarloosdab.github.io/wdd230/data/links.json"; // URL to the JSON data

// Step 2: Asynchronous function to fetch the links data
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    // Step 4: Call the displayLinks function to process and display the data
    displayLinks(data);
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
    const weekTitle = document.createElement('p');
    weekTitle.textContent = week.week; // Display the week number/title
    weekItem.appendChild(weekTitle);

    // Loop through each link in the week and create a list item for each link
    week.links.forEach(link => {
      const linkItem = document.createElement('p');
      const linkElement = document.createElement('a');
      linkElement.href = baseURL + link.url; // Use the base URL and link URL
      linkElement.textContent = link.title; // Set the link title
      linkItem.appendChild(linkElement);
      weekItem.appendChild(linkItem);
    });

    // Append the weekItem to the linksContainer
    linksContainer.appendChild(weekItem);
  });
}

// Step 5: Call getLinks() to fetch and display the links
getLinks();
