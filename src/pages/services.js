export function renderServices() {
  return `
    <!-- Page Hero -->
    <section class="hero" style="min-height:50vh;padding:160px 0 60px;">
      <div class="hero-bg">
        <div class="hero-shape hero-shape-1"></div>
        <div class="hero-shape hero-shape-2"></div>
        <div class="hero-grid"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge"><i class="fas fa-th-large"></i> Our Services</div>
          <h1><span class="gradient-text">Services That</span><br>Drive Results</h1>
          <p class="hero-sub">Everything you need to establish a powerful online presence and grow your business — all at budget-friendly rates.</p>
        </div>
      </div>
    </section>

    <!-- Detailed Services -->
    <section class="services-detail-section">
      <div class="container">
        <div class="services-detail-grid">

          <!-- Web Development -->
          <div class="service-detail-card reveal">
            <div class="service-detail-icon">
              <i class="fas fa-laptop-code"></i>
            </div>
            <div>
              <h3>Custom Website Development</h3>
              <p>We build responsive, multi-page websites tailored to any industry — retail, food, professional services, and more. Each site features modern design elements, mobile-friendly layouts, and engaging animations.</p>
              <ul>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Fully responsive multi-page designs</li>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Animated 3D icons & interactive graphics</li>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> SEO optimized for search engines</li>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Fast loading & modern tech stack</li>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> CMS integration & e-commerce ready</li>
              </ul>
            </div>
          </div>

          <!-- Digital Marketing -->
          <div class="service-detail-card reveal">
            <div class="service-detail-icon">
              <i class="fas fa-bullhorn"></i>
              <div class="growth-visual">
                <div class="bar growth-bar" style="--bar-h:40px;"></div>
                <div class="bar growth-bar" style="--bar-h:60px;animation-delay:0.1s;"></div>
                <div class="bar growth-bar" style="--bar-h:50px;animation-delay:0.2s;"></div>
                <div class="bar growth-bar" style="--bar-h:80px;animation-delay:0.3s;"></div>
                <div class="bar growth-bar" style="--bar-h:70px;animation-delay:0.4s;"></div>
                <div class="bar growth-bar" style="--bar-h:100px;animation-delay:0.5s;"></div>
                <div class="bar growth-bar" style="--bar-h:120px;animation-delay:0.6s;"></div>
              </div>
            </div>
            <div>
              <h3>Digital Marketing & Ads</h3>
              <p>We run data-driven marketing campaigns across Google Ads, Facebook, and Instagram to boost your online presence. Our budget-friendly packages maximize your ROI with targeted strategies that deliver real, measurable results.</p>
              <ul>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Google Ads & PPC management</li>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Facebook & Instagram ad campaigns</li>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Audience targeting & retargeting</li>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Performance analytics & reporting</li>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Budget optimization</li>
              </ul>
            </div>
          </div>

          <!-- Social Media -->
          <div class="service-detail-card reveal">
            <div class="service-detail-icon">
              <i class="fas fa-hashtag"></i>
              <div class="social-cluster">
                <div class="s-icon fb bounce-hover"><i class="fab fa-facebook-f"></i></div>
                <div class="s-icon ig bounce-hover"><i class="fab fa-instagram"></i></div>
                <div class="s-icon tw bounce-hover"><i class="fab fa-twitter"></i></div>
                <div class="s-icon li bounce-hover"><i class="fab fa-linkedin-in"></i></div>
                <div class="s-icon tk bounce-hover"><i class="fab fa-tiktok"></i></div>
                <div class="s-icon yt bounce-hover"><i class="fab fa-youtube"></i></div>
              </div>
            </div>
            <div>
              <h3>Social Media Management</h3>
              <p>Our team creates and manages your business's social media profiles — content calendars, eye-catching graphics, and strategic postings to engage your customers and grow your following organically.</p>
              <ul>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Content calendar & strategy</li>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Custom graphic design</li>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Community management & engagement</li>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Hashtag research & trend analysis</li>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Monthly reporting</li>
              </ul>
            </div>
          </div>

          <!-- Chat Support -->
          <div class="service-detail-card reveal">
            <div class="service-detail-icon">
              <i class="fas fa-robot"></i>
            </div>
            <div>
              <h3>24/7 Smart Chat Support</h3>
              <p>We integrate a sleek chat widget on every page for instant assistance. Quick answers about your services, always available. Paired with a WhatsApp direct line for personal contact with your team.</p>
              <ul>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Instant automated responses</li>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> WhatsApp integration</li>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Lead capture & CRM integration</li>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Custom branding & messaging</li>
                <li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i> Analytics dashboard</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container reveal">
        <h2>Let's Build Something Amazing Together</h2>
        <p>Get a free consultation and discover how our services can transform your business.</p>
        <a href="#/contact" class="btn btn-primary btn-pulse">
          <i class="fas fa-arrow-right"></i> Request a Free Quote
        </a>
      </div>
    </section>
  `;
}
