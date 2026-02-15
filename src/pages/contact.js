export function renderContact() {
  return `
    <section class="hero" style="min-height:50vh;padding:160px 0 60px;">
      <div class="hero-bg">
        <div class="hero-shape hero-shape-1"></div>
        <div class="hero-shape hero-shape-2"></div>
        <div class="hero-grid"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge"><i class="fas fa-envelope"></i> Contact Us</div>
          <h1><span class="gradient-text">Let's Start a</span><br>Conversation</h1>
          <p class="hero-sub">Have a project in mind? Fill out the form below or reach out directly — we'd love to hear from you!</p>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form reveal-left">
            <h3 style="margin-bottom:24px;font-size:1.3rem;">Send Us a Message</h3>
            <form id="contact-form">
              <input type="hidden" name="_subject" value="New Submission from ElevateEdge Contact Form" />
              <div class="form-group">
                <label for="c-name">Your Name</label>
                <input type="text" id="c-name" name="name" placeholder="John Doe" required />
              </div>
              <div class="form-group">
                <label for="c-email">Email Address</label>
                <input type="email" id="c-email" name="email" placeholder="john@example.com" required />
              </div>
              <div class="form-group">
                <label for="c-biz">Business Type</label>
                <select id="c-biz" name="business_type">
                  <option value="">Select your industry...</option>
                  <option value="retail">Retail / E-commerce</option>
                  <option value="food">Food & Restaurant</option>
                  <option value="professional">Professional Services</option>
                  <option value="health">Health & Fitness</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="c-services">Services Required</label>
                <div class="custom-multi-select" id="services-dropdown">
                  <div class="select-trigger" id="services-trigger">
                    <span class="trigger-text">Select services...</span>
                  </div>
                  <div class="options-container" id="services-options">
                    <div class="option" data-value="web-design">Website Design & Dev</div>
                    <div class="option" data-value="marketing">Digital Marketing & Ads</div>
                    <div class="option" data-value="social">Social Media Management</div>
                    <div class="option" data-value="seo">SEO Optimization</div>
                    <div class="option" data-value="chat">AI Chat Support</div>
                    <div class="option" data-value="branding">Branding & UI/UX</div>
                    <div class="option" data-value="maintenance">Ongoing Maintenance</div>
                  </div>
                </div>
                <!-- Hidden input to store values for form submission -->
                <input type="hidden" id="c-services-value" name="services" value="" />
              </div>
              <div class="form-group">
                <label for="c-budget">Estimated Budget for Your Business (USD)</label>
                <input type="text" id="c-budget" name="budget" placeholder="e.g. $150 - $1,000" />
              </div>
              <div class="form-group">
                <label for="c-msg">Your Message (Please include your WhatsApp Number)</label>
                <textarea id="c-msg" name="message" placeholder="Tell us about your project or ask us anything..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-pulse form-submit">
                <i class="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
            <div id="form-success" style="display:none;text-align:center;padding:40px 20px;">
              <i class="fas fa-check-circle" style="font-size:3rem;color:var(--primary);margin-bottom:16px;display:block;"></i>
              <h3 style="margin-bottom:8px;">Message Sent!</h3>
              <p style="color:var(--text-muted);">Thank you for reaching out. We'll get back to you as soon as possible!</p>
            </div>
          </div>

          <div class="contact-info reveal-right">
            <a href="https://wa.me/923205719979" target="_blank" rel="noopener" class="contact-card whatsapp-card" style="text-decoration:none;">
              <div class="icon-box"><i class="fab fa-whatsapp"></i></div>
              <div>
                <h4>Chat with us on WhatsApp!</h4>
                <p>+92 320 571 9979<br><span style="font-size:0.82rem;opacity:0.7;">Tap to open WhatsApp</span></p>
              </div>
            </a>
            <div class="contact-card">
              <div class="icon-box"><i class="fas fa-envelope"></i></div>
              <div>
                <h4>Email Us</h4>
                <p>helpingbusinessesgrowth@gmail.com<br><span style="font-size:0.82rem;opacity:0.7;">We reply within 24 hours</span></p>
              </div>
            </div>
            <div class="contact-card">
              <div class="icon-box"><i class="fas fa-clock"></i></div>
              <div>
                <h4>Business Hours</h4>
                <p>24/7 Available<br><span style="font-size:0.82rem;opacity:0.7;">We're always here for you</span></p>
              </div>
            </div>
            <div class="contact-card">
              <div class="icon-box"><i class="fas fa-globe"></i></div>
              <div>
                <h4>We Work Globally</h4>
                <p>Serving clients worldwide<br><span style="font-size:0.82rem;opacity:0.7;">Remote-first, available everywhere</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container reveal">
        <h2>Ready to Elevate Your Business?</h2>
        <p>Contact us today and let's make your vision a reality.</p>
        <a href="https://wa.me/923205719979" target="_blank" class="btn btn-primary btn-pulse" style="background:#25D366;">
          <i class="fab fa-whatsapp"></i> Message Us on WhatsApp
        </a>
      </div>
    </section>
  `;
}

export function initContact() {
  const form = document.getElementById('contact-form');
  const successEl = document.getElementById('form-success');
  if (!form) return;

  // Custom Multi-select Logic
  const dropdown = document.getElementById('services-dropdown');
  const trigger = document.getElementById('services-trigger');
  const triggerText = trigger?.querySelector('.trigger-text');
  const options = document.querySelectorAll('.option');
  const hiddenInput = document.getElementById('c-services-value');

  if (dropdown && trigger) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });

    options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        option.classList.toggle('selected');
        updateSelectedServices();
      });
    });

    document.addEventListener('click', () => {
      dropdown.classList.remove('active');
    });

    function updateSelectedServices() {
      const selected = Array.from(options)
        .filter(opt => opt.classList.contains('selected'))
        .map(opt => opt.textContent);

      const values = Array.from(options)
        .filter(opt => opt.classList.contains('selected'))
        .map(opt => opt.dataset.value);

      if (selected.length > 0) {
        triggerText.textContent = selected.join(', ');
        triggerText.style.color = 'var(--text)';
      } else {
        triggerText.textContent = 'Select services...';
        triggerText.style.color = 'var(--text)';
      }
      hiddenInput.value = values.join(',');
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation
    const name = form.querySelector('#c-name');
    const email = form.querySelector('#c-email');
    const msg = form.querySelector('#c-msg');

    let valid = true;
    [name, email, msg].forEach(f => {
      if (!f.value.trim()) {
        f.style.borderColor = '#e74c3c';
        valid = false;
      } else {
        f.style.borderColor = 'var(--border)';
      }
    });

    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.style.borderColor = '#e74c3c';
      valid = false;
    }

    if (!valid) return;

    // EmailJS Integration
    const submitBtn = form.querySelector('.form-submit');
    const originalBtnText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    emailjs.sendForm('service_vmyxgjy', 'template_7af0zcc', form)
      .then(() => {
        form.style.display = 'none';
        if (successEl) successEl.style.display = 'block';
        form.reset();
      }, (error) => {
        alert("Oops! Failed to send message. Please try again later.");
        console.error('FAILED...', error);
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      });
  });

  // Animate inputs on focus
  form.querySelectorAll('input, textarea, select').forEach(el => {
    el.addEventListener('focus', () => {
      el.style.borderColor = 'var(--primary)';
      el.style.boxShadow = '0 0 0 3px rgba(0,184,148,0.1)';
    });
    el.addEventListener('blur', () => {
      el.style.boxShadow = 'none';
      if (!el.value.trim() && el.type !== 'checkbox') el.style.borderColor = 'var(--border)';
    });
  });
}
