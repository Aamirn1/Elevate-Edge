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

        if (isContactPage) {
            // Specialized logic for Contact Page: Show after "Business Hours" (approximate or targeted)
            // Attempting to find the section by heading content or position
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

            if (businessHoursReached) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        } else {
            // Standard logic: Show after 300px
            if (scrollTop > 300) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        }
    };

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
}
