import './style.css';
import { renderNavbar, initNavbar, updateActiveLink } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderWhatsApp } from './components/whatsapp.js';
import { renderChatWidget, initChatWidget } from './components/chatWidget.js';

import { renderHome, initHome } from './pages/home.js';
import { renderServices } from './pages/services.js';
import { renderPortfolio, initPortfolio } from './pages/portfolio.js';
import { renderAbout, initAbout } from './pages/about.js';
import { renderContact, initContact } from './pages/contact.js';

// Route definitions
const routes = {
    '/': { render: renderHome, init: initHome, title: 'Home' },
    '/services': { render: renderServices, init: null, title: 'Services' },
    '/portfolio': { render: renderPortfolio, init: initPortfolio, title: 'Portfolio' },
    '/about': { render: renderAbout, init: initAbout, title: 'About Us' },
    '/contact': { render: renderContact, init: initContact, title: 'Contact' },
};

// Mount shared components (once)
function mountSharedComponents() {
    document.getElementById('navbar').innerHTML = renderNavbar();
    document.getElementById('footer-mount').innerHTML = renderFooter();
    document.getElementById('whatsapp-fab').innerHTML = renderWhatsApp();
    document.getElementById('chat-widget').innerHTML = renderChatWidget();

    initNavbar();
    initChatWidget();
}

// Router
function navigate() {
    const hash = window.location.hash.slice(1) || '/';
    const route = routes[hash] || routes['/'];
    const pageContent = document.getElementById('page-content');

    // Page transition
    pageContent.classList.remove('page-transition-active');
    pageContent.classList.add('page-transition-enter');

    // Render page
    pageContent.innerHTML = route.render();

    // Update page title
    document.title = `${route.title} | ElevateEdge Digital`;

    // Update active nav link
    updateActiveLink();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Trigger transition
    requestAnimationFrame(() => {
        pageContent.classList.remove('page-transition-enter');
        pageContent.classList.add('page-transition-active');
    });

    // Initialize page-specific JS
    if (route.init) {
        setTimeout(() => route.init(), 100);
    }

    // Re-observe scroll reveals
    initScrollReveal();
}

// Scroll reveal
function initScrollReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
        observer.observe(el);
    });
}

// Initialize
mountSharedComponents();
window.addEventListener('hashchange', navigate);
navigate(); // Initial route
