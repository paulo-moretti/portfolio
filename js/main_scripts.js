document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const hrefAttribute = this.getAttribute('href');
        if (hrefAttribute) {
            const targetElement = document.querySelector(hrefAttribute);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

function downloadCV() {
    // The lang variable is kept for potential future use, but the URL is now fixed.
    const lang = typeof Alpine !== 'undefined' && Alpine.store('language') ? Alpine.store('language') : ( (navigator.language || navigator.userLanguage).startsWith('pt') ? 'pt' : 'en' );
    const url = 'dist/files/Curriculo_Paulo_Moretti.pdf'; // Updated to the new CV path
    window.open(url, '_blank');
}

// Combined and refined smooth scroll logic
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            if (href === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const targetElement = document.querySelector(href);
            if (!targetElement) return;

            // Consider fixed header height if any (adjust 60 as needed or make dynamic)
            const headerOffset = document.querySelector('nav.fixed') ? document.querySelector('nav.fixed').offsetHeight : 60;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Specific smooth scroll for logo
    const logoLink = document.querySelector('a.text-2xl.font-bold.gradient-text');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
