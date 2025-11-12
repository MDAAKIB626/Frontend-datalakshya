import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa"; // <-- added phone & email icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* About Section */}
        <div className="footer-section">
          <h1>About</h1>
          <div>
            <h3>Our Mission</h3>
            <h3>Our Team</h3>
            <h3>News</h3>
            <h3>Impact</h3>
          </div>
        </div>

        {/* Courses Section */}
        <div className="footer-section">
          <h1>Courses</h1>
          <div>
            <h3>Artificial Intelligence</h3>
            <h3>Machine Learning</h3>
            <h3>Data Science</h3>
            <h3>Data Analytics</h3>
          </div>
        </div>

        {/* Get Involved Section */}
        <div className="footer-section">
          <h1>Get Involved</h1>
          <div>
            <h3>Donate</h3>
            <h3>Volunteer</h3>
            <h3>Careers</h3>
            <h3>Internships</h3>
          </div>
        </div>

        {/* Connect Section */}
        <div className="footer-section">
          <h1>Connect with us</h1>
          <div className="contact-info">
            <p>
              <FaPhoneAlt className="icon" /> +91 9559520191
            </p>
            <p>
              <FaEnvelope className="icon" /> info@datalakshya.com
            </p>
          </div>
          <div className="social-icons">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/data-lakshya/?viewAsMember=true/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright © 2025. All Rights Reserved ❤️ HandCrafted by Aakib</p>
      </div>
    </footer>
  );
};

export default Footer;
