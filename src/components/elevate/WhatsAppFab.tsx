"use client";

import { useEffect, useState } from "react";

export function WhatsAppFab() {
  const [shifted, setShifted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.querySelector(".services-section");
      if (!servicesSection) {
        setShifted(true);
        return;
      }
      const rect = servicesSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.5) {
        setShifted(true);
      } else {
        setShifted(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/923205719979"
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-fab ${shifted ? "shifted" : ""}`}
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      <span className="tooltip">Chat with us on WhatsApp!</span>
    </a>
  );
}
