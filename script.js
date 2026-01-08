// ========== Drawer Toggle Functionality ==========
function toggleDrawer(element) {
    const header = element;
    const drawer = header.nextElementSibling;

    // Close all other drawers
    document.querySelectorAll('.experience-drawer, .project-drawer').forEach(otherDrawer => {
        if (otherDrawer !== drawer) {
            otherDrawer.classList.remove('active');
            otherDrawer.previousElementSibling.classList.remove('active');
        }
    });

    // Toggle current drawer
    header.classList.toggle('active');
    drawer.classList.toggle('active');
}

// ========== Smooth Scrolling for Navigation Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== Active Navigation Link Highlighting ==========
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========== Add active class styling for nav links ==========
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #b0b0b0;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ========== Close drawer when clicking outside ==========
document.addEventListener('click', (e) => {
    
    if (!e.target.closest('.experience-header') && 
        !e.target.closest('.project-header') &&
        !e.target.closest('.experience-drawer') &&
        !e.target.closest('.project-drawer')) {
        
    }
});

// ========== Animate elements on scroll ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.experience-card, .project-card, .education-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add fade-in animation
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(animationStyle);

// ========== Mobile Menu Toggle  ==========
function initMobileMenu() {
    const menuButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}


initMobileMenu();

// ========== Download CV Handler ==========
document.querySelector('.download-btn')?.addEventListener('click', function(e) {
    console.log('CV download initiated');
});

// ========== Page Load Animation ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initial body opacity
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
});
