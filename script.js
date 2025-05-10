// Smooth scrolling to the footer for "Contact Us"
document.querySelector('.nav-button[href="#contact"]').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Navigation to "What We Do" page
document.querySelector('.nav-button[href="services.html"]').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    window.location.href = 'services.html'; // Navigate to services page
});
function login() {
    alert('Sign In functionality triggered!');
}
// Select all service cards
const services = document.querySelectorAll('.service');

// Function to check if an element is in the viewport
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
};

// Add scroll event listener
window.addEventListener('scroll', () => {
    services.forEach((service) => {
        if (isInViewport(service)) {
            service.classList.add('in-view'); // Trigger slideIn animation
            service.classList.remove('out-of-view');
        } else {
            service.classList.remove('in-view');
            service.classList.add('out-of-view'); // Trigger slideOut animation
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("booking-modal");
    const bookLinks = document.querySelectorAll(".book-button");
    const closeButton = document.querySelector(".close-button");

    bookLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Stop default scrolling behavior
            modal.style.display = "flex"; // Show modal
        });
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none"; // Hide modal
    });

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
