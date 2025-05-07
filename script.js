document.addEventListener('DOMContentLoaded', function() {
    // Button click action
    const button = document.getElementById('interactive-button');
    button.addEventListener('click', function() {
        button.style.backgroundColor = '#ffc107';  // Change color on click
        button.innerHTML = 'You Clicked Me!';  // Change button text
    });

    // Hover effect for gallery images
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });

    // Keypress detection
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            alert('You pressed Enter!');
        }
    });

    // Double-click or long press secret action
    button.addEventListener('dblclick', function() {
        alert('Secret Double-Click Action!');
    });

    let longPressTimer;
    button.addEventListener('mousedown', function() {
        longPressTimer = setTimeout(function() {
            alert('Long Press Action Triggered!');
        }, 1000); // Trigger after 1 second
    });
    button.addEventListener('mouseup', function() {
        clearTimeout(longPressTimer);
    });

    // Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            tabContents.forEach(content => {
                if (content.id === `tab${tabId}-content`) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });

    // Accordion
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        });
    });

    // Form validation
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!name || !email || !password) {
            alert('Please fill out all fields.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        successMessage.style.display = 'block';
        form.reset();
    });

    // Real-time feedback for password
    passwordInput.addEventListener('input', function() {
        const feedback = document.createElement('div');
        feedback.textContent = (passwordInput.value.length < 8) ? 'Password too short!' : 'Password length is fine!';
        feedback.style.color = (passwordInput.value.length < 8) ? 'red' : 'green';
        document.body.appendChild(feedback);
    });
});
