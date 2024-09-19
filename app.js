// Custom Animations and Interactivity for Anime World

// Hero Section Animation using Anime.js
anime({
    targets: '.hero h2',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo'
});

// Animation for all show cards to fade in with a delay
anime({
    targets: '.scale-effect',
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1000,
    delay: anime.stagger(200), // stagger animation for each card
    easing: 'easeOutExpo'
});

// Scroll-to-top button functionality
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.remove('hidden');
        scrollToTopButton.classList.add('fade-in');
    } else {
        scrollToTopButton.classList.add('hidden');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Additional JavaScript for future interactivity or features can go here...
