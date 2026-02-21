export function renderNavbar() {
  return `
    <div class="navbar">
      <div class="container">
        <a href="#/" class="navbar-brand">
          <div class="brand-metallic-wrap">
            <div class="brand-logo-glass">
              <svg class="brand-logo-svg" viewBox="0 0 100 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <!-- Main Gradient -->
                  <linearGradient id="logo_grad" x1="0" y1="0" x2="100" y2="85" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00b894"/>
                    <stop offset="1" stop-color="#0984e3"/>
                  </linearGradient>

                  <!-- Moving Shine Gradient -->
                  <linearGradient id="shine_grad" x1="-100%" y1="0%" x2="0%" y2="0%">
                    <stop offset="0%" stop-color="white" stop-opacity="0"/>
                    <stop offset="50%" stop-color="white" stop-opacity="0.9"/>
                    <stop offset="100%" stop-color="white" stop-opacity="0"/>
                    
                    <!-- Animation -->
                    <animate attributeName="x1" from="-100%" to="200%" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="x2" from="0%" to="300%" dur="2.5s" repeatCount="indefinite"/>
                  </linearGradient>

                  <!-- Mask to Apply Shine Only on Bars -->
                  <mask id="shine_mask">
                    <rect x="0" y="0" width="100" height="85" fill="black"/>
                    <rect x="0" y="55" width="16" height="30" rx="3" fill="white"/>
                    <rect x="22" y="35" width="16" height="50" rx="3" fill="white"/>
                    <rect x="44" y="15" width="16" height="70" rx="3" fill="white"/>
                    <rect x="66" y="0" width="16" height="85" rx="3" fill="white"/>
                  </mask>
                </defs>

                <!-- Bars -->
                <rect x="0" y="55" width="16" height="30" rx="3" fill="url(#logo_grad)" opacity="0.4"/>
                <rect x="22" y="35" width="16" height="50" rx="3" fill="url(#logo_grad)" opacity="0.6"/>
                <rect x="44" y="15" width="16" height="70" rx="3" fill="url(#logo_grad)" opacity="0.8"/>
                <rect x="66" y="0" width="16" height="85" rx="3" fill="url(#logo_grad)"/>

                <!-- Animated Shine Overlay -->
                <rect width="100" height="85"
                      fill="url(#shine_grad)"
                      mask="url(#shine_mask)"
                      style="mix-blend-mode: screen;"/>
              </svg>
            </div>
            <div class="brand-text-glass" data-text="Elevate Edge">
              <span class="elevate">Elevate</span> <span class="edge highlight">Edge</span>
            </div>
          </div>
        </a>
        <div class="nav-links" id="nav-links">
          <a href="#/" data-page="home">Home</a>
          <a href="#/services" data-page="services">Services</a>
          <a href="#/portfolio" data-page="portfolio">Portfolio</a>
          <a href="#/about" data-page="about">About Us</a>
          <a href="#/career" data-page="career">Careers</a>
          <a href="#/contact" class="nav-cta">Boost Now</a>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  `;
}

export function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // Scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
  });

  // Set active link
  updateActiveLink();
}

export function updateActiveLink() {
  const hash = window.location.hash || '#/';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === hash || (hash === '' && href === '#/'));
  });
}
