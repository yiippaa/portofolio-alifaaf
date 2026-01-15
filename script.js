const animateElements = document.querySelectorAll(
    'section, .experience-item, .project-card'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            // khusus project card pakai stagger
            if (entry.target.classList.contains('project-card')) {
                const cards = [...document.querySelectorAll('.project-card')];
                const index = cards.indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.15}s`;
            }

            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

animateElements.forEach(el => observer.observe(el));
