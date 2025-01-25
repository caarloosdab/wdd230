document.addEventListener("DOMContentLoaded", () => {
    const visitCounterElement = document.getElementById("visitCounter");

    if (visitCounterElement) {
        // Get the current number of visits from localStorage
        let visits = Number(localStorage.getItem("pageVisits")) || 0;

        // Increment the visits
        visits += 1;

        // Save the updated count to localStorage
        localStorage.setItem("pageVisits", visits);

        // Display the updated visits count on the page
        visitCounterElement.textContent = visits;
    }
});