const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const sidebar = document.getElementById('sidebar');

// Open sidebar when menu button is clicked
menuButton.addEventListener('click', () => {
    sidebar.classList.add('active');
    menuButton.style.display = 'none';  // Hide menu button
});

// Close sidebar when close button is clicked
closeButton.addEventListener('click', () => {
    sidebar.classList.remove('active');
    menuButton.style.display = 'block';  // Show menu button
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && event.target !== menuButton) {
        sidebar.classList.remove('active');
        menuButton.style.display = 'block';  // Show menu button again
    }
});

