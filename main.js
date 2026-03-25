/**
 * SecurNet - Dynamic Global Scripts
 * Maneja efectos de scroll y comportamientos interactivos comunes.
 */

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    
    // Dynamic Header Scroll Effect
    const handleScroll = () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };

    // Initialize state
    handleScroll();

    // Listen for scroll
    window.addEventListener('scroll', handleScroll);
});
