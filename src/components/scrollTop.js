export function renderScrollTop() {
    return `
    <button id="scroll-top" class="scroll-top" aria-label="Scroll to top">
      <i class="fas fa-arrow-up"></i>
    </button>
  `;
}

export function initScrollTop() {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;

    const handleScroll = () => {
        const isContactPage = window.location.hash === '#/contact';
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const whatsappFab = document.querySelector('.whatsapp-fab');
        const isWhatsAppShifted = whatsappFab ? whatsappFab.classList.contains('shifted') : true;

        if (isContactPage) {
            // Specialized logic for Contact Page: Show after "Business Hours" (approximate or targeted)
            const contactCards = document.querySelectorAll('.contact-card h4');
            let businessHoursReached = false;

            contactCards.forEach(h4 => {
                if (h4.textContent.includes('Business Hours')) {
                    const rect = h4.getBoundingClientRect();
                    if (rect.top < window.innerHeight) {
                        businessHoursReached = true;
                    }
                }
            });

            if (businessHoursReached && isWhatsAppShifted) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        } else {
            // Standard logic: Show only after 300px AND when whatsapp is shifted
            if (scrollTop > 300 && isWhatsAppShifted) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        }
    };

    btn.addEventListener('click', () => {
        // Show visual feedback (blue state)
        btn.classList.add('clicked');

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Automatically revert to transparent state after animation/scroll
        setTimeout(() => {
            btn.classList.remove('clicked');
        }, 800);
    });

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
}
