export function renderWhatsApp() {
  return `
    <a href="https://wa.me/923205719979" target="_blank" rel="noopener" class="whatsapp-fab" aria-label="Chat on WhatsApp">
      <i class="fab fa-whatsapp"></i>
      <span class="tooltip">Chat with us on WhatsApp!</span>
    </a>
  `;
}
export function initWhatsApp() {
  const fab = document.querySelector('.whatsapp-fab');
  if (!fab) return;

  const handleScroll = () => {
    // Find the "What We Do Best" section (Services section)
    const servicesSection = document.querySelector('.services-section');
    if (!servicesSection) {
      // If not on home page or section missing, default to classic right position
      fab.classList.add('shifted');
      return;
    }

    const rect = servicesSection.getBoundingClientRect();
    // Trigger shift when the top of the section is near the middle of the viewport
    if (rect.top < window.innerHeight * 0.5) {
      fab.classList.add('shifted');
    } else {
      fab.classList.remove('shifted');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
}
