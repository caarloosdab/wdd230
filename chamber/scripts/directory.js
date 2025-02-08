// Fetch the JSON data
fetch('data/directory.json')
    .then(response => response.json())
    .then(data => {
        const members = data.companies;
        displayMembers(members, 'grid');  // Display as grid initially
    })
    .catch(error => console.error('Error fetching JSON:', error));

// Function to generate member cards dynamically
function displayMembers(members, viewType) {
    const membersContainer = document.getElementById('membersContainer');
    membersContainer.innerHTML = ''; // Clear previous content

    membersContainer.className = viewType === 'grid' ? 'members grid-view' : 'members list-view';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        // Create a string for the services offered
        const servicesList = member.additional_info.services.join(", ");

        const memberContent = `
            <img src="images/${member.icon}" alt="${member.name} Logo">
            <div class="member-info">
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.name}</a></p>
                <p><strong>Membership Level:</strong> ${member.membership_level}</p>
                <p><strong>Founded:</strong> ${member.additional_info.founded}</p>
                <p><strong>CEO:</strong> ${member.additional_info.CEO}</p>
                <p><strong>Services:</strong> ${servicesList}</p>
            </div>
        `;

        memberCard.innerHTML = memberContent;
        membersContainer.appendChild(memberCard);
    });
}

// Toggle view buttons
const gridViewBtn = document.getElementById('gridViewBtn');
const listViewBtn = document.getElementById('listViewBtn');

gridViewBtn.addEventListener('click', () => {
    fetch('data/directory.json')
        .then(response => response.json())
        .then(data => displayMembers(data.companies, 'grid'));
});

listViewBtn.addEventListener('click', () => {
    fetch('data/directory.json')
        .then(response => response.json())
        .then(data => displayMembers(data.companies, 'list'));
});
