document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuContainer = document.querySelector('.menu-container');
    const fixedMenu = document.querySelector('.fixed-menu');
    const menuLinks = document.querySelectorAll('.menu-container a');

    // Toggle menu visibility when the hamburger icon is clicked
    if (mobileMenu && menuContainer) {
        mobileMenu.addEventListener('click', function() {
            menuContainer.classList.toggle('active');
        });
    }

    // Close the menu when a menu link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuContainer.classList.remove('active');
        });
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!menuContainer.contains(event.target) && !mobileMenu.contains(event.target)) {
            menuContainer.classList.remove('active');
        }
    });

    // Make the fixed menu transparent when scrolling
    document.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            fixedMenu.classList.add('transparent-menu');
        } else {
            fixedMenu.classList.remove('transparent-menu');
        }
    });
});





