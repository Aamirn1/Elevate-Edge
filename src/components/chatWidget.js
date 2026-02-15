const responses = {
  greeting: "Hello! 👋 Welcome to ElevateEdge Digital. How can we help your business today?",
  services: "We offer:\n• Custom Website Development\n• Digital Marketing & Ads\n• Social Media Management\n• 24/7 Smart Chat Support\n\nWhich service interests you?",
  website: "We build stunning, responsive websites tailored to your industry — retail, food, professional services, and more! Our packages start at very affordable rates. Would you like a free quote?",
  marketing: "Our digital marketing team runs data-driven campaigns on Google Ads, Facebook & Instagram to maximize your ROI. We offer budget-friendly packages that deliver real results! 📈",
  social: "We handle everything — content calendars, graphics, scheduling & engagement. Your social media presence will be managed by experts who know how to grow your audience! 🚀",
  pricing: "Our packages are designed to be budget-friendly! We believe every business deserves a great online presence. Contact us for a custom quote tailored to your needs.",
  contact: "You can reach us via:\n• WhatsApp: +92 320 571 9979\n• Email: helpingbusinessesgrowth@gmail.com\n• Or fill out our contact form!\n\nWe'd love to hear from you! 💬",
  quote: "Great choice! 🎉 Please visit our Contact page or message us on WhatsApp at +92 320 571 9979 to get your free, no-obligation quote.",
  default: "Thanks for your message! I'd love to help. You can ask about our services, pricing, or how to get started. For detailed inquiries, connect with our team on WhatsApp! 😊"
};

function getResponse(message) {
  const msg = message.toLowerCase();
  if (msg.match(/\b(hi|hello|hey|howdy|greetings)\b/)) return responses.greeting;
  if (msg.match(/\b(service|offer|what do you do|help)\b/)) return responses.services;
  if (msg.match(/\b(website|web|site|design|develop)\b/)) return responses.website;
  if (msg.match(/\b(market|ads|advertis|google|facebook|campaign|seo)\b/)) return responses.marketing;
  if (msg.match(/\b(social|media|instagram|facebook page|content|post)\b/)) return responses.social;
  if (msg.match(/\b(price|cost|pricing|afford|budget|how much|rate)\b/)) return responses.pricing;
  if (msg.match(/\b(contact|reach|call|phone|email|whatsapp)\b/)) return responses.contact;
  if (msg.match(/\b(quote|start|begin|get started|sign up|interested)\b/)) return responses.quote;
  return responses.default;
}

export function renderChatWidget() {
  return `
    <button class="chat-toggle" id="chat-toggle" aria-label="Open chat">
      <i class="fas fa-comment-dots"></i>
    </button>
    <div class="chat-box" id="chat-box">
      <div class="chat-header">
        <div class="avatar"><i class="fas fa-headset"></i></div>
        <div class="info">
          <h4>ElevateEdge Support</h4>
          <span><i class="fas fa-circle" style="color:#25D366;font-size:0.5rem;margin-right:4px;"></i> Online — Ready to help</span>
        </div>
      </div>
      <div class="chat-messages" id="chat-messages">
        <div class="chat-msg bot">How can we help your business today? 😊</div>
      </div>
      <div class="chat-input-area">
        <input type="text" id="chat-input" placeholder="Type a message..." autocomplete="off" />
        <button id="chat-send" aria-label="Send"><i class="fas fa-paper-plane"></i></button>
      </div>
    </div>
  `;
}

export function initChatWidget() {
  const toggle = document.getElementById('chat-toggle');
  const box = document.getElementById('chat-box');
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  const messages = document.getElementById('chat-messages');

  if (!toggle || !box) return;

  toggle.addEventListener('click', () => {
    box.classList.toggle('open');
    toggle.classList.toggle('open');

    const icon = toggle.querySelector('i');
    if (box.classList.contains('open')) {
      icon.className = 'fas fa-times';
      input?.focus();
    } else {
      icon.className = 'fas fa-comment-dots';
    }
  });

  function sendMessage() {
    const text = input?.value?.trim();
    if (!text) return;

    // User message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user';
    userMsg.textContent = text;
    messages.appendChild(userMsg);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    // Bot response after a short delay
    setTimeout(() => {
      const botMsg = document.createElement('div');
      botMsg.className = 'chat-msg bot';
      botMsg.textContent = getResponse(text);
      messages.appendChild(botMsg);
      messages.scrollTop = messages.scrollHeight;
    }, 600);
  }

  sendBtn?.addEventListener('click', sendMessage);
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
}
