import fetchedProjects from '../data/projects.json';

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
  },
  {
    title: "GreenLeaf Organics",
    description: "E-commerce store for organic products with sleek product cards, cart functionality, and a digital ad campaign that generated 4× ROAS.",
    tags: ["E-commerce", "Ads", "Retail"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    url: "#"
  },
  {
    title: "Stellar Real Estate",
    description: "Property listing website with advanced search filters, virtual tour integration, and lead capture forms. Social media management grew their following by 10K in 3 months.",
    tags: ["Web Design", "Social Media", "Real Estate"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    url: "#"
  }
];

const projects = fetchedProjects && fetchedProjects.length > 0 ? fetchedProjects : staticProjects;

export function renderPortfolio() {
  const slidesHTML = projects.map((p, i) => `
    <div class="portfolio-slide">
      <div class="slide-img">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="slide-info">
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
          ${p.tags.map(t => `<span style="background:rgba(0,184,148,0.12);color:var(--primary-light);padding:4px 12px;border-radius:20px;font-size:0.78rem;font-weight:500;">${t}</span>`).join('')}
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <a href="${p.url}" target="_blank" rel="noopener" class="btn btn-outline" style="margin-top:8px;">
          <i class="fas fa-external-link-alt"></i> Visit Website
        </a>
      </div>
    </div>
  `).join('');

  const dotsHTML = projects.map((_, i) => `
    <button class="slider-dot ${i === 0 ? 'active' : ''}" data-slide="${i}" aria-label="Go to slide ${i + 1}"></button>
  `).join('');

  return `
    <section class="hero" style="min-height:50vh;padding:160px 0 60px;">
      <div class="hero-bg">
        <div class="hero-shape hero-shape-1"></div>
        <div class="hero-shape hero-shape-2"></div>
        <div class="hero-grid"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge"><i class="fas fa-briefcase"></i> Our Work</div>
          <h1><span class="gradient-text">Check Out Our</span><br>Recent Projects</h1>
          <p class="hero-sub">We've helped businesses across industries build their online presence. Here's a glimpse of our work.</p>
        </div>
      </div>
    </section>

    <section class="portfolio-section">
      <div class="container">
        <div class="portfolio-slider">
          <div class="portfolio-track" id="portfolio-track">
            ${slidesHTML}
          </div>
        </div>
        <div class="slider-controls">
          <button class="slider-btn" id="slider-prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>
          <div class="slider-dots" id="slider-dots">
            ${dotsHTML}
          </div>
          <button class="slider-btn" id="slider-next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container reveal">
        <h2>Want Results Like These?</h2>
        <p>Let us build a stunning website and run powerful campaigns for your business.</p>
        <a href="#/contact" class="btn btn-primary btn-pulse">
          <i class="fas fa-hand-pointer"></i> Start Your Project
        </a>
      </div>
    </section>
  `;
}

export function initPortfolio() {
  const track = document.getElementById('portfolio-track');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  const dotsContainer = document.getElementById('slider-dots');
  if (!track) return;

  let current = 0;
  const total = projects.length;

  function goToSlide(n) {
    current = ((n % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    // Update dots
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
  let autoSlide = setInterval(() => goToSlide(current + 1), 5000);
  track.addEventListener('mouseenter', () => clearInterval(autoSlide));
  track.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => goToSlide(current + 1), 5000);
  });

  // Touch / swipe support
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      goToSlide(diff > 0 ? current + 1 : current - 1);
    }
  });
}
