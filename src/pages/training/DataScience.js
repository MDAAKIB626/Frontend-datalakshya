import React, { useState } from "react";
import "./Datascience.css";

const DataScience = () => {
  const [activeTab, setActiveTab] = useState("foundations");

  return (
    <div className="ds-wrapper">

      {/* ================= HERO ================= */}
      <section className="ds-hero">
        <div className="ds-hero-left">
          <span className="tag">#Bestseller</span>
          <h1>Data Science With Generative AI</h1>
          <p>
            Become an industry-ready Data Scientist. Learn Machine Learning,
            NLP, and Generative AI with real-world projects.
          </p>

          <button className="buy-btn">Buy Now</button>
          <p className="emi">EMI Options Available</p>
        </div>

        <div className="ds-hero-right">
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
            alt="data-science"
          />
        </div>
      </section>

      {/* ================= INFO BAR ================= */}
      <section className="ds-info">
        <div><b>Job Assistance</b><br />For Pro Plan</div>
        <div><b>16 Feb 2026</b><br />Start Date</div>
        <div><b>8 Months</b><br />Duration</div>
        <div><b>Live</b><br />Mode</div>
        <div><b>Hinglish</b><br />Language</div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="ds-about">
        <div className="about-left">
          <h2>About Data Science With Generative AI</h2>
          <ul>
            <li>Industry Professional Led Sessions</li>
            <li>Career Assistance</li>
            <li>Learn Industry Skills</li>
            <li>Project Portfolio</li>
            <li>Dedicated Peer Network</li>
          </ul>
        </div>

        <div className="about-right">
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
            alt="about-data-science"
          />
        </div>
      </section>

      {/* ================= OFFERINGS ================= */}
      <section className="ds-offerings">
        <h2>Exclusive Course Offerings</h2>

        <div className="offer-grid">
          <div>Industry-Oriented Curriculum</div>
          <div>Comprehensive Learning</div>
          <div>Weekend Live Sessions</div>
          <div>Capstone Project</div>
          <div>Practice Exercises</div>
          <div>Assignments & Projects</div>
          <div>Certification</div>
          <div>Career Guidance</div>
          <div>Email Support</div>
          <div>SME Support Session</div>
        </div>
      </section>

      {/* ================= CURRICULUM ================= */}
      <section className="ds-curriculum">
        <div className="tabs">
          {[
            ["foundations", "DS Foundations"],
            ["python", "Python"],
            ["stats", "Statistics"],
            ["ml", "Machine Learning"],
            ["sql", "SQL"],
            ["mlops", "MLOps"],
          ].map(([key, label]) => (
            <button
              key={key}
              className={activeTab === key ? "active" : ""}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="curriculum-box">

          {activeTab === "foundations" && (
            <ul>
              <li>What is Data Science </li>
              <li>Roles & Skills in Data Science </li>
              <li>DS Lifecycle </li>
              <li>Industry Use Cases </li>
            </ul>
          )}

          {activeTab === "python" && (
            <ul>
              <li>Python Basics </li>
              <li>NumPy & Pandas </li>
              <li>Data Analysis </li>
            </ul>
          )}

          {activeTab === "stats" && (
            <ul>
              <li>Statistics Fundamentals </li>
              <li>Probability </li>
              <li>Hypothesis Testing </li>
            </ul>
          )}

          {activeTab === "ml" && (
            <ul>
              <li>Supervised Learning </li>
              <li>Unsupervised Learning </li>
              <li>Model Evaluation </li>
            </ul>
          )}

          {activeTab === "sql" && (
            <ul>
              <li>SQL Basics </li>
              <li>Joins & Subqueries </li>
              <li>Business Queries </li>
            </ul>
          )}

          {activeTab === "mlops" && (
            <ul>
              <li>Model Deployment </li>
              <li>CI/CD Pipelines </li>
              <li>Monitoring & Scaling </li>
            </ul>
          )}

        </div>
      </section>

    </div>
  );
};

export default DataScience;
