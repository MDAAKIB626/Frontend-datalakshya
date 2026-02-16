import React, { useState } from "react";
import "./ML.css";

const MachineLearning = () => {
  const [activeTab, setActiveTab] = useState("foundations");

  return (
    <div className="ml-wrapper">

      {/* ================= HERO ================= */}
      <section className="ml-hero">
        <div className="ml-hero-left">
          <span className="tag">#AIReady</span>
          <h1>Machine Learning Training Program</h1>
          <p>
            Learn how to build intelligent systems using Machine Learning,
            Python, and real-world datasets with hands-on projects.
          </p>

          <button className="buy-btn">Enroll Now</button>
          <p className="emi">Internship & Placement Guidance</p>
        </div>

        <div className="ml-hero-right">
          <img
            src="https://images.openai.com/static-rsc-3/SkBJsmYj2Dps4yisSGQf7IierM0RWtVQ6Eeqh-GWQ1dKjTQsVGWPigmEqgD6cx6UjPMlcVxKLjzwgrPh8QRmjuSsKfmHzjjQJ9p-YAMLII0?purpose=fullsize&v=1"
            alt="machine-learning"
          />
        </div>
      </section>

      {/* ================= INFO BAR ================= */}
      <section className="ml-info">
        <div><b>Live Training</b><br />Mentor Led</div>
        <div><b>May 2026</b><br />Start Date</div>
        <div><b>5 Months</b><br />Duration</div>
        <div><b>Online / Offline</b><br />Mode</div>
        <div><b>English / Hinglish</b><br />Language</div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="ml-about">
        <div className="about-left">
          <h2>About Machine Learning Program</h2>
          <ul>
            <li>Strong ML & AI foundations</li>
            <li>Hands-on model building</li>
            <li>Real-world datasets</li>
            <li>Industry use cases</li>
            <li>Interview-focused preparation</li>
          </ul>
        </div>

        <div className="about-right">
          <img
            src="https://images.unsplash.com/photo-1581091215367-59ab6b0a6b9c"
            alt="about-ml"
          />
        </div>
      </section>

      {/* ================= OFFERINGS ================= */}
      <section className="ml-offerings">
        <h2>What This Program Offers</h2>

        <div className="offer-grid">
          <div>Python for ML</div>
          <div>Statistics & Probability</div>
          <div>Supervised Learning</div>
          <div>Unsupervised Learning</div>
          <div>Model Evaluation</div>
          <div>Scikit-learn</div>
          <div>Feature Engineering</div>
          <div>Capstone Project</div>
        </div>
      </section>

      {/* ================= CURRICULUM ================= */}
      <section className="ml-curriculum">
        <div className="tabs">
          {[
            ["foundations", "ML Foundations"],
            ["python", "Python"],
            ["supervised", "Supervised ML"],
            ["unsupervised", "Unsupervised ML"],
            ["advanced", "Advanced ML"],
            ["projects", "Projects"],
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
              <li>What is Machine Learning </li>
              <li>AI vs ML vs DL </li>
              <li>ML Workflow </li>
              <li>Types of ML </li>
              <li>Real-world Applications </li>
            </ul>
          )}

          {activeTab === "python" && (
            <ul>
              <li>Python Basics </li>
              <li>NumPy & Pandas </li>
              <li>Data Preprocessing </li>
            </ul>
          )}

          {activeTab === "supervised" && (
            <ul>
              <li>Linear Regression </li>
              <li>Logistic Regression </li>
              <li>Decision Trees </li>
              <li>Random Forest </li>
            </ul>
          )}

          {activeTab === "unsupervised" && (
            <ul>
              <li>K-Means Clustering </li>
              <li>Hierarchical Clustering </li>
              <li>PCA </li>
            </ul>
          )}

          {activeTab === "advanced" && (
            <ul>
              <li>Model Tuning </li>
              <li>Cross Validation </li>
              <li>Overfitting & Underfitting </li>
            </ul>
          )}

          {activeTab === "projects" && (
            <ul>
              <li>House Price Prediction </li>
              <li>Customer Churn Prediction </li>
              <li>ML Capstone Project </li>
            </ul>
          )}
        </div>
      </section>

    </div>
  );
};

export default MachineLearning;
