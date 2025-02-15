//Nav-Bar 

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

//Hero carousel

const track = document.querySelector('.carousel-track');
        const items = document.querySelectorAll('.carousel-item');
        const dots = document.querySelectorAll('.nav-dot');
        const prevArrow = document.querySelector('.arrow-prev');
        const nextArrow = document.querySelector('.arrow-next');
        let currentIndex = 0;
        let autoPlay = true;
        let interval = setInterval(nextSlide, 5000);

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            items.forEach(item => item.classList.remove('active'));
            items[currentIndex].classList.add('active');
            
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentIndex].classList.add('active');
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        }

        prevArrow.addEventListener('click', () => {
            prevSlide();
            resetAutoplay();
        });

        nextArrow.addEventListener('click', () => {
            nextSlide();
            resetAutoplay();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
                resetAutoplay();
            });
        });

        function resetAutoplay() {
            clearInterval(interval);
            interval = setInterval(nextSlide, 5000);
        }

        // Pause on hover
        track.parentElement.addEventListener('mouseenter', () => clearInterval(interval));
        track.parentElement.addEventListener('mouseleave', resetAutoplay);