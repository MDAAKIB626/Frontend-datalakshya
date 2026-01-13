import React from "react";

const ML = () => {
  return (
    <div className="container mt-5 mb-5">

      {/* Title */}
      <h2 className="text-success fw-bold text-center mb-4">
        Machine Learning Training
      </h2>

      {/* Intro */}
      <p className="lead text-center text-muted mb-5">
        Our Machine Learning course is designed to help you master core ML
        concepts, algorithms, and tools used in real-world applications.
      </p>

      {/* Card Wrapper */}
      <div className="card shadow-sm p-4 mb-4">
        <h4 className="text-secondary fw-semibold mb-3">
          🔍 Course Overview
        </h4>
        <ul className="ps-3">
          <li>Understand supervised and unsupervised learning techniques.</li>
          <li>Implement models such as Regression, Decision Trees, and SVM.</li>
          <li>Learn data preprocessing, feature selection, and model evaluation.</li>
          <li>Work with libraries like Scikit-learn, TensorFlow, and PyTorch.</li>
        </ul>
      </div>

      <div className="card shadow-sm p-4 mb-4">
        <h4 className="text-secondary fw-semibold mb-3">
          🧠 Key Skills You’ll Gain
        </h4>
        <ul className="ps-3">
          <li>Python for Machine Learning</li>
          <li>Data Cleaning & Feature Engineering</li>
          <li>Model Selection & Hyperparameter Tuning</li>
          <li>ML Model Deployment (Flask / Streamlit)</li>
          <li>Performance Evaluation & Optimization</li>
        </ul>
      </div>

      <div className="card shadow-sm p-4 mb-4">
        <h4 className="text-secondary fw-semibold mb-3">
          🧰 Tools & Technologies
        </h4>
        <ul className="ps-3">
          <li>Python, NumPy, Pandas, Matplotlib</li>
          <li>Scikit-learn, TensorFlow, PyTorch</li>
          <li>Jupyter Notebook / Google Colab</li>
          <li>Git, GitHub, and APIs for ML integration</li>
        </ul>
      </div>

      <div className="card shadow-sm p-4 mb-4">
        <h4 className="text-secondary fw-semibold mb-3">
          💼 Real-World Projects
        </h4>
        <ul className="ps-3">
          <li>Predicting House Prices using Regression</li>
          <li>Spam Email Detection using Naive Bayes</li>
          <li>Customer Churn Prediction</li>
          <li>Image Classification using CNNs</li>
          <li>Movie Recommendation System</li>
        </ul>
      </div>

      <div className="alert alert-success text-center mt-4">
        🎯 <strong>Career Opportunities:</strong> Machine Learning Engineer,
        Data Scientist, AI Developer, Research Analyst
      </div>

    </div>
  );
};

export default ML;
