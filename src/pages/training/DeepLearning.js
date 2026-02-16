import React, { useState } from "react";
import "./Datascience.css"; // same CSS reuse kar sakte ho

const DeepLearning = () => {
  const [activeTab, setActiveTab] = useState("foundations");

  return (
    <div className="ds-wrapper">

      {/* ================= HERO ================= */}
      <section className="ds-hero">
        <div className="ds-hero-left">
          <span className="tag">#AIAdvanced</span>
          <h1>Deep Learning & Artificial Intelligence</h1>
          <p>
            Master Neural Networks, Computer Vision, NLP and build
            real-world AI systems using TensorFlow & PyTorch.
          </p>

          <button className="buy-btn">Enroll Now</button>
          <p className="emi">Internship & Placement Assistance</p>
        </div>

        <div className="ds-hero-right">
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
            alt="deep-learning"
          />
        </div>
      </section>

      {/* ================= INFO BAR ================= */}
      <section className="ds-info">
        <div><b>Job Assistance</b><br />Pro Plan</div>
        <div><b>April 2026</b><br />Start Date</div>
        <div><b>6 Months</b><br />Duration</div>
        <div><b>Live + Recorded</b><br />Mode</div>
        <div><b>English / Hinglish</b><br />Language</div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="ds-about">
        <div className="about-left">
          <h2>About Deep Learning Program</h2>
          <ul>
            <li>Neural Network Foundations</li>
            <li>Hands-on AI Model Building</li>
            <li>Computer Vision & NLP</li>
            <li>Industry Projects</li>
            <li>Portfolio & Interview Prep</li>
          </ul>
        </div>

        <div className="about-right">
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
            alt="about-deep-learning"
          />
        </div>
      </section>

      {/* ================= OFFERINGS ================= */}
      <section className="ds-offerings">
        <h2>Exclusive Course Offerings</h2>

        <div className="offer-grid">
          <div>Artificial Neural Networks</div>
          <div>TensorFlow & PyTorch</div>
          <div>Computer Vision</div>
          <div>Natural Language Processing</div>
          <div>Transfer Learning</div>
          <div>Model Optimization</div>
          <div>Capstone AI Project</div>
          <div>Career Support</div>
        </div>
      </section>

      {/* ================= CURRICULUM ================= */}
      <section className="ds-curriculum">
        <div className="tabs">
          {[
            ["foundations", "DL Foundations"],
            ["nn", "Neural Networks"],
            ["cnn", "CNN"],
            ["rnn", "RNN & LSTM"],
            ["nlp", "NLP"],
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
              <li>Introduction to Deep Learning</li>
              <li>ML vs DL</li>
              <li>Perceptron Model</li>
              <li>Activation Functions</li>
              <li>Backpropagation</li>
            </ul>
          )}

          {activeTab === "nn" && (
            <ul>
              <li>Artificial Neural Networks</li>
              <li>Loss Functions</li>
              <li>Optimizers (SGD, Adam)</li>
            </ul>
          )}

          {activeTab === "cnn" && (
            <ul>
              <li>Convolution Layers</li>
              <li>Image Classification</li>
              <li>Transfer Learning</li>
            </ul>
          )}

          {activeTab === "rnn" && (
            <ul>
              <li>Sequential Data</li>
              <li>LSTM & GRU</li>
              <li>Time Series Forecasting</li>
            </ul>
          )}

          {activeTab === "nlp" && (
            <ul>
              <li>Text Preprocessing</li>
              <li>Word Embeddings</li>
              <li>Sentiment Analysis</li>
            </ul>
          )}

          {activeTab === "projects" && (
            <ul>
              <li>Face Recognition System</li>
              <li>AI Chatbot Development</li>
              <li>Deep Learning Capstone Project</li>
            </ul>
          )}

        </div>
      </section>

    </div>
  );
};

export default DeepLearning;
