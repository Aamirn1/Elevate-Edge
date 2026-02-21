export function renderFooter() {
  return `
    <div class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="navbar-brand" style="margin-bottom:16px;">
              <img src="/logo.svg" alt="ElevateEdge Logo" class="brand-logo" />
              <span>Elevate</span><span class="highlight">Edge</span>
            </div>
            <p>Amplify your business growth with our budget-friendly digital solutions. We create stunning websites, run targeted campaigns, and manage your social presence — all tailored to maximize your ROI.</p>
            <div class="social-links">
              <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <a href="#/">Home</a>
            <a href="#/services">Services</a>
            <a href="#/portfolio">Portfolio</a>
            <a href="#/about">About Us</a>
            <a href="#/career">Careers</a>
          </div>
          <div class="footer-col">
            <h4>Our Services</h4>
            <a href="#/services">Website Development</a>
            <a href="#/services">Digital Marketing</a>
            <a href="#/services">Social Media</a>
            <a href="#/services">Chat Support</a>
          </div>
          <div class="footer-col">
            <h4>Get in Touch</h4>
            <a href="https://wa.me/923205719979" target="_blank"><i class="fab fa-whatsapp"></i> +92 320 571 9979</a>
            <a href="mailto:helpingbusinessesgrowth@gmail.com"><i class="fas fa-envelope"></i> helpingbusinessesgrowth@gmail.com</a>
            <a href="#/contact"><i class="fas fa-map-marker-alt"></i> Available Worldwide</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} ElevateEdge Digital. All rights reserved.</p>
        </div>
      </div>
    </div>
  `;
}
