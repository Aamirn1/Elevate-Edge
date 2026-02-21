export function renderAbout() {
  return `
    <section class="hero" style="min-height:50vh;padding:160px 0 60px;">
      <div class="hero-bg">
        <div class="hero-shape hero-shape-1"></div>
        <div class="hero-shape hero-shape-2"></div>
        <div class="hero-grid"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge"><i class="fas fa-users"></i> About Us</div>
          <h1><span class="gradient-text">The Team Behind</span><br>Your Growth</h1>
          <p class="hero-sub">We're a passionate team of designers, developers, and marketers dedicated to helping businesses thrive online.</p>
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-text reveal-left">
            <h2>We Help Businesses <span class="gradient-text">Reach New Heights</span></h2>
            <p>At ElevateEdge Digital, we believe every business — big or small — deserves a powerful online presence. Founded with a mission to make premium digital services accessible and affordable, we've helped dozens of businesses transform their digital footprint.</p>
            <p>We don't just build websites or run ads. We craft digital experiences that connect your brand with your audience, drive engagement, and convert visitors into loyal customers.</p>
            
            <div class="about-values">
              <div class="value-card">
                <i class="fas fa-lightbulb"></i>
                <h4>Innovation</h4>
                <p>We stay ahead of trends to deliver cutting-edge solutions.</p>
              </div>
              <div class="value-card">
                <i class="fas fa-handshake"></i>
                <h4>Partnership</h4>
                <p>Your success is our success. We work as an extension of your team.</p>
              </div>
              <div class="value-card">
                <i class="fas fa-shield-alt"></i>
                <h4>Integrity</h4>
                <p>Transparent pricing, honest communication, real results.</p>
              </div>
              <div class="value-card">
                <i class="fas fa-trophy"></i>
                <h4>Excellence</h4>
                <p>We never settle for "good enough." Every project is our best work.</p>
              </div>
            </div>
          </div>

          <div class="about-visual reveal-right">
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-num" data-target="150">0+</div>
                <div class="stat-label">Projects Completed</div>
              </div>
              <div class="stat-card">
                <div class="stat-num" data-target="50">0+</div>
                <div class="stat-label">Happy Clients</div>
              </div>
              <div class="stat-card">
                <div class="stat-num" data-target="98">0%</div>
                <div class="stat-label">Satisfaction Rate</div>
              </div>
              <div class="stat-card">
                <div class="stat-num" data-target="3">0+</div>
                <div class="stat-label">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="services-section" style="background:var(--bg-surface);">
      <div class="container">
        <div class="section-header reveal">
          <h2>Why Choose ElevateEdge?</h2>
          <p>Here's what sets us apart from the rest.</p>
        </div>
        <div class="services-grid">
          <div class="service-card reveal">
            <div class="service-icon"><i class="fas fa-dollar-sign"></i></div>
            <h3>Budget-Friendly</h3>
            <p>Premium quality doesn't have to break the bank. Our packages are designed to fit any budget while delivering maximum value.</p>
          </div>
          <div class="service-card reveal">
            <div class="service-icon"><i class="fas fa-clock"></i></div>
            <h3>Fast Delivery</h3>
            <p>We respect your time. Most projects are delivered within 1–2 weeks, without compromising on quality or attention to detail.</p>
          </div>
          <div class="service-card reveal">
            <div class="service-icon"><i class="fas fa-headset"></i></div>
            <h3>24/7 Support</h3>
            <p>Got a question at midnight? No problem. Our team is always available via chat and WhatsApp to assist you.</p>
          </div>
          <div class="service-card reveal">
            <div class="service-icon"><i class="fas fa-sync-alt"></i></div>
            <h3>Free Revisions</h3>
            <p>Not 100% happy? We offer free revisions to make sure the final product is exactly what you envisioned.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container reveal">
        <h2>Ready to Elevate Your Business?</h2>
        <p>Ready to take your business to the next level? We'd love to hear from you.</p>
        <a href="#/contact" class="btn btn-primary btn-pulse">
          <i class="fas fa-bolt"></i> Boost Now
        </a>
      </div>
    </section>
  `;
}

export function initAbout() {
  // Animate stat counters
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const nums = entry.target.querySelectorAll('.stat-num');
        nums.forEach(num => {
          const target = parseInt(num.getAttribute('data-target'), 10);
          if (!target) return;
          const suffix = num.textContent.replace(/[0-9]/g, '');
          let current = 0;
          const increment = Math.ceil(target / 50);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            num.textContent = current + suffix;
          }, 40);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const statsGrid = document.querySelector('.stats-grid');
  if (statsGrid) observer.observe(statsGrid);
}
