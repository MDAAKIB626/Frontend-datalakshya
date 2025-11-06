import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
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
            <h3>Artificial Intelligent</h3>
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
          <div className="social-icons">
            <Link to="#"><FaFacebookF /></Link>
            <Link to="#"><FaTwitter /></Link>
            <Link to="#"><FaInstagram /></Link>
            <Link to="#"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
