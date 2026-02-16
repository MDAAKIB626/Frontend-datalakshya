import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./navbarlogo/navbarlogo01.jpg";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isExamActive = location.pathname.startsWith("/exam");
  const isCourseActive = location.pathname.startsWith("/training");

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar shadow-sm">
      <div className="container-fluid">

        {/* LOGO + BRAND */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={logo} alt="Logo" className="brand-logo" />
          <h4 className="Navbar-text">
            <span className="brand-main">DATA</span>
            <span className="brand-highlight">LAKSHYA</span>
          </h4>
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {/* Home */}
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/") ? "active-link" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>

            {/* LakshyaAI */}
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/blog") ? "active-link" : ""}`}
                to="/blog"
              >
                LakshyaAI
              </Link>
            </li>

            {/* Exams */}
            <li className="nav-item dropdown">
              <Link
                className={`nav-link dropdown-toggle ${
                  isExamActive ? "active-link" : ""
                }`}
                to="#"
                data-bs-toggle="dropdown"
              >
                Exams
              </Link>

              <ul className="dropdown-menu fade-menu">
                <li>
                  <Link
                    className={`dropdown-item ${
                      isActive("/exam/gateda") ? "active-dropdown" : ""
                    }`}
                    to="/exam/gateda"
                  >
                    GATE DA (Data Science & AI)
                  </Link>
                </li>

                <li>
                  <Link
                    className={`dropdown-item ${
                      isActive("/exam/gatecs") ? "active-dropdown" : ""
                    }`}
                    to="/exam/gatecs"
                  >
                    GATE CS (Computer Science & IT)
                  </Link>
                </li>

                <li>
                  <Link
                    className={`dropdown-item ${
                      isActive("/exam/ugenet") ? "active-dropdown" : ""
                    }`}
                    to="/exam/ugenet"
                  >
                    UGC NET Computer Science
                  </Link>
                </li>
              </ul>
            </li>

            {/* Courses */}
            <li className="nav-item dropdown">
              <Link
                className={`nav-link dropdown-toggle ${
                  isCourseActive ? "active-link" : ""
                }`}
                to="#"
                data-bs-toggle="dropdown"
              >
                Courses
              </Link>

              <ul className="dropdown-menu fade-menu">
                <li>
                  <Link className={`dropdown-item ${isActive("/training/ai") ? "active-dropdown" : ""}`} to="/training/ai">
                    Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item ${isActive("/training/ml") ? "active-dropdown" : ""}`} to="/training/ml">
                    Machine Learning
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item ${isActive("/training/dataanalytics") ? "active-dropdown" : ""}`} to="/training/dataanalytics">
                    Data Analytics
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item ${isActive("/training/datascience") ? "active-dropdown" : ""}`} to="/training/datascience">
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item ${isActive("/training/DeepLearning") ? "active-dropdown" : ""}`} to="/training/DeepLearning">
                    Deep Learning
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item ${isActive("/training/powerbi") ? "active-dropdown" : ""}`} to="/training/powerbi">
                    Power BI
                  </Link>
                </li>
              </ul>
            </li>

            {/* TestUp */}
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/test") ? "active-link" : ""}`}
                to="/test"
              >
                Lakshya TestUp
              </Link>
            </li>

      
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
