// Mobile menu toggle with smooth animation
// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the mobile menu button element by its ID
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    // Get the mobile menu container element by its ID
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Check if both elements exist on the page
    if (mobileMenuButton && mobileMenu) {
        // Add click event listener to the mobile menu button
        mobileMenuButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default button behavior
            e.stopPropagation(); // Stop event from bubbling up
            
            // Check if the mobile menu is currently hidden
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                // Show menu with animation by removing 'hidden' class
                mobileMenu.classList.remove('hidden');
                // Remove 'collapsed' class from button to indicate open state
                mobileMenuButton.classList.remove('collapsed');
            } else {
                // Hide menu with animation by adding 'hidden' class
                mobileMenu.classList.add('hidden');
                // Add 'collapsed' class to button to indicate closed state
                mobileMenuButton.classList.add('collapsed');
            }
        });
        
        // Close mobile menu when clicking on any link inside the menu
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Hide the menu and mark button as collapsed
                mobileMenu.classList.add('hidden');
                mobileMenuButton.classList.add('collapsed');
            });
        });
        
        // Close mobile menu when clicking outside the menu and button
        document.addEventListener('click', function(e) {
            // If the click target is not inside the button or menu
            if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                // Hide the menu and mark button as collapsed
                mobileMenu.classList.add('hidden');
                mobileMenuButton.classList.add('collapsed');
            }
        });
        
        // Initialize the button state as collapsed on page load
        mobileMenuButton.classList.add('collapsed');
    }
});

// Smooth scrolling for all anchor links with href starting with '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default jump to anchor
        // Scroll smoothly to the target element referenced by href
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load projects preview dynamically on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the container where project cards will be added
    const projectsContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3.gap-8');
    
    if (projectsContainer) {
        // Array of project objects with title, description, and category
        const projects = [
            {
                title: "Corporate Branding",
                description: "Complete branding package for a tech startup",
                category: "Branding"
            },
            {
                title: "Event Invitations",
                description: "Elegant wedding invitation designs",
                category: "Print"
            },
            {
                title: "Product Packaging",
                description: "Eye-catching packaging for a new product line",
                category: "Packaging"
            }
        ];
        
        // For each project, create a card element and append to container
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            // Set styling classes for the card
            projectElement.className = 'bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 group';
            // Set inner HTML with dynamic colors and project info
            projectElement.innerHTML = `
                <div class="h-48 bg-gradient-to-r from-${getRandomColor()}-400 to-${getRandomColor()}-400 flex items-center justify-center">
                    <i class="fas fa-project-diagram text-white text-6xl group-hover:rotate-12 transition duration-300"></i>
                </div>
                <div class="p-6">
                    <span class="text-xs font-semibold text-${getRandomColor()}-600">${project.category}</span>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">${project.title}</h3>
                    <p class="text-gray-600">${project.description}</p>
                    <a href="#" class="mt-4 inline-block text-${getRandomColor()}-600 hover:text-${getRandomColor()}-700 font-medium transition duration-300">View Project →</a>
                </div>
            `;
            // Append the project card to the container
            projectsContainer.appendChild(projectElement);
        });
    }
});

// Function to get a random color name from predefined list
function getRandomColor() {
    const colors = ['purple', 'blue', 'green', 'yellow', 'indigo', 'pink'];
    // Return a random color from the array
    return colors[Math.floor(Math.random() * colors.length)];
}

// Intersection Observer to add animation class when elements scroll into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // If the element is visible in viewport
        if (entry.isIntersecting) {
            // Add animation class to trigger fade-in-up effect
            entry.target.classList.add('animate-fadeInUp');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of element is visible
});

// Observe all elements with class 'animate-on-scroll'
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Function to send email using EmailJS service
function SendMail() {
    // Check if EmailJS SDK is loaded
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS SDK not loaded.');
        alert("EmailJS SDK not loaded. Please check your internet connection and try again.");
        return; // Exit if SDK not available
    }

    // Collect form input values into params object
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        service: document.getElementById("service").value,
        message: document.getElementById("message").value
    };

    // Send email using EmailJS with service ID, template ID, and params
    emailjs.send("service_5pjnn8m", "template_vyv0zvk", params)
    .then(function(response) {
        console.log('EmailJS response:', response);
        // Redirect to message sent confirmation page on success
        window.location.href = "../message-sent.html";
    })
    .catch(function(error) {
        console.error('EmailJS error:', error);
        alert("Failed to send message. Please try again later.");
    });
}

// Disable text selection and copying but keep right-click enabled

// Prevent copy event to disable copying text
document.addEventListener('copy', function(e) {
    // Remove e.preventDefault() to allow copying
    // e.preventDefault(); // Prevent the default copy action
    alert('Copying text is disabled on this website.'); // Optional alert to inform user
});

// Prevent double-click text selection to avoid selecting text
document.addEventListener('dblclick', function(e) {
    e.preventDefault(); // Prevent text selection on double click
});

// Prevent selection start (e.g., dragging to select text)
document.addEventListener('selectstart', function(e) {
    e.preventDefault(); // Prevent text selection start
});
