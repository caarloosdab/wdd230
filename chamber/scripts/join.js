document.getElementById('timestamp').value = new Date().toISOString();

document.addEventListener('DOMContentLoaded', () => {
    const membershipButtons = document.querySelectorAll('.membership-btn');
    const formContainer = document.getElementById('formContainer');
    const membershipLevelInput = document.getElementById('membershipLevel');
    const benefitDescription = document.getElementById('benefitDescription');

    membershipButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Show the form container with animation
            formContainer.style.display = 'grid';
            setTimeout(() => {
                formContainer.style.opacity = '1';
            }, 50);

            // Set the membership level in the hidden field
            const membershipLevel = button.getAttribute('data-membership');
            membershipLevelInput.value = membershipLevel;

            // Update the benefits section
            const cost = button.getAttribute('data-cost');
            const benefits = button.getAttribute('data-benefits');
            benefitDescription.innerHTML = `<strong>Cost:</strong> ${cost}<br><strong>Benefits:</strong> ${benefits}`;
        });
    });
});
