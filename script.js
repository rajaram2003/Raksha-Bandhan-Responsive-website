document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle Navigation Menu (Hamburger)
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Filter Product Cards
    const categoryButtons = document.querySelectorAll('.category-button');
    const productCards = document.querySelectorAll('.product-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Scroll-to-Top Button
    const scrollToTopButton = document.getElementById('scroll-to-top');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) { // Adjust this value as needed
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    // Scroll to top when the button is clicked
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Anime.js Animations
    anime({
        targets: '.hero-content',
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 2000,
        easing: 'easeOutQuad'
    });

    anime({
        targets: '.about',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1500,
        easing: 'easeOutQuad',
        delay: 500
    });

    anime({
        targets: '.offers',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1500,
        easing: 'easeOutQuad',
        delay: 1000
    });

    anime({
        targets: '.contact',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1500,
        easing: 'easeOutQuad',
        delay: 1500
    });
});
