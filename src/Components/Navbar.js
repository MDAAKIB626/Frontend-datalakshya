// src/Components/Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./navbarlogo/navbarlogo01.jpg";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" className="brand-logo" />
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/") ? "active-link" : ""}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/blog") ? "active-link" : ""}`} to="/blog">LakshyaAI</Link>
            </li>
              
            {/*  Exam Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="examDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                 Exams
              </Link>
              <ul className="dropdown-menu fade-menu" aria-labelledby="examDropdown">
                <li><Link className="dropdown-item" to="/exam/gateda">GATE DA (Data Science & AI)</Link></li>
                <li><Link className="dropdown-item" to="/exam/gatecs">GATE CS(Computer Science & IT)</Link></li>
                <li><Link className="dropdown-item" to="/exam/ugenet">UGCNET CS(Computer Science)</Link></li>
              </ul>
            </li>

            {/* Training Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="trainingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </Link>
              <ul className="dropdown-menu fade-menu" aria-labelledby="trainingDropdown">
                <li><Link className="dropdown-item" to="/training/ai">Artificial Intelligence</Link></li>
                <li><Link className="dropdown-item" to="/training/ml">Machine Learning</Link></li>
                <li><Link className="dropdown-item" to="/training/dataanalytics">Data Analytics</Link></li>
                <li><Link className="dropdown-item" to="/training/datascience">Data Science</Link></li>
                <li><Link className="dropdown-item" to="/training/powerbi">Power BI</Link></li>
              </ul>
            </li>
          </ul>
        </div>
         <Link className={`nav-link test-link ${isActive("/test") ? "active-link" : ""}`} to="/test">Lakshya TestUp</Link>

       <Link className={`nav-link contact-link ${isActive("/contact") ? "active-link" : ""}`} to="/contact">Contact Us</Link>


      </div>
    </nav>
  );
};

export default Navbar;
