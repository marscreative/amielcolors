// Mobile menu toggle with smooth animation
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                // Show menu with animation
                mobileMenu.classList.remove('hidden');
                mobileMenuButton.classList.remove('collapsed');
            } else {
                // Hide menu with animation
                mobileMenu.classList.add('hidden');
                mobileMenuButton.classList.add('collapsed');
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.classList.add('collapsed');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.classList.add('collapsed');
            }
        });
        
        // Initialize collapsed state
        mobileMenuButton.classList.add('collapsed');
    }
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load projects preview
document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3.gap-8');
    
    if (projectsContainer) {
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
        
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 group';
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
            projectsContainer.appendChild(projectElement);
        });
    }
});

function getRandomColor() {
    const colors = ['purple', 'blue', 'green', 'yellow', 'indigo', 'pink'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

function SendMail() {
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS SDK not loaded.');
        alert("EmailJS SDK not loaded. Please check your internet connection and try again.");
        return;
    }

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        service: document.getElementById("service").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_5pjnn8m", "template_vyv0zvk", params)
    .then(function(response) {
        console.log('EmailJS response:', response);
        // Remove alert and redirect to confirmation page
        // alert("Message sent successfully! Thank you for contacting us.");
        window.location.href = "message-sent.html";
    })
    .catch(function(error) {
        console.error('EmailJS error:', error);
        alert("Failed to send message. Please try again later.");
    });
}
