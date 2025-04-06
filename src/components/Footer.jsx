import React from 'react';
import '../Footer.css';
import { FaArrowUp, FaFacebook, FaTwitter, FaInstagram, FaPaw } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="footer-section newsletter-section">
          <h3 className="section-title">Stay Updated</h3>
          <p className="newsletter-description">Subscribe to our newsletter for the latest cat news and tips</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              required 
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe <FaPaw className="paw-icon" />
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="footer-section links-section">
          <h3 className="section-title">Quick Links</h3>
          <nav className="footer-links">
            <a href="/">Home</a>
            <a href="/history">History</a>
            <a href="/breeds">Breeds</a>
            <a href="/contact">Contact Us</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </nav>
        </div>

        {/* Social Media */}
        <div className="footer-section social-section">
          <h3 className="section-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

        {/* Back to Top */}
        <button className="back-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp className="arrow-icon" />
        </button>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Victor Camacaro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;