import fetchedProjects from '../data/projects.json';

// Fallback data if JSON is empty/missing
const staticProjects = [
  {
    title: "Urban Bites Restaurant",
    description: "A sleek, modern restaurant website featuring online ordering, menu showcase with animations, and mobile-first responsive design that increased online orders by 60%.",
    tags: ["Web Design", "E-commerce", "Food"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    url: "#"
  },
  {
    title: "ProLegal Consultants",
    description: "Professional law firm website with elegant typography, consultation booking system, and SEO-optimized content that brought in 3× more organic traffic.",
    tags: ["Web Design", "SEO", "Professional"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    url: "#"
  },
  {
    title: "FitZone Gym & Fitness",
    description: "Dynamic fitness center website with class schedules, membership plans, trainer profiles, and integrated payment — helping them gain 200+ new members.",
    tags: ["Web Design", "Marketing", "Fitness"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    url: "#"
  }
];

const homeProjects = fetchedProjects && fetchedProjects.length > 0 ? fetchedProjects : staticProjects;

export function renderHome() {
  return `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-shape hero-shape-1"></div>
        <div class="hero-shape hero-shape-2"></div>
        <div class="hero-shape hero-shape-3"></div>
        <div class="hero-grid"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <i class="fas fa-rocket"></i>
            <span>Amplify Your Business Growth Online</span>
          </div>
          <h1>
            <span class="gradient-text glow-text">Double Your</span><br>
            <span>Business Growth</span>
          </h1>
          <p class="hero-sub">
            Affordable Web Design, Digital Ads &amp; Social Media Management to Propel Your Success. Get 2&times; the growth with our budget-friendly digital solutions.
          </p>
          <div class="hero-btns">
            <a href="#/contact" class="btn btn-primary btn-pulse">
              <i class="fas fa-bolt"></i> Get Started
            </a>
            <a href="#/services" class="btn btn-outline">
              <i class="fas fa-th-large"></i> Our Services
            </a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat">
              <div class="num" data-target="150">0+</div>
              <div class="label">Projects Delivered</div>
            </div>
            <div class="hero-stat">
              <div class="num" data-target="98">0%</div>
              <div class="label">Client Satisfaction</div>
            </div>
            <div class="hero-stat">
              <div class="num" data-target="50">0+</div>
              <div class="label">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="services-section">
      <div class="container">
        <div class="section-header reveal">
          <h2>What We Do Best</h2>
          <p>Comprehensive digital solutions designed to accelerate your business growth — all within your budget.</p>
        </div>
        <div class="services-grid">
          <div class="service-card reveal">
            <div class="service-icon"><i class="fas fa-code"></i></div>
            <h3>Custom Website Development</h3>
            <p>Responsive, modern websites tailored to your industry with animated visuals and mobile-friendly layouts.</p>
            <ul>
              <li><i class="fas fa-check-circle"></i> Multi-page responsive designs</li>
              <li><i class="fas fa-check-circle"></i> Modern UI/UX principles</li>
              <li><i class="fas fa-check-circle"></i> SEO optimized</li>
            </ul>
          </div>
          <div class="service-card reveal">
            <div class="service-icon"><i class="fas fa-chart-line"></i></div>
            <h3>Digital Marketing & Ads</h3>
            <p>Data-driven campaigns on Google Ads, Facebook & Instagram to maximize your ROI with targeted strategies.</p>
            <ul>
              <li><i class="fas fa-check-circle"></i> Google & Social Ads</li>
              <li><i class="fas fa-check-circle"></i> Budget-friendly packages</li>
              <li><i class="fas fa-check-circle"></i> Measurable results</li>
            </ul>
          </div>
          <div class="service-card reveal">
            <div class="service-icon"><i class="fas fa-share-alt"></i></div>
            <h3>Social Media Management</h3>
            <p>Content calendars, engaging graphics, and strategic postings to grow your audience and build your brand.</p>
            <ul>
              <li><i class="fas fa-check-circle"></i> Content creation & scheduling</li>
              <li><i class="fas fa-check-circle"></i> Community engagement</li>
              <li><i class="fas fa-check-circle"></i> Analytics & reporting</li>
            </ul>
          </div>
          <div class="service-card reveal">
            <div class="service-icon"><i class="fas fa-headset"></i></div>
            <h3>24/7 Smart Chat Support</h3>
            <p>Integrated chat widget for instant assistance. Quick answers about services, always available for your visitors.</p>
            <ul>
              <li><i class="fas fa-check-circle"></i> Instant responses</li>
              <li><i class="fas fa-check-circle"></i> WhatsApp integration</li>
              <li><i class="fas fa-check-circle"></i> Always available</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="portfolio-section">
      <div class="container">
        <div class="section-header reveal">
          <h2>Featured Projects</h2>
          <p>A glimpse into the digital experiences we've crafted for our clients.</p>
        </div>
        
        <div class="portfolio-slider reveal">
          <div class="portfolio-track" id="home-portfolio-track">
            <!-- Slides injected via JS -->
          </div>
        </div>
        
        <div class="slider-controls reveal">
          <button class="slider-btn" id="home-slider-prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>
          <div class="slider-dots" id="home-slider-dots"></div>
          <button class="slider-btn" id="home-slider-next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container reveal">
        <h2>Ready to Elevate Your Business?</h2>
        <p>Contact us today and let's build something amazing together.</p>
        <a href="#/contact" class="btn btn-primary btn-pulse" style="margin-top:8px;">
          <i class="fas fa-gift"></i> Get a Free Quote
        </a>
      </div>
    </section>
  `;
}

export function initHome() {
  // Animate hero stats counter
  const nums = document.querySelectorAll('.hero-stat .num');
  nums.forEach(num => {
    const target = parseInt(num.getAttribute('data-target'), 10);
    if (!target) return;
    const suffix = num.textContent.replace(/[0-9]/g, '');
    let current = 0;
    const increment = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      num.textContent = current + suffix;
    }, 30);
  });

  // Home Portfolio Slider Logic
  const track = document.getElementById('home-portfolio-track');
  const prevBtn = document.getElementById('home-slider-prev');
  const nextBtn = document.getElementById('home-slider-next');
  const dotsContainer = document.getElementById('home-slider-dots');

  if (track && homeProjects.length > 0) {
    // Generate Slides
    track.innerHTML = homeProjects.map(p => `
      <div class="portfolio-slide">
        <div class="slide-img">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
        </div>
        <div class="slide-info">
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
            ${(p.tags || []).map(t => `<span style="background:rgba(0,184,148,0.12);color:var(--primary-light);padding:4px 12px;border-radius:20px;font-size:0.78rem;font-weight:500;">${t}</span>`).join('')}
          </div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <a href="${p.url}" target="_blank" rel="noopener" class="btn btn-outline" style="margin-top:8px;">
            <i class="fas fa-external-link-alt"></i> Visit Website
          </a>
        </div>
      </div>
    `).join('');

    // Generate Dots
    if (dotsContainer) {
      dotsContainer.innerHTML = homeProjects.map((_, i) => `
        <button class="slider-dot ${i === 0 ? 'active' : ''}" data-slide="${i}" aria-label="Go to slide ${i + 1}"></button>
      `).join('');
    }

    let current = 0;
    const total = homeProjects.length;

    function goToSlide(n) {
      current = ((n % total) + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dotsContainer?.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === current);
      });
    }

    prevBtn?.addEventListener('click', () => goToSlide(current - 1));
    nextBtn?.addEventListener('click', () => goToSlide(current + 1));

    dotsContainer?.addEventListener('click', (e) => {
      const dot = e.target.closest('.slider-dot');
      if (dot) goToSlide(parseInt(dot.dataset.slide, 10));
    });

    // Auto-slide
    let autoSlide = setInterval(() => goToSlide(current + 1), 6000);
    track.addEventListener('mouseenter', () => clearInterval(autoSlide));
    track.addEventListener('mouseleave', () => {
      autoSlide = setInterval(() => goToSlide(current + 1), 6000);
    });

    // Touch Swipe
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
    track.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        goToSlide(diff > 0 ? current + 1 : current - 1);
      }
    });
  }
}
