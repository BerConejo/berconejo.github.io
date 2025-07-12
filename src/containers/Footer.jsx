import React from "react";
import { FaArrowUp } from "react-icons/fa";
import "../assets/styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer_container">
        <button onClick={scrollToTop} className="footer_scroll-top">
          <FaArrowUp className="footer_scroll-icon" />
        </button>

        <div className="footer_content">
          <div className="footer_header">
            <h3 className="footer_title">Let's Create Something Amazing</h3>
            <p className="footer_description">
              Always excited to work on new projects and collaborate with
              talented people.
            </p>
          </div>

          <div className="footer_bottom">
            <p className="footer_copyright">
              <span></span>
              <span>Bernal Bogantes Conejo</span>
            </p>
            <p className="footer_year">© 2025 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
