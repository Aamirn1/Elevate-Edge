import './style.css';
import { renderNavbar, initNavbar, updateActiveLink } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderWhatsApp, initWhatsApp } from './components/whatsapp.js';
import { renderChatWidget, initChatWidget } from './components/chatWidget.js';

import { renderHome, initHome } from './pages/home.js';
import { renderServices } from './pages/services.js';
import { renderPortfolio, initPortfolio } from './pages/portfolio.js';
import { renderAbout, initAbout } from './pages/about.js';
import { renderContact, initContact } from './pages/contact.js';
import { renderCareer, initCareer } from './pages/career.js';
import { renderScrollTop, initScrollTop } from './components/scrollTop.js';

// Route definitions
const routes = {
    '/': { render: renderHome, init: initHome, title: 'Home' },
    '/services': { render: renderServices, init: null, title: 'Services' },
    '/portfolio': { render: renderPortfolio, init: initPortfolio, title: 'Portfolio' },
    '/about': { render: renderAbout, init: initAbout, title: 'About Us' },
    '/contact': { render: renderContact, init: initContact, title: 'Boost Now' },
    '/career': { render: renderCareer, init: initCareer, title: 'Careers' },
};

// Mount shared components (once)
function mountSharedComponents() {
    document.getElementById('navbar').innerHTML = renderNavbar();
    document.getElementById('footer-mount').innerHTML = renderFooter();
    document.getElementById('whatsapp-fab').innerHTML = renderWhatsApp();
    document.getElementById('chat-widget').innerHTML = renderChatWidget();
    document.getElementById('scroll-top-mount').innerHTML = renderScrollTop();

    initNavbar();
    initChatWidget();
    initWhatsApp();
    initScrollTop();
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

    // Re-initialize Scroll Top logic for page-specific behavior (e.g. Contact)
    initScrollTop();

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
                } else {
                    // Remove to allow re-triggering for "fresh" animation feel on scroll
                    entry.target.classList.remove('visible');
                }
            });
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
        observer.observe(el);
    });
}

// Initialize
mountSharedComponents();
window.addEventListener('hashchange', navigate);
navigate(); // Initial route
