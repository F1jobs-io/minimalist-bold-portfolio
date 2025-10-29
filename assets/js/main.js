// =============================================
// MINIMALIST BOLD PORTFOLIO - MAIN JS
// =============================================

// Data loading functions
async function loadJSON(file) {
    try {
        const response = await fetch(`data/${file}.json`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Error loading ${file}.json:`, error);
        return null;
    }
}

// Initialize site
async function initSite() {
    await Promise.all([
        loadSiteConfig(),
        loadNavigation(),
        loadHero(),
        loadAbout(),
        loadWork(),
        loadSkills(),
        loadProjects(),
        loadContact(),
        loadFooter()
    ]);

    initMobileNav();
}

// Load site configuration
async function loadSiteConfig() {
    const config = await loadJSON('site-config');
    if (config) {
        document.getElementById('site-title').textContent = config.title || 'Portfolio';
        document.getElementById('site-description').content = config.description || 'Professional Portfolio';
    }
}

// Load navigation
async function loadNavigation() {
    const nav = await loadJSON('navigation');
    if (nav) {
        const logo = document.getElementById('nav-logo');
        if (logo) logo.textContent = nav.logo || 'Portfolio';

        const menu = document.getElementById('nav-menu');
        if (menu && nav.items) {
            menu.innerHTML = nav.items.map(item => `
                <li><a href="${item.href}">${item.text}</a></li>
            `).join('');
        }
    }
}

// Load hero section
async function loadHero() {
    const hero = await loadJSON('hero');
    if (hero) {
        const label = document.getElementById('hero-label');
        if (label) label.textContent = hero.label || '';

        const title = document.getElementById('hero-title');
        if (title) title.textContent = hero.title || '';

        const subtitle = document.getElementById('hero-subtitle');
        if (subtitle) subtitle.textContent = hero.subtitle || '';

        const cta = document.getElementById('hero-cta');
        if (cta && hero.cta) {
            cta.innerHTML = hero.cta.map(button => `
                <a href="${button.href}" class="btn ${button.type === 'primary' ? 'btn-primary' : 'btn-secondary'}">
                    ${button.text}
                </a>
            `).join('');
        }

        const image = document.getElementById('hero-image');
        if (image && hero.image) {
            image.innerHTML = `<img src="${hero.image}" alt="${hero.title}">`;
        }
    }
}

// Load about section
async function loadAbout() {
    const about = await loadJSON('about');
    if (about) {
        const title = document.getElementById('about-title');
        if (title) title.textContent = about.title || 'About';

        const description = document.getElementById('about-description');
        if (description && about.description) {
            description.innerHTML = Array.isArray(about.description)
                ? about.description.map(p => `<p>${p}</p>`).join('')
                : `<p>${about.description}</p>`;
        }

        const stats = document.getElementById('about-stats');
        if (stats && about.stats) {
            stats.innerHTML = about.stats.map(stat => `
                <div class="stat-item">
                    <div class="stat-number">${stat.number}</div>
                    <div class="stat-label">${stat.label}</div>
                </div>
            `).join('');
        }
    }
}

// Load work experience
async function loadWork() {
    const work = await loadJSON('work');
    if (work) {
        const title = document.getElementById('work-title');
        if (title) title.textContent = work.title || 'Experience';

        const list = document.getElementById('work-list');
        if (list && work.items) {
            list.innerHTML = work.items.map(item => `
                <div class="work-item">
                    <div class="work-period">${item.period || ''}</div>
                    <div class="work-details">
                        <h3 class="work-title">${item.position || ''}</h3>
                        <div class="work-company">${item.company || ''}</div>
                        <p class="work-description">${item.description || ''}</p>
                    </div>
                </div>
            `).join('');
        }
    }
}

// Load skills
async function loadSkills() {
    const skills = await loadJSON('skills');
    if (skills) {
        const title = document.getElementById('skills-title');
        if (title) title.textContent = skills.title || 'Skills';

        const list = document.getElementById('skills-list');
        if (list && skills.categories) {
            list.innerHTML = skills.categories.map(category => `
                <div class="skill-category">
                    <h3>${category.name}</h3>
                    <ul class="skill-list">
                        ${category.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
        }
    }
}

// Load projects
async function loadProjects() {
    const projects = await loadJSON('projects');
    if (projects) {
        const title = document.getElementById('projects-title');
        if (title) title.textContent = projects.title || 'Projects';

        const list = document.getElementById('projects-list');
        if (list && projects.items) {
            list.innerHTML = projects.items.map(project => `
                <div class="project-item">
                    <div class="project-image">
                        ${project.image ? `<img src="${project.image}" alt="${project.title}">` : ''}
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        ${project.tags ? `
                            <div class="project-tags">
                                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                            </div>
                        ` : ''}
                        ${project.link ? `
                            <a href="${project.link}" class="project-link" target="_blank">
                                View Project →
                            </a>
                        ` : ''}
                    </div>
                </div>
            `).join('');
        }
    }
}

// Load contact section
async function loadContact() {
    const contact = await loadJSON('contact');
    if (contact) {
        const title = document.getElementById('contact-title');
        if (title) title.textContent = contact.title || 'Contact';

        const description = document.getElementById('contact-description');
        if (description) description.textContent = contact.description || '';

        const info = document.getElementById('contact-info');
        if (info && contact.methods) {
            info.innerHTML = contact.methods.map(method => `
                <div class="contact-item">
                    <div class="contact-label">${method.label}</div>
                    <div class="contact-value">
                        ${method.link ? `<a href="${method.link}">${method.value}</a>` : method.value}
                    </div>
                </div>
            `).join('');
        }
    }
}

// Load footer
async function loadFooter() {
    const footer = await loadJSON('footer');
    if (footer) {
        const text = document.getElementById('footer-text');
        if (text) text.textContent = footer.text || '';

        const social = document.getElementById('footer-social');
        if (social && footer.social) {
            social.innerHTML = footer.social.map(link => `
                <a href="${link.url}" class="social-link" target="_blank">${link.name}</a>
            `).join('');
        }
    }
}

// Mobile navigation toggle
function initMobileNav() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
            });
        });
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSite);
} else {
    initSite();
}
