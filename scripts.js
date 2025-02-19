// This file contains JavaScript code for interactive features of the website.
// It includes functions for handling gallery image display, navigation interactions, and form submissions for contact information.

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle image gallery display
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            modal.appendChild(modalImg);
            document.body.appendChild(modal);
            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        });
    });

    // Function to handle navigation interactions
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Function to handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});