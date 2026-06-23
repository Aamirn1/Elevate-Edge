"use client";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/923205719979"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      <span className="tooltip">Chat with us on WhatsApp!</span>
    </a>
  );
}
