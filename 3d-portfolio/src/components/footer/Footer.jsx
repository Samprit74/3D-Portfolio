import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>© 2025 Samprit Roy</p>
        <div className="footer-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:sampritroy99@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
