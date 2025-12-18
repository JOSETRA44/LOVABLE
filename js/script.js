document.addEventListener('DOMContentLoaded', () => {
    // Verificar si portfolioData está cargado
    if (typeof portfolioData === 'undefined') {
        console.error('No se encontraron los datos del portafolio. Asegúrate de cargar data.js primero.');
        return;
    }

    renderProfile(portfolioData.profile);
    renderSkills(portfolioData.skills);
    renderProjects(portfolioData.projects);
    renderFooter(portfolioData.profile);
});

function renderProfile(profile) {
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-role').textContent = profile.role;
    document.getElementById('profile-bio').textContent = profile.bio;

    // Render Social Links
    const contactContainer = document.getElementById('profile-contact');
    Object.entries(profile.social).forEach(([key, url]) => {
        // Simple logic to add https if missing, for this demo we assume mostly proper URLs or we just use them as is if relative
        // For a real app, URL validation/normalization would be good.
        let displayUrl = url;
        if (!url.startsWith('http')) {
            displayUrl = `https://${url}`;
        }

        const link = document.createElement('a');
        link.href = displayUrl;
        link.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        contactContainer.appendChild(link);
    });
}

function renderSkills(skills) {
    const skillsContainer = document.getElementById('skills-list');
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.className = 'skill-tag';
        li.textContent = skill;
        skillsContainer.appendChild(li);
    });
}

function renderProjects(projects) {
    const projectsContainer = document.getElementById('projects-grid');
    projects.forEach(project => {
        const article = document.createElement('article');
        article.className = 'project-card';

        // Tags generation
        const tagsHtml = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

        article.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="project-tags">${tagsHtml}</div>
            <div class="project-links">
                <a href="${project.link}" target="_blank" rel="noopener noreferrer">Demo</a>
                <a href="${project.repo}" target="_blank" rel="noopener noreferrer">Código</a>
            </div>
        `;

        projectsContainer.appendChild(article);
    });
}

function renderFooter(profile) {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('footer-name').textContent = profile.name;
}
