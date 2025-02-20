// spotlightMembers.js

// Function to spotlight chamber members
async function spotlightChamberMembers() {
    const memberContainer = document.getElementById("chamber-members");

    try {
        // Fetch the JSON data for chamber members
        const response = await fetch('data/chamberMembers.json');
        const data = await response.json();

        // Filter the members for Gold and Silver levels
        const spotlightMembers = data.members.filter(member => member.level === "Gold" || member.level === "Silver");

        // Display up to 3 spotlight members
        spotlightMembers.slice(0, 3).forEach(member => {
            // Create a card for each spotlighted member
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <h3>${member.name}</h3>
                <p><strong>Level:</strong> ${member.level}</p>
                <p>${member.description}</p>
            `;

            // Append the member card to the container
            memberContainer.appendChild(memberCard);
        });
    } catch (error) {
        console.error('Error fetching chamber member data:', error);
        memberContainer.innerHTML = "<p>Unable to load member data at this time.</p>";
    }
}

// Call the function to load and display the spotlight members
spotlightChamberMembers();
