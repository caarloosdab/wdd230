// meetGreetBanner.js

// Function to display the banner on Monday, Tuesday, and Wednesday
function showMeetGreetBanner() {
    const bannerContainer = document.getElementById("meet-greet-banner");
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Check if the current day is Monday (1), Tuesday (2), or Wednesday (3)
    if (currentDay === 1 || currentDay === 2 || currentDay === 3) {
        // Create the banner content
        const banner = document.createElement("div");
        banner.innerHTML = `
            <div class="banner-content">
                <p><strong>Meet & Greet Event:</strong> Join us this Wednesday at 7:00 PM for the Chamber of Commerce meet and greet!</p>
                <button id="close-banner" aria-label="Close banner">&times;</button>
            </div>
        `;

        // Apply styles to make the banner apparent and fitting
        banner.style.backgroundColor = "#ffd60a"; // Green background
        banner.style.color = "white";
        banner.style.padding = "15px";
        banner.style.textAlign = "center";
        banner.style.position = "relative"; // Required for the close button

        // Add the banner to the container
        bannerContainer.appendChild(banner);

        // Add event listener to close the banner
        document.getElementById("close-banner").addEventListener("click", function () {
            bannerContainer.style.display = "none";
        });
    }
}

// Call the function to check and show the banner
showMeetGreetBanner();
