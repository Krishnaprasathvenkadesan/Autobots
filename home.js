//Nav-Bar JS

document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const hamburgerBtn = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuBtn = document.querySelector('.close-menu');

    // Debug check - add this temporarily to verify elements are found
    console.log('Hamburger:', hamburgerBtn);
    console.log('Mobile Menu:', mobileMenu);
    console.log('Close Button:', closeMenuBtn);

    // Hamburger click event
    hamburgerBtn.addEventListener('click', () => {
        console.log('Hamburger clicked'); // Debug log
        mobileMenu.classList.toggle('active');
    });

    // Close button click event
    closeMenuBtn.addEventListener('click', () => {
        console.log('Close button clicked'); // Debug log
        mobileMenu.classList.remove('active');
    });

    // Mobile dropdowns
    const dropdownTriggers = document.querySelectorAll('.mobile-nav-item');
    dropdownTriggers.forEach(trigger => {
        if (trigger.nextElementSibling?.classList.contains('mobile-dropdown')) {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                trigger.nextElementSibling.classList.toggle('active');
            });
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });
});