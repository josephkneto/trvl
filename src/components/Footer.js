import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Footer.css";

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-subscription-heading">
        Join the Adventure newsletter to receive our best vacation deals
      </p>
      <p className="footer-subscription-text">
        You can unsubscribe at any time.
      </p>
      <div className="input-areas">
        <form>
          <input
            className="footer-input"
            name="email"
            type="email"
            placeholder="Your Email"
          />
          <Button buttonStyle="btn--outline">Subscribe</Button>
        </form>
      </div>
      <div className="footer-links">
        <ul className="footer-link-items">
          <h2>About us</h2>
          <Link to="/sign-up">How it works</Link>
          <Link to="/">Testimonials</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Investors</Link>
          <Link to="/">Terms of Service</Link>
        </ul>
        <ul className="footer-link-items">
          <h2>Contact Us</h2>
          <Link to="/">Contact</Link>
          <Link to="/">Support</Link>
          <Link to="/">Destinations</Link>
          <Link to="/">Sponsorships</Link>
        </ul>
        <ul className="footer-link-items">
          <h2>Videos</h2>
          <Link to="/">Submit Video</Link>
          <Link to="/">Ambassadors</Link>
          <Link to="/">Agency</Link>
          <Link to="/">Influencer</Link>
        </ul>
        <ul className="footer-link-items">
          <h2>Social Media</h2>
          <Link to="/">Instagram</Link>
          <Link to="/">Facebook</Link>
          <Link to="/">Youtube</Link>
          <Link to="/">Twitter</Link>
        </ul>
      </div>
      <section className="social-media">
        <Link to="/" className="social-logo" onClick={scrollTop}>
          TRVL
          <i class="fab fa-typo3" />
        </Link>
        <small class="website-rights">TRVL © 2020</small>
        <div className="social-icons">
          <Link
            class="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f" />
          </Link>
          <Link
            class="social-icon-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <i class="fab fa-instagram" />
          </Link>
          <Link
            class="social-icon-link youtube"
            to="/"
            target="_blank"
            aria-label="Youtube"
          >
            <i class="fab fa-youtube" />
          </Link>
          <Link
            class="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter" />
          </Link>
          <Link
            class="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;
