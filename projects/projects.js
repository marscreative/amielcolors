// Sample projects data
const projects = [
    {
        id: 1,
        title: "Corporate Branding Package",
        description: "Complete branding solution for a tech startup including logo, business cards, and letterheads.",
        category: "branding",
        date: "May 2023",
        client: "Tech Innovations Inc.",
        deliverables: "Logo, Business Cards, Letterhead",
        details: [
            "Created a modern, tech-inspired logo",
            "Developed cohesive brand guidelines",
            "Designed premium business stationery"
        ],
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 2,
        title: "Wedding Invitation Suite",
        description: "Elegant wedding invitation design with matching RSVP cards and envelopes.",
        category: "print",
        date: "April 2023",
        client: "Smith & Johnson Wedding",
        deliverables: "Invitation, RSVP Card, Envelope",
        details: [
            "Custom floral motif design",
            "Premium textured paper selection",
            "Gold foil accent printing"
        ],
        image: "https://images.unsplash.com/photo-1519671482749-fd07be1f5b1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 3,
        title: "Product Packaging Design",
        description: "Eye-catching packaging for a new line of organic skincare products.",
        category: "custom",
        date: "March 2023",
        client: "Nature's Glow Skincare",
        deliverables: "Primary Packaging, Secondary Packaging",
        details: [
            "Eco-friendly material selection",
            "Minimalist design approach",
            "Custom illustration work"
        ],
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id: 4,
        title: "Restaurant Menu Design",
        description: "Modern menu design for a high-end Italian restaurant.",
        category: "print",
        date: "February 2023",
        client: "Bella Cucina",
        deliverables: "Dinner Menu, Wine List, Dessert Menu",
        details: [
            "Italian-inspired typography",
            "Food photography coordination",
            "Leather-bound cover design"
        ],
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 5,
        title: "Event Banner Design",
        description: "Large format banners for a corporate anniversary event.",
        category: "digital",
        date: "January 2023",
        client: "Global Solutions Corp.",
        deliverables: "Stage Backdrop, Welcome Banner, Directional Signs",
        details: [
            "High-resolution vector artwork",
            "Bold, legible typography",
            "Modular design system"
        ],
        image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 6,
        title: "ID Card System",
        description: "Complete employee ID card system with security features.",
        category: "custom",
        date: "December 2022",
        client: "SecureTech Solutions",
        deliverables: "ID Card Design, Database Integration",
        details: [
            "Custom holographic security features",
            "Barcode integration",
            "Database template setup"
        ],
        image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
    }
];

// Load projects
document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = `project-item bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 group animate-fadeInUp`;
        projectElement.dataset.category = project.category;
        
        projectElement.innerHTML = `
            <div class="h-64 overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
            </div>
            <div class="p-6">
                <span class="text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(project.category)}">${capitalizeFirstLetter(project.category)}</span>
                <h3 class="text-xl font-semibold text-gray-800 mb-2 mt-3">${project.title}</h3>
                <p class="text-gray-600 mb-4">${project.description}</p>
                <button class="view-project-btn px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-300" data-id="${project.id}">
                    View Project <i class="fas fa-arrow-right ml-1"></i>
                </button>
            </div>
        `;
        
        projectsContainer.appendChild(projectElement);
    });

    // Filter projects
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-800', 'hover:bg-gray-300');
            });
            this.classList.remove('bg-gray-200', 'text-gray-800', 'hover:bg-gray-300');
            this.classList.add('bg-blue-600', 'text-white');
            
            // Filter projects
            const filter = this.dataset.filter;
            const projectItems = document.querySelectorAll('.project-item');
            
            projectItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Project modal
    const modal = document.getElementById('project-modal');
    const closeModal = document.getElementById('close-modal');
    const viewProjectButtons = document.querySelectorAll('.view-project-btn');
    
    viewProjectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = parseInt(this.dataset.id);
            const project = projects.find(p => p.id === projectId);
            
            if (project) {
                document.getElementById('modal-title').textContent = project.title;
                document.getElementById('modal-category').textContent = capitalizeFirstLetter(project.category);
                document.getElementById('modal-date').textContent = project.date;
                document.getElementById('modal-description').textContent = project.description;
                document.getElementById('modal-client').textContent = project.client;
                document.getElementById('modal-deliverables').textContent = project.deliverables;
                
                const detailsList = document.getElementById('modal-details');
                detailsList.innerHTML = '';
                project.details.forEach(detail => {
                    const li = document.createElement('li');
                    li.textContent = detail;
                    detailsList.appendChild(li);
                });
                
                modal.classList.remove('hidden');
            }
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.classList.add('hidden');
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});

function getCategoryColor(category) {
    switch(category) {
        case 'branding': return 'bg-purple-100 text-purple-800';
        case 'print': return 'bg-blue-100 text-blue-800';
        case 'digital': return 'bg-green-100 text-green-800';
        case 'custom': return 'bg-yellow-100 text-yellow-800';
        default: return 'bg-gray-100 text-gray-800';
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
