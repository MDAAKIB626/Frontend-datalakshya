import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaYoutube,
  FaTelegram
} from "react-icons/fa"; // <-- added phone & email icons
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* About Section */}
        <div className="footer-section">
          <h1>Data Lakshya</h1>
          <div>
           <Link to="/blog" className="footer-link">
       <h3>Data Lakshya AI</h3></Link>
       <Link to="/exam/gateda" className="no-link-style">
        <h3>Competitive Exams</h3>
         </Link>
           <Link to="/training/dataanalytics " className="no-link-style"  >AI Courses </Link>
           
          </div>
        </div>

         


        {/* Follow US */}
        <div className="footer-section">
          <h1>Follow US</h1>
          <div>
              <div className="social-icons">
          
          
            <a
              href="https://www.instagram.com/datalakshya_1729?igsh=ZnQ1N3Z0ZHVmaWV1&utm_source=ig_contact_invite"
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
             <a
              href="https://youtube.com/@datalakshya?si=GGwUNV3VAbC7ATF3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
             <a
              href="https://t.me/iitgateda_dl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>

           
          </div>
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
       
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright © 2025. All Rights Reserved  </p>
      </div>
    </footer>
  );
};

export default Footer;
