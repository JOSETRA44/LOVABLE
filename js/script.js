document.addEventListener('DOMContentLoaded', () => {
    // Initial Verification
    if (typeof portfolioData === 'undefined') {
        console.error('Data not loaded');
        return;
    }

    // Initialize Feather Icons
    feather.replace();

    // Render Content
    renderProfile(portfolioData.profile);
    renderServices(portfolioData.services);
    renderSkills(portfolioData.skills);
    renderProjects(portfolioData.projects);
    renderExperience(portfolioData.experience);
    renderTestimonials(portfolioData.testimonials);
    renderFooter(portfolioData.profile);

    // Initialize UI Features
    initTheme();
    initMobileMenu();
    initScrollAnimations();
});

/* --- Rendering Functions --- */

function renderProfile(profile) {
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-role').textContent = profile.role;
    document.getElementById('profile-bio').textContent = profile.bio;

    // Contact Section Socials
    const contactSocials = document.getElementById('contact-socials');
    Object.entries(profile.social).forEach(([key, url]) => {
        let displayUrl = url.startsWith('http') ? url : `https://${url}`;

        const link = document.createElement('a');
        link.href = displayUrl;
        link.className = 'social-link';
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute('aria-label', key);

        // Map common keys to feather icons, fallback to 'link'
        const iconMap = {
            github: 'github',
            linkedin: 'linkedin',
            twitter: 'twitter',
            dribbble: 'dribbble',
            instagram: 'instagram',
            facebook: 'facebook'
        };
        const iconName = iconMap[key] || 'link';

        link.innerHTML = `<i data-feather="${iconName}"></i>`;
        contactSocials.appendChild(link);
    });

    document.getElementById('contact-email').href = `mailto:${profile.email}`;
    feather.replace(); // Update new icons
}

function renderServices(services) {
    const container = document.getElementById('services-grid');
    if (!services) return;

    services.forEach(service => {
        const div = document.createElement('div');
        div.className = 'service-card fade-in';
        div.innerHTML = `
            <div class="service-icon">
                <i data-feather="${service.icon || 'box'}"></i>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-desc">${service.description}</p>
        `;
        container.appendChild(div);
    });
    feather.replace();
}

function renderSkills(skills) {
    const container = document.getElementById('skills-list');
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.className = 'skill-pill';
        li.textContent = skill;
        container.appendChild(li);
    });
}

function renderProjects(projects) {
    const container = document.getElementById('projects-grid');
    projects.forEach(project => {
        const article = document.createElement('article');
        article.className = 'project-card fade-in';

        const tagsHtml = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
        const imageSrc = project.image || 'https://via.placeholder.com/600x400';

        article.innerHTML = `
            <div class="project-image">
                <img src="${imageSrc}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tags">${tagsHtml}</div>
                <p class="project-desc">${project.description}</p>
                <div class="project-links">
                    <a href="${project.link}" target="_blank" class="link-item">
                        <i data-feather="external-link"></i> Demo
                    </a>
                    <a href="${project.repo}" target="_blank" class="link-item">
                        <i data-feather="github"></i> Code
                    </a>
                </div>
            </div>
        `;
        container.appendChild(article);
    });
    feather.replace();
}

function renderExperience(experience) {
    const container = document.getElementById('experience-timeline');
    if (!experience) return;

    experience.forEach(job => {
        const div = document.createElement('div');
        div.className = 'timeline-item fade-in';
        div.innerHTML = `
            <h3 class="timeline-role">${job.role}</h3>
            <div class="timeline-company">${job.company}</div>
            <div class="timeline-period">${job.period}</div>
            <p class="timeline-desc">${job.description}</p>
        `;
        container.appendChild(div);
    });
}

function renderTestimonials(testimonials) {
    const container = document.getElementById('testimonials-grid');
    if (!testimonials) return;

    testimonials.forEach(item => {
        const div = document.createElement('div');
        div.className = 'testimonial-card fade-in';
        div.innerHTML = `
            <i data-feather="message-square" class="quote-icon"></i>
            <p class="testimonial-text">"${item.text}"</p>
            <div class="testimonial-info">
                <div class="testimonial-author">${item.author}</div>
                <div class="testimonial-role">${item.role}</div>
            </div>
        `;
        container.appendChild(div);
    });
    feather.replace();
}

function renderFooter(profile) {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('footer-name').textContent = profile.name;
}

/* --- UI Interactions --- */

function initTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check local storage or preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        html.setAttribute('data-theme', 'dark');
    }

    toggleBtn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

function initMobileMenu() {
    const menuBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Toggle Icon
        const icon = navLinks.classList.contains('active') ? 'x' : 'menu';
        menuBtn.innerHTML = `<i data-feather="${icon}"></i>`;
        feather.replace();
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.innerHTML = `<i data-feather="menu"></i>`;
            feather.replace();
        });
    });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}
