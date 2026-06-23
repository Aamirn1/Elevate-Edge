"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "../useScrollReveal";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
  sortOrder: number | null;
}

interface PortfolioPageProps {
  onNavigate: (path: string) => void;
}

function formatDesc5Words(desc: string) {
  if (!desc) return "";
  const words = desc.split(" ");
  const result: string[] = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i]);
    if ((i + 1) % 5 === 0) {
      result.push("\n");
    }
  }
  return result.join(" ");
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  useScrollReveal();
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setProjects(data);
      })
      .catch((err) => console.warn("Failed to fetch projects", err));
  }, []);

  const total = projects.length;

  const goToSlide = (n: number) => {
    if (total === 0) return;
    setCurrentSlide(((n % total) + total) % total);
  };

  useEffect(() => {
    if (total === 0) return;
    autoSlideRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % total);
    }, 5000);
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [total]);

  const pauseAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
  };
  const resumeAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % total);
    }, 5000);
  };

  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    pauseAutoSlide();
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
    }
    resumeAutoSlide();
  };

  return (
    <>
      <section
        className="hero"
        style={{ minHeight: "50vh", padding: "160px 0 60px" }}
      >
        <div className="hero-bg">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-grid"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fas fa-briefcase"></i> Our Work
            </div>
            <h1>
              <span className="gradient-text">Check Out Our</span>
              <br />
              Recent Projects
            </h1>
            <p className="hero-sub">
              We&apos;ve helped businesses across industries build their online
              presence. Here&apos;s a glimpse of our work.
            </p>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-slider">
            <div
              className="portfolio-track"
              id="portfolio-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onMouseEnter={pauseAutoSlide}
              onMouseLeave={resumeAutoSlide}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {projects.map((p) => (
                <div className="portfolio-slide" key={p.id}>
                  <div className="slide-img">
                    <img src={p.image} alt={p.title} loading="lazy" />
                  </div>
                  <div className="slide-info">
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        flexWrap: "wrap",
                        marginBottom: "12px",
                      }}
                    >
                      {(p.tags || []).map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: "rgba(168, 85, 247,0.12)",
                            color: "var(--primary-light)",
                            padding: "4px 12px",
                            borderRadius: "20px",
                            fontSize: "0.78rem",
                            fontWeight: 500,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3>{p.title}</h3>
                    <p style={{ whiteSpace: "pre-line" }}>
                      {formatDesc5Words(p.description)}
                    </p>
                    {p.url && p.url !== "#" && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ marginTop: "8px" }}
                      >
                        <i className="fas fa-external-link-alt"></i> Visit
                        Website
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="slider-controls">
            <button
              className="slider-btn"
              aria-label="Previous"
              onClick={() => {
                goToSlide(currentSlide - 1);
                pauseAutoSlide();
                setTimeout(resumeAutoSlide, 5000);
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="slider-dots" id="slider-dots">
              {projects.map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot ${i === currentSlide ? "active" : ""}`}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => {
                    goToSlide(i);
                    pauseAutoSlide();
                    setTimeout(resumeAutoSlide, 5000);
                  }}
                ></button>
              ))}
            </div>
            <button
              className="slider-btn"
              aria-label="Next"
              onClick={() => {
                goToSlide(currentSlide + 1);
                pauseAutoSlide();
                setTimeout(resumeAutoSlide, 5000);
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container reveal">
          <h2>Want Results Like These?</h2>
          <p>
            Let us build a stunning website and run powerful campaigns for your
            business.
          </p>
          <a
            href="#/contact"
            className="btn btn-primary btn-pulse"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("/contact");
            }}
          >
            <i className="fas fa-bolt"></i> Order Now
          </a>
        </div>
      </section>
    </>
  );
}
