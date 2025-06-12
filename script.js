document.addEventListener('DOMContentLoaded', function() {
    // Show main content after loader
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
            document.getElementById("main-content").style.display = "block";
            document.getElementById("main-content").style.opacity = "1";
        }, 500);
    }, 3000);

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section ID
            const targetSection = this.getAttribute('data-section');
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            
            // Show the target section with animation
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    setTimeout(() => {
                        section.classList.add('active');
                    }, 10);
                }
            });
            
            // Close mobile menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Restore scroll
            document.body.style.overflow = '';
        });
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scrolling when menu is open
        if (this.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // One project tab open at a time
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const title = card.querySelector('.project-title');
        title.addEventListener('click', () => {
            projectCards.forEach(c => {
                if (c !== card) c.classList.remove('active');
            });
            card.classList.toggle('active');
        });
    });

    // About section animation
    const aboutSection = document.querySelector('#about');
    const aboutObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('visible');
                aboutObserver.unobserve(entry.target); // Animate once
            }
        });
    }, { threshold: 0.4 });

    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }
});
