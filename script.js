// Portfolio Data - Update this with your actual information
const portfolioData = {
    summary: "Experienced software developer with a passion for creating efficient and scalable solutions. Skilled in modern web technologies and committed to writing clean, maintainable code.",
    
    skills: [
        "JavaScript", "Python", "React", "Node.js", "HTML/CSS",
        "MongoDB", "SQL", "Git", "AWS", "Docker"
    ],
    
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "Your University",
            year: "2020-2024",
            details: "Relevant coursework and achievements"
        }
    ],
    
    projects: [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration. Built with React, Node.js, and MongoDB.",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
            link: "#",
            icon: "🛒"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Features include project boards, task assignments, and progress tracking.",
            technologies: ["React", "Firebase", "Material-UI", "WebSockets"],
            link: "#",
            icon: "📋"
        },
        {
            title: "Weather Dashboard",
            description: "A responsive weather dashboard that displays current conditions and forecasts for multiple locations. Includes interactive maps, weather charts, and location-based recommendations.",
            technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
            link: "#",
            icon: "🌤️"
        }
    ],
    
    contact: {
        email: "ashish.vandan@example.com",
        linkedin: "https://linkedin.com/in/ashishvandan",
        github: "https://github.com/ashishvandan",
        phone: "+1 (555) 123-4567"
    }
};

// DOM Elements
const contactBtn = document.getElementById('contactBtn');
const emailBtn = document.getElementById('emailBtn');
const skillsContainer = document.getElementById('skillsContainer');
const educationContainer = document.getElementById('educationContainer');
const projectsContainer = document.getElementById('projectsContainer');
const contactContainer = document.getElementById('contactContainer');
const summaryElement = document.getElementById('summary');
const profileImage = document.getElementById('profileImage');

// Initialize Portfolio
function initPortfolio() {
    // Populate summary
    if (summaryElement) {
        summaryElement.textContent = portfolioData.summary;
    }
    
    // Populate skills
    if (skillsContainer) {
        skillsContainer.innerHTML = portfolioData.skills.map(skill => 
            `<div class="skill-item">${skill}</div>`
        ).join('');
    }
    
    // Populate education
    if (educationContainer) {
        educationContainer.innerHTML = portfolioData.education.map(edu => `
            <div class="education-item">
                <h4>${edu.degree}</h4>
                <p><strong>${edu.institution}</strong></p>
                <p>${edu.year}</p>
                ${edu.details ? `<p>${edu.details}</p>` : ''}
            </div>
        `).join('');
    }
    
    // Populate projects
    if (projectsContainer) {
        projectsContainer.innerHTML = portfolioData.projects.map(project => `
            <div class="project-card">
                <div class="project-image">${project.icon}</div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => 
                            `<span class="tech-tag">${tech}</span>`
                        ).join('')}
                    </div>
                    <a href="${project.link}" class="project-link" target="_blank">View Project →</a>
                </div>
            </div>
        `).join('');
    }
    
    // Populate contact info
    if (contactContainer) {
        contactContainer.innerHTML = `
            <div class="contact-item">
                <span>📧</span>
                <a href="mailto:${portfolioData.contact.email}">${portfolioData.contact.email}</a>
            </div>
            <div class="contact-item">
                <span>💼</span>
                <a href="${portfolioData.contact.linkedin}" target="_blank">LinkedIn Profile</a>
            </div>
            <div class="contact-item">
                <span>💻</span>
                <a href="${portfolioData.contact.github}" target="_blank">GitHub Profile</a>
            </div>
            <div class="contact-item">
                <span>📱</span>
                <a href="tel:${portfolioData.contact.phone}">${portfolioData.contact.phone}</a>
            </div>
        `;
    }
    
    // Handle profile image error (if image not found)
    if (profileImage) {
        profileImage.addEventListener('error', function() {
            this.style.display = 'none';
            const container = this.parentElement;
            if (container) {
                container.innerHTML = '<div style="width: 200px; height: 200px; border-radius: 50%; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 4rem;">👤</div>';
            }
        });
    }
}

// Button Click Event Handlers
if (contactBtn) {
    contactBtn.addEventListener('click', function() {
        // Smooth scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Add visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
}

if (emailBtn) {
    emailBtn.addEventListener('click', function() {
        // Open email client
        window.location.href = `mailto:${portfolioData.contact.email}?subject=Portfolio Inquiry`;
        
        // Add visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
document.addEventListener('DOMContentLoaded', function() {
    initPortfolio();
    
    // Add animation to project cards
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }, 100);
});

// Add active state to navigation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

