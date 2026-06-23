"use client";

import { useEffect, useState } from "react";
import { useScrollReveal } from "../useScrollReveal";

interface Partner {
  id: number;
  contactInfo: string;
  inviteCode: string;
  createdAt: string;
  referralCount?: number;
}

interface CareerPageProps {
  onNavigate: (path: string) => void;
}

export function CareerPage({ onNavigate }: CareerPageProps) {
  useScrollReveal();
  const [isSignupMode, setIsSignupMode] = useState(true);
  const [contactInput, setContactInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [partner, setPartner] = useState<Partner | null>(null);
  const [error, setError] = useState("");
  const [updateContact, setUpdateContact] = useState("");
  const [updating, setUpdating] = useState(false);

  // Auto-login from localStorage
  useEffect(() => {
    const savedContact = localStorage.getItem("partner_contact");
    if (savedContact) {
      autoLogin(savedContact);
    }
  }, []);

  const autoLogin = async (contact: string) => {
    try {
      const res = await fetch(
        `/api/partners/${encodeURIComponent(contact)}?by=contact`
      );
      if (res.ok) {
        const data = await res.json();
        showDashboard(data);
      }
    } catch (e) {
      console.error("Auto-login failed", e);
    }
  };

  const showDashboard = (p: Partner) => {
    setPartner(p);
    setUpdateContact(p.contactInfo);
    localStorage.setItem("partner_contact", p.contactInfo);
  };

  const handleLogout = () => {
    localStorage.removeItem("partner_contact");
    setPartner(null);
    setContactInput("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const contact = contactInput.trim();
    if (!contact) return;

    // Super Admin Backdoor
    if (contact === "16609123456789") {
      localStorage.setItem("admin_logged_in", "true");
      onNavigate("/admin");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact_info: contact,
          mode: isSignupMode ? "signup" : "signin",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "An error occurred.");
        setSubmitting(false);
        return;
      }

      showDashboard(data);
    } catch (err) {
      console.error("Portal Error:", err);
      setError("An error occurred. Check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdateContact = async () => {
    if (!partner || !updateContact.trim()) return;
    setUpdating(true);
    try {
      const res = await fetch(`/api/partners/${partner.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact_info: updateContact.trim() }),
      });
      if (!res.ok) {
        alert("Failed to update. Contact info might be taken.");
        return;
      }
      const updated = await res.json();
      alert("Contact info updated successfully for Profit Sharing!");
      localStorage.setItem("partner_contact", updated.contactInfo);
      setPartner({ ...partner, contactInfo: updated.contactInfo });
    } catch (err) {
      alert("Failed to update. Contact info might be taken.");
    } finally {
      setUpdating(false);
    }
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
              <i className="fas fa-briefcase"></i> Join Our Mission
            </div>
            <h1>
              <span className="gradient-text">Build Your Career</span>
              <br />
              With ElevateEdge
            </h1>
            <p className="hero-sub">
              Become a strategic partner and earn by connecting businesses with
              premium digital solutions. No technical skills required — just
              your passion for growth.
            </p>
          </div>
        </div>
      </section>

      {!partner && (
        <section
          className="career-model-section career-section contact-section"
          style={{
            background:
              "linear-gradient(180deg, rgba(168, 85, 247,0.04) 0%, var(--bg) 100%)",
            borderTop: "1px solid rgba(168, 85, 247,0.15)",
            borderBottom: "1px solid rgba(168, 85, 247,0.15)",
          }}
        >
          <div className="container">
            <div
              className="section-header reveal"
              style={{ marginBottom: "40px" }}
            >
              <h2>
                Partner <span className="gradient-text">Portal</span>
              </h2>
              <p>
                Generate your unique Invitation Code or login to view your
                referrals and step-by-step guidance.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-form reveal-left">
                <h3
                  id="portal-form-title"
                  style={{ marginBottom: "24px", fontSize: "1.3rem" }}
                >
                  <i
                    className="fas fa-user-plus"
                    style={{ color: "var(--primary)", marginRight: "10px" }}
                  ></i>
                  {isSignupMode ? "Partner Signup" : "Partner Sign In"}
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label id="contact-label" htmlFor="p-contact">
                      {isSignupMode
                        ? "WhatsApp or LinkedIn (For Signup)"
                        : "Enter Registered WhatsApp or LinkedIn"}
                    </label>
                    <input
                      type="text"
                      id="p-contact"
                      placeholder="e.g. +923001234567 or linkedin.com/in/johndoe"
                      value={contactInput}
                      onChange={(e) => setContactInput(e.target.value)}
                      required
                    />
                  </div>
                  {error && (
                    <p
                      style={{
                        color: "#e74c3c",
                        fontSize: "0.85rem",
                        marginBottom: "12px",
                      }}
                    >
                      {error}
                    </p>
                  )}
                  <div
                    className="form-group"
                    style={{
                      background: "rgba(168, 85, 247, 0.05)",
                      padding: "15px",
                      borderRadius: "var(--radius-md)",
                      border: "1px dashed rgba(168, 85, 247, 0.3)",
                    }}
                  >
                    <p
                      id="portal-info-text"
                      style={{
                        fontSize: "0.85rem",
                        color: "#a0a0a0",
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      <i
                        className={`fas ${
                          isSignupMode ? "fa-info-circle" : "fa-key"
                        }`}
                        style={{ color: "var(--primary)", marginRight: "6px" }}
                      ></i>
                      {isSignupMode
                        ? " We will generate a unique Invitation Code for you. Our team will only contact you for payment on "
                        : " Use your registered contact info to access your Invitation Code and track referrals."}
                      {isSignupMode && (
                        <strong style={{ color: "#fff" }}>completed</strong>
                      )}
                      {isSignupMode && " orders."}
                    </p>
                  </div>
                  <button
                    type="submit"
                    id="portal-submit-btn"
                    className="btn btn-primary btn-pulse form-submit"
                    style={{ width: "100%" }}
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i> Processing...
                      </>
                    ) : isSignupMode ? (
                      <>
                        <i className="fas fa-rocket"></i> Access Portal
                      </>
                    ) : (
                      <>
                        <i className="fas fa-sign-in-alt"></i> Sign In to Portal
                      </>
                    )}
                  </button>

                  <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      <span id="portal-toggle-msg">
                        {isSignupMode
                          ? "Already have an account?"
                          : "Don't have an account?"}
                      </span>
                      <a
                        href="javascript:void(0)"
                        id="portal-toggle-btn"
                        style={{
                          color: "var(--primary)",
                          fontWeight: 600,
                          textDecoration: "none",
                          marginLeft: "5px",
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsSignupMode(!isSignupMode);
                          setError("");
                        }}
                      >
                        {isSignupMode ? "Sign In" : "Sign Up"}
                      </a>
                    </p>
                  </div>
                </form>
              </div>

              <div className="contact-info reveal-right">
                <div className="contact-card">
                  <div className="icon-box">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div>
                    <h4>Zero Upfront Cost</h4>
                    <p>
                      No investment needed. Just share our portfolio and start
                      earning commissions immediately.
                    </p>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="icon-box">
                    <i className="fas fa-wallet"></i>
                  </div>
                  <div>
                    <h4>Unlimited Earnings</h4>
                    <p>
                      There is no cap on commissions. The more clients you
                      bring, the more you earn.
                    </p>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="icon-box">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <div>
                    <h4>Full Agency Support</h4>
                    <p>
                      We handle the work — you pitch &amp; close. Our premium
                      team backs every project you bring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Portal Dashboard */}
      {partner && (
        <section
          id="portal-dashboard-section"
          className="career-section"
          style={{ background: "var(--bg)" }}
        >
          <div className="container">
            <div
              className="portal-card"
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                background: "var(--bg-card)",
                padding: "40px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div id="portal-dashboard" style={{ textAlign: "center" }}>
                <h3 style={{ marginBottom: "10px" }}>Your Dashboard</h3>
                <p
                  style={{ color: "#a0a0a0", marginBottom: "20px" }}
                >
                  Share this code with your clients.
                </p>
                <div
                  style={{
                    background: "rgba(168, 85, 247, 0.1)",
                    border: "1px dashed var(--primary)",
                    padding: "15px",
                    borderRadius: "var(--radius-md)",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--primary)",
                    }}
                    id="dashboard-code"
                  >
                    {partner.inviteCode}
                  </span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "center", gap: "20px" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                      id="dashboard-referrals"
                    >
                      {partner.referralCount || 0}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#a0a0a0" }}>
                      Referrals Used
                    </div>
                  </div>
                </div>
                <button
                  id="portal-logout"
                  className="btn btn-outline btn-pulse"
                  style={{
                    marginTop: "24px",
                    padding: "10px 20px",
                    fontSize: "0.9rem",
                  }}
                  onClick={handleLogout}
                >
                  <i className="fas fa-sign-out-alt"></i> Log Out
                </button>
                <div
                  style={{
                    marginTop: "20px",
                    paddingTop: "20px",
                    borderTop: "1px solid var(--border)",
                    textAlign: "left",
                  }}
                >
                  <h4 style={{ marginBottom: "10px", fontSize: "1rem" }}>
                    <i
                      className="fas fa-edit"
                      style={{ color: "var(--primary)", marginRight: "8px" }}
                    ></i>
                    Update Contact Info
                  </h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#a0a0a0",
                      marginBottom: "12px",
                    }}
                  >
                    We will use this WhatsApp number or LinkedIn for contact of
                    profit sharing.
                  </p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <input
                      type="text"
                      id="update-contact-val"
                      className="form-control"
                      style={{
                        flex: 1,
                        padding: "10px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border)",
                        color: "#fff",
                        borderRadius: "var(--radius-sm)",
                      }}
                      value={updateContact}
                      onChange={(e) => setUpdateContact(e.target.value)}
                    />
                    <button
                      id="update-contact-btn"
                      className="btn btn-primary btn-pulse"
                      style={{ padding: "10px 20px" }}
                      onClick={handleUpdateContact}
                      disabled={updating}
                    >
                      {updating ? (
                        <i className="fas fa-spinner fa-spin"></i>
                      ) : (
                        <>
                          <i className="fas fa-save"></i> Save
                        </>
                      )}
                    </button>
                  </div>
                </div>
                {/* Steps Guidance */}
                <div
                  style={{
                    marginTop: "30px",
                    paddingTop: "24px",
                    borderTop: "1px solid var(--border)",
                    textAlign: "left",
                  }}
                >
                  <h3 style={{ marginBottom: "6px" }}>
                    <i
                      className="fas fa-route"
                      style={{ color: "var(--primary)", marginRight: "8px" }}
                    ></i>
                    How It Works
                  </h3>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "#a0a0a0",
                      marginBottom: "24px",
                    }}
                  >
                    Follow these steps to earn with ElevateEdge.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 0,
                    }}
                  >
                    {[
                      {
                        num: "01",
                        title: "Identify Opportunities",
                        desc: "Explore Google Maps or visit local businesses in your area. Look for brands that need a professional edge or a digital boost.",
                      },
                      {
                        num: "02",
                        title: "Showcase Our Agency",
                        desc: "Show them the ElevateEdge portfolio. Demonstrate how our premium designs and strategies can double their growth.",
                      },
                      {
                        num: "03",
                        title: "Close the Deal",
                        desc: "Negotiate your own pricing. Provide your unique Invitation Code to your client so they enter it on the Order Now page.",
                      },
                      {
                        num: "04",
                        title: "Submit & Profit",
                        desc: "Our system attributes the project to you. We'll contact you for your payout once the order is fully completed and paid!",
                      },
                    ].map((step, i) => (
                      <div key={i}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div
                            style={{
                              minWidth: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              background: "var(--primary)",
                              color: "#fff",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: 700,
                              fontSize: "0.9rem",
                            }}
                          >
                            {step.num}
                          </div>
                          <div>
                            <h4 style={{ margin: "0 0 4px" }}>{step.title}</h4>
                            <p
                              style={{
                                fontSize: "0.85rem",
                                color: "#a0a0a0",
                                margin: 0,
                              }}
                            >
                              {step.desc}
                            </p>
                          </div>
                        </div>
                        {i < 3 && (
                          <div
                            style={{
                              width: "2px",
                              height: "24px",
                              background:
                                "linear-gradient(180deg,var(--primary),transparent)",
                              marginLeft: "19px",
                            }}
                          ></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section
        className="career-benefits career-section"
        style={{ background: "var(--bg-surface)" }}
      >
        <div className="container">
          <div
            className="about-grid"
            style={{
              gap: "clamp(60px, 10vw, 120px)",
              alignItems: "flex-start",
            }}
          >
            <div className="about-text reveal-left">
              <h2>
                Why Partner With{" "}
                <span className="gradient-text">ElevateEdge?</span>
              </h2>
              <p style={{ marginBottom: "40px" }}>
                We provide the technical expertise, you provide the connection.
                It&apos;s a win-win partnership built on quality and trust.
              </p>

              <div className="about-values" style={{ gap: "24px" }}>
                {[
                  {
                    icon: "fa-wallet",
                    title: "Unlimited Earnings",
                    desc: "The more businesses you help, the more you earn. There is no cap on your potential.",
                  },
                  {
                    icon: "fa-user-shield",
                    title: "Premium Quality",
                    desc: "You can pitch with confidence knowing our team delivers world-class results every time.",
                  },
                  {
                    icon: "fa-clock",
                    title: "Work Your Way",
                    desc: "Choose your own hours and your own clients. Be your own boss while supported by an agency.",
                  },
                  {
                    icon: "fa-chart-line",
                    title: "Skill Growth",
                    desc: "Develop valuable skills in sales, marketing, and relationship management.",
                  },
                ].map((v, i) => (
                  <div className="value-card" key={i}>
                    <i className={`fas ${v.icon}`}></i>
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-visual reveal-right">
              <div
                className="contact-card"
                style={{
                  background: "var(--bg-card)",
                  padding: "clamp(30px, 5vw, 60px)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <h3 style={{ marginBottom: "20px", fontSize: "1.5rem" }}>
                  Ready to Onboard?
                </h3>
                <p
                  style={{
                    marginBottom: "32px",
                    lineHeight: 1.8,
                    width: "100%",
                  }}
                >
                  Message us to get our official rate card and start your
                  journey as an ElevateEdge Associate. Our team is ready to
                  support your first deal.
                </p>
                <a
                  href="https://wa.me/923205719979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-pulse"
                  style={{
                    background: "#25D366",
                    width: "100%",
                    maxWidth: "280px",
                    justifyContent: "center",
                    padding: "18px",
                    marginTop: "auto",
                  }}
                >
                  <i className="fab fa-whatsapp"></i> Chat With Onboarding
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container reveal">
          <h2>Already Have a Client?</h2>
          <p>
            If you&apos;ve already closed a deal, head over to the project
            submission page to get started.
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
