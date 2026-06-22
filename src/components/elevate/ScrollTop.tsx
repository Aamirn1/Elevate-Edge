"use client";

import { useEffect, useState } from "react";

interface ScrollTopProps {
  currentPath: string;
}

export function ScrollTop({ currentPath }: ScrollTopProps) {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isContactPage = currentPath === "/contact";
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const whatsappFab = document.querySelector(".whatsapp-fab");
      const isWhatsAppShifted = whatsappFab
        ? whatsappFab.classList.contains("shifted")
        : true;

      if (isContactPage) {
        const contactCards = document.querySelectorAll(".contact-card h4");
        let businessHoursReached = false;
        contactCards.forEach((h4) => {
          if (h4.textContent?.includes("Business Hours")) {
            const rect = h4.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
              businessHoursReached = true;
            }
          }
        });
        if (businessHoursReached && isWhatsAppShifted) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      } else {
        if (scrollTop > 300 && isWhatsAppShifted) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPath]);

  const handleClick = () => {
    setClicked(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setClicked(false), 800);
  };

  return (
    <button
      id="scroll-top"
      className={`scroll-top ${visible ? "visible" : ""} ${clicked ? "clicked" : ""}`}
      aria-label="Scroll to top"
      onClick={handleClick}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}
