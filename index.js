
// Function to open the menu
function openMenu() {
    const menu = document.getElementById('head-section'); // Adjust the selector as needed
    const barMenuBtn = document.querySelector('.bar-menu-btn');
    const barCloseBtn = document.querySelector('.bar-close-btn');
    
    if (menu && barMenuBtn && barCloseBtn) {
        menu.style.visibility = 'visible';
        barMenuBtn.style.opacity = 0;
        barCloseBtn.style.visibility = 'visible';
    } else {
        console.error('One or more elements not found');
    }
}

// Function to close the menu
function closeMenu() {
    const menu = document.getElementById('head-section'); // Adjust the selector as needed
    const barMenuBtn = document.querySelector('.bar-menu-btn');
    const barCloseBtn = document.querySelector('.bar-close-btn');
    
    if (menu && barMenuBtn && barCloseBtn) {
        menu.style.visibility = 'hidden';
        barMenuBtn.style.opacity =1;
        barCloseBtn.style.visibility = 'hidden';
    } else {
        console.error('One or more elements not found');
    }
}

// Ensure that the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.bar-menu-btn');
    const closeButton = document.querySelector('.bar-close-btn');

    if (menuButton) {
        menuButton.addEventListener('click', openMenu);
    }

    if (closeButton) {
        closeButton.addEventListener('click', closeMenu);
    }
});




function myMessage(){
    alert ("This form is only for show, If you need I will built for you");
}

