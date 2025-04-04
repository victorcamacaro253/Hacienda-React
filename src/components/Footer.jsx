import React from 'react';
import '../Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <button className="back-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          Back to Top
        </button>

        <nav className="footer-links">
          <a href="/">Home</a>
          <a href="/history">History</a>
          <a href="/breeds">Breeds</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </nav>

        <div className="footer-social">
          <span>Follow us on:</span>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook </a> | 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter </a> | 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram </a>
        </div>

        <div className="newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;