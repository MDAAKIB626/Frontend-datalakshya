import React, { useState } from "react";
import "./AI.css";

const AI = () => {
  const [activeTab, setActiveTab] = useState("foundations");

  return (
    <div className="ai-wrapper">

      {/* ================= HERO ================= */}
      <section className="ai-hero">
        <div className="ai-hero-left">
          <span className="tag">#IndustryReady</span>
          <h1>Artificial Intelligence Training Program</h1>
          <p>
            Learn Artificial Intelligence from scratch with hands-on experience
            in Machine Learning, Deep Learning, NLP, and Computer Vision.
          </p>

          <button className="buy-btn">Enroll Now</button>
          <p className="emi">Internship & Placement Support</p>
        </div>

        <div className="ai-hero-right">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            alt="Artificial Intelligence"
          />
        </div>
      </section>

      {/* ================= INFO BAR ================= */}
      <section className="ai-info">
        <div><b>Live Training</b><br />Mentor Led</div>
        <div><b>Mar 2026</b><br />Start Date</div>
        <div><b>5 Months</b><br />Duration</div>
        <div><b>Online</b><br />Mode</div>
        <div><b>English</b><br />Language</div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="ai-about">
        <div className="about-left">
          <h2>About AI Program</h2>
          <ul>
            <li>Industry-aligned AI curriculum</li>
            <li>Hands-on model building</li>
            <li>Strong ML & DL fundamentals</li>
            <li>Real-world AI use cases</li>
            <li>Interview & placement focused</li>
          </ul>
        </div>

        <div className="about-right">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
            alt="AI Training"
          />
        </div>
      </section>

      {/* ================= OFFERINGS ================= */}
      <section className="ai-offerings">
        <h2>What This AI Program Offers</h2>

        <div className="offer-grid">
          <div>Python Programming</div>
          <div>Maths for ML</div>
          <div>Machine Learning</div>
          <div>Deep Learning</div>
          <div>NLP</div>
          <div>Computer Vision</div>
          <div>Model Deployment</div>
          <div>Capstone Project</div>
        </div>
      </section>

      {/* ================= CURRICULUM ================= */}
      <section className="ai-curriculum">
        <div className="tabs">
          {[
            ["foundations", "AI Foundations"],
            ["python", "Python"],
            ["ml", "Machine Learning"],
            ["dl", "Deep Learning"],
            ["nlp", "NLP"],
            ["cv", "Computer Vision"],
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
              <li>What is Artificial Intelligence </li>
              <li>AI vs ML vs Deep Learning </li>
              <li>Applications of AI </li>
              <li>AI Development Lifecycle </li>
            </ul>
          )}

          {activeTab === "python" && (
            <ul>
              <li>Python Basics </li>
              <li>NumPy & Pandas </li>
              <li>Data Handling </li>
            </ul>
          )}

          {activeTab === "ml" && (
            <ul>
              <li>Supervised Learning </li>
              <li>Unsupervised Learning </li>
              <li>Model Evaluation </li>
            </ul>
          )}

          {activeTab === "dl" && (
            <ul>
              <li>Neural Networks </li>
              <li>TensorFlow / PyTorch </li>
              <li>CNN & RNN </li>
            </ul>
          )}

          {activeTab === "nlp" && (
            <ul>
              <li>Text Processing </li>
              <li>Sentiment Analysis </li>
              <li>Chatbot Basics </li>
            </ul>
          )}

          {activeTab === "cv" && (
            <ul>
              <li>Image Processing </li>
              <li>Object Detection </li>
              <li>OpenCV </li>
            </ul>
          )}

          {activeTab === "projects" && (
            <ul>
              <li>AI Chatbot Project </li>
              <li>Image Classification </li>
              <li>AI Capstone Project </li>
            </ul>
          )}

        </div>
      </section>

    </div>
  );
};

export default AI;
