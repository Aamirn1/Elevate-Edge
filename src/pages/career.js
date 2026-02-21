export function renderCareer() {
  return `
    <section class="hero" style="min-height:50vh;padding:160px 0 60px;">
      <div class="hero-bg">
        <div class="hero-shape hero-shape-1"></div>
        <div class="hero-shape hero-shape-2"></div>
        <div class="hero-grid"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge"><i class="fas fa-briefcase"></i> Join Our Mission</div>
          <h1><span class="gradient-text">Build Your Career</span><br>With ElevateEdge</h1>
          <p class="hero-sub">Become a strategic partner and earn by connecting businesses with premium digital solutions. No technical skills required — just your passion for growth.</p>
        </div>
      </div>
    </section>

    <section class="career-model-section career-section">
      <div class="container">
        <div class="section-header reveal" style="margin-bottom: 80px;">
          <h2>Earn While You <span class="gradient-text">Help Others Grow</span></h2>
          <p>We've designed a simple, professional model where you act as the bridge between local businesses and elite digital services.</p>
        </div>
        
        <div class="process-steps" style="gap: 60px 0;">
          <div class="process-step reveal">
            <div class="step-number">01</div>
            <div class="step-content">
              <h3>Identify Opportunities</h3>
              <p>Explore Google Maps or visit local businesses in your area. Look for brands that need a professional edge or a digital boost.</p>
            </div>
          </div>
          <div class="process-connector"></div>
          <div class="process-step reveal">
            <div class="step-number">02</div>
            <div class="step-content">
              <h3>Showcase Our Agency</h3>
              <p>Show them the ElevateEdge portfolio. Demonstrate how our premium designs and strategies can double their growth. </p>
            </div>
          </div>
          <div class="process-connector"></div>
          <div class="process-step reveal">
            <div class="step-number">03</div>
            <div class="step-content">
              <h3>Close the Deal</h3>
              <p>Negotiate your own pricing. For example, if a client agrees to $200 for a service, you keep the profit margin you set.</p>
            </div>
          </div>
          <div class="process-connector"></div>
          <div class="process-step reveal">
            <div class="step-number">04</div>
            <div class="step-content">
              <h3>Submit & Profit</h3>
              <p>Enter the details via the "Boost Now" page. You pay our base fee (e.g. $150) and keep the remaining ($50) as your instant profit!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="career-benefits career-section" style="background:var(--bg-surface);">
      <div class="container">
        <div class="about-grid" style="gap: clamp(60px, 10vw, 120px); align-items: flex-start;">
          <div class="about-text reveal-left">
            <h2>Why Partner With <span class="gradient-text">ElevateEdge?</span></h2>
            <p style="margin-bottom: 40px;">We provide the technical expertise, you provide the connection. It's a win-win partnership built on quality and trust.</p>
            
            <div class="about-values" style="gap: 24px;">
              <div class="value-card">
                <i class="fas fa-wallet"></i>
                <h4>Unlimited Earnings</h4>
                <p>The more businesses you help, the more you earn. There is no cap on your potential.</p>
              </div>
              <div class="value-card">
                <i class="fas fa-user-shield"></i>
                <h4>Premium Quality</h4>
                <p>You can pitch with confidence knowing our team delivers world-class results every time.</p>
              </div>
              <div class="value-card">
                <i class="fas fa-clock"></i>
                <h4>Work Your Way</h4>
                <p>Choose your own hours and your own clients. Be your own boss while supported by an agency.</p>
              </div>
              <div class="value-card">
                <i class="fas fa-chart-line"></i>
                <h4>Skill Growth</h4>
                <p>Develop valuable skills in sales, marketing, and relationship management.</p>
              </div>
            </div>
          </div>
          <div class="about-visual reveal-right">
             <div class="contact-card" style="background:var(--bg-card);padding:clamp(30px, 5vw, 60px);border:1px solid var(--border);border-radius:var(--radius-lg);">
               <h3 style="margin-bottom:20px;font-size:1.5rem;">Ready to Onboard?</h3>
               <p style="margin-bottom:32px;line-height:1.8;">Message us to get our official rate card and start your journey as an ElevateEdge Associate. Our team is ready to support your first deal.</p>
               <a href="https://wa.me/923205719979" target="_blank" class="btn btn-primary btn-pulse" style="background:#25D366;width:100%;justify-content:center;padding:18px;">
                 <i class="fab fa-whatsapp"></i> Chat With Onboarding
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container reveal">
        <h2>Already Have a Client?</h2>
        <p>If you've already closed a deal, head over to the project submission page to get started.</p>
        <a href="#/contact" class="btn btn-primary btn-pulse">
          <i class="fas fa-bolt"></i> Boost Now
        </a>
      </div>
    </section>
  `;
}

export function initCareer() {
  // Any specific initialization for the career page can go here
}
