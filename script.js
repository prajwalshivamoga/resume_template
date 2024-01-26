document.addEventListener('DOMContentLoaded', (event) => {
    const currentDateElement = document.getElementById('currentDate');
    const today = new Date();
    const formattedDate = today.toDateString();  // Format: "Thu Jan 26 2023"
    currentDateElement.textContent += formattedDate;
});
