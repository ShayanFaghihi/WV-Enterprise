"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const overflow = isOpen ? "hidden" : "auto";

    document.body.style.overflow = overflow;
    document.documentElement.style.overflow = overflow;
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
      document.documentElement.style.overflowX = "hidden";
    };
  }, [isOpen]);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <header
          className={`border-b bg-white/95 backdrop-blur-sm transition-all duration-300 ${
            isScrolled ? "py-0 shadow-md" : "py-1"
          }`}
        >
          <div className="container mx-auto px-6 flex justify-between items-center transition-all duration-300">
            <div className="flex items-center gap-2">
              <img
                src="images/logos/logo.webp"
                alt="WV Development Logo"
                className={`transition-all duration-300 ${
                  isScrolled ? "h-12 md:h-16" : "h-14 md:h-20"
                }`}
              />
            </div>
            <nav
              className={`hidden md:flex transition-all duration-300 ${
                isScrolled ? "gap-6" : "gap-8"
              }`}
            >
              <a
                href="#services"
                className="text-lg hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-lg hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-lg hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-lg hover:text-primary transition-colors"
              >
                Contact
              </a>
              <a
                href="/capability.pdf"
                target="_blank"
                className="text-lg hover:text-primary transition-colors"
              >
                Capability Statement
              </a>
            </nav>
            <Button
              asChild
              className={`hidden md:flex transition-all duration-300 ${
                isScrolled ? "px-4 py-2 text-sm" : "px-6 py-3"
              }`}
            >
              <a href="mailto:info@theslvcompanies.com?subject=Project Inquiry">
                Get Started
              </a>
            </Button>
            {/* Mobile Menu */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                style={{
                  display: isOpen ? "none" : "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <img
                  className={`transition-all duration-300 ${
                    isScrolled ? "h-7" : "h-8"
                  }`}
                  src="/images/menus.png"
                  alt="Open Menu"
                />
              </button>

              <div
                aria-hidden={!isOpen}
                onClick={() => setIsOpen(false)}
                style={{
                  position: "fixed",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.35)",
                  opacity: isOpen ? 1 : 0,
                  visibility: isOpen ? "visible" : "hidden",
                  transition: "opacity 0.3s ease, visibility 0.3s ease",
                  pointerEvents: isOpen ? "auto" : "none",
                  zIndex: 60,
                }}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "90vw",
                    maxWidth: "360px",
                    height: "100vh",
                    boxSizing: "border-box",
                    backgroundColor: "#ffffff",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    transform: isOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.3s ease",
                    boxShadow: "-8px 0 24px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    style={{
                      alignSelf: "flex-end",
                      background: "transparent",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      marginBottom: "32px",
                    }}
                  >
                    <img
                      className="h-8"
                      src="/images/cancel.png"
                      alt="Close Menu"
                    />
                  </button>

                  <nav
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <a
                      href="#services"
                      className="text-lg hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </a>
                    <a
                      href="#projects"
                      className="text-lg hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Projects
                    </a>
                    <a
                      href="#about"
                      className="text-lg hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </a>
                    <a
                      href="#contact"
                      className="text-lg hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </a>
                    <a
                      href="/capability.pdf"
                      target="_blank"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      Capability Statement
                    </a>
                  </nav>

                  <div style={{ marginTop: "32px" }}>
                    <Button asChild className="w-full">
                      <a
                        href="mailto:info@theslvcompanies.com?subject=Project Inquiry"
                        onClick={() => setIsOpen(false)}
                      >
                        Get Started
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
