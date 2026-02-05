// src/pages/training/AI.js
import React from "react";
import "./AI.css";

const AI = () => {
  return (
    <div className="container py-5 ai-page">

      <h1 className="text-center text-primary fw-bold mb-4">
        Artificial Intelligence (AI) – Industry Oriented Training
      </h1>

      <p className="lead text-muted text-center mb-5">
        This Artificial Intelligence program is designed as per
        <strong> real industry requirements</strong> and focuses on
        <strong> Machine Learning, Deep Learning, NLP, Computer Vision</strong>,
        and <strong> real-world AI project development</strong>.
      </p>

      {/* ABOUT */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">📘 About the Program</h3>
        <p>
          This AI training program is built for students and developers who want
          to work in real AI-based companies. The course focuses on
          <strong> practical coding, mathematical foundations, model building</strong>,
          and <strong> deployment-ready AI solutions</strong>.
        </p>
      </div>

      {/* COURSE DETAILS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">📋 Course Details (Real)</h3>
        <ul>
          <li><strong>Duration:</strong> 4 – 6 Months</li>
          <li><strong>Mode:</strong> Online / Offline</li>
          <li><strong>Prerequisites:</strong> Basic Python, Maths (12th level)</li>
          <li><strong>Level:</strong> Beginner → Advanced</li>
          <li><strong>Hands-on:</strong> 70% Practical, 30% Theory</li>
        </ul>
      </div>

      {/* REAL SKILLS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">🧠 Skills You Will Actually Learn</h3>
        <ul>
          <li>Python for AI (NumPy, Pandas, Matplotlib)</li>
          <li>Statistics & Probability for ML</li>
          <li>Machine Learning Algorithms (Regression, Classification)</li>
          <li>Model Evaluation, Bias–Variance Tradeoff</li>
          <li>Deep Learning with Neural Networks</li>
          <li>NLP – Text Classification, Chatbots</li>
          <li>Computer Vision – Image Classification</li>
          <li>Model Deployment using Flask / FastAPI</li>
        </ul>
      </div>

      {/* REAL CURRICULUM */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">📚 Real-World Curriculum</h3>
        <ul>
          <li>AI Fundamentals & Industry Use Cases</li>
          <li>Linear Algebra & Probability for AI</li>
          <li>Python for Data Science</li>
          <li>Machine Learning (Scikit-learn)</li>
          <li>Deep Learning (ANN, CNN basics)</li>
          <li>NLP (Text Processing, Sentiment Analysis)</li>
          <li>Computer Vision (Image Classification)</li>
          <li>AI Model Deployment</li>
          <li>Capstone Project (Industry-style)</li>
        </ul>
      </div>

      {/* TOOLS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">🛠️ Tools Used in Industry</h3>
        <ul>
          <li>Python 3.x</li>
          <li>NumPy, Pandas, Matplotlib</li>
          <li>Scikit-learn</li>
          <li>TensorFlow / Keras (Basics)</li>
          <li>Jupyter Notebook & Google Colab</li>
          <li>Git & GitHub</li>
        </ul>
      </div>

      {/* REAL PROJECTS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">💼 Real Projects (Hands-On)</h3>
        <ul>
          <li>House Price Prediction System</li>
          <li>Spam Email Detection</li>
          <li>Customer Churn Prediction</li>
          <li>Movie Recommendation System</li>
          <li>AI Chatbot (Basic NLP)</li>
        </ul>
      </div>

      {/* CAREER */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">🎯 Career Opportunities</h3>
        <ul>
          <li>AI / ML Engineer (Fresher Level)</li>
          <li>Data Analyst</li>
          <li>Junior Data Scientist</li>
          <li>Python AI Developer</li>
          <li>Research Assistant (AI)</li>
        </ul>
      </div>

      {/* OUTCOMES */}
      <div className="text-center">
        <h4 className="fw-bold text-success"> What You Will Be Able To Do</h4>
        <ul className="list-unstyled">
          <li>• Build AI & ML models from scratch</li>
          <li>• Work with real datasets</li>
          <li>• Deploy AI models as web APIs</li>
          <li>• Crack AI/ML fresher interviews</li>
        </ul>
      </div>

    </div>
  );
};

export default AI;
