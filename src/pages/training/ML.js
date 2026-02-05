import React from "react";
import "./ML.css";

const ML = () => {
  return (
    <div className="container py-5 ml-page">

      {/* TITLE */}
      <h1 className="text-center text-success fw-bold mb-4">
        Machine Learning (ML) – Industry Oriented Training
      </h1>

      {/* INTRO */}
      <p className="lead text-muted text-center mb-5">
        This Machine Learning program is designed according to
        <strong> real-world industry requirements</strong> and focuses on
        <strong> data-driven model building, evaluation, and deployment</strong>
        using modern ML tools and techniques.
      </p>

      {/* ABOUT */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">📘 About the Program</h3>
        <p>
          This ML training program is built for students and developers who want
          to work as <strong>Machine Learning Engineers or Data Scientists</strong>.
          The course emphasizes <strong>practical coding, mathematics behind ML</strong>,
          and <strong>real industry-style projects</strong>.
        </p>
      </div>

      {/* COURSE DETAILS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">📋 Course Details (Real)</h3>
        <ul>
          <li><strong>Duration:</strong> 3 – 5 Months</li>
          <li><strong>Mode:</strong> Online / Offline</li>
          <li><strong>Prerequisites:</strong> Python Basics, 12th Level Maths</li>
          <li><strong>Level:</strong> Beginner → Intermediate</li>
          <li><strong>Hands-on:</strong> 75% Practical, 25% Theory</li>
        </ul>
      </div>

      {/* SKILLS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">🧠 Skills You Will Actually Learn</h3>
        <ul>
          <li>Python for Machine Learning</li>
          <li>Data Cleaning & Feature Engineering</li>
          <li>Supervised Learning (Regression, Classification)</li>
          <li>Unsupervised Learning (Clustering, PCA)</li>
          <li>Model Evaluation & Optimization</li>
          <li>Bias–Variance Tradeoff</li>
          <li>Hyperparameter Tuning</li>
          <li>ML Model Deployment (Flask / Streamlit)</li>
        </ul>
      </div>

      {/* CURRICULUM */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">📚 Real-World Curriculum</h3>
        <ul>
          <li>Introduction to Machine Learning & Use Cases</li>
          <li>Statistics & Probability for ML</li>
          <li>Data Preprocessing & Feature Scaling</li>
          <li>Regression Algorithms (Linear, Polynomial)</li>
          <li>Classification Algorithms (Logistic, KNN, SVM)</li>
          <li>Decision Trees & Random Forest</li>
          <li>Clustering (K-Means, Hierarchical)</li>
          <li>Model Evaluation & Cross Validation</li>
          <li>ML Model Deployment</li>
        </ul>
      </div>

      {/* TOOLS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">🛠️ Tools Used in Industry</h3>
        <ul>
          <li>Python 3.x</li>
          <li>NumPy, Pandas, Matplotlib, Seaborn</li>
          <li>Scikit-learn</li>
          <li>Jupyter Notebook / Google Colab</li>
          <li>Flask / Streamlit</li>
          <li>Git & GitHub</li>
        </ul>
      </div>

      {/* PROJECTS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">💼 Real Projects (Hands-On)</h3>
        <ul>
          <li>House Price Prediction System</li>
          <li>Spam Email Detection</li>
          <li>Customer Churn Prediction</li>
          <li>Credit Card Fraud Detection</li>
          <li>Movie Recommendation System</li>
        </ul>
      </div>

      {/* CAREER */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">🎯 Career Opportunities</h3>
        <ul>
          <li>Machine Learning Engineer (Fresher)</li>
          <li>Data Analyst</li>
          <li>Junior Data Scientist</li>
          <li>AI / ML Developer</li>
          <li>Research Assistant</li>
        </ul>
      </div>

      {/* OUTCOME */}
      <div className="text-center">
        <h4 className="fw-bold text-success"> What You Will Be Able To Do</h4>
        <ul className="list-unstyled">
          <li>• Build ML models from scratch</li>
          <li>• Work with real datasets</li>
          <li>• Evaluate & optimize ML models</li>
          <li>• Deploy ML models as web apps</li>
          <li>• Crack ML fresher interviews</li>
        </ul>
      </div>

    </div>
  );
};

export default ML;
