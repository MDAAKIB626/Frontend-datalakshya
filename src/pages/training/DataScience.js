import React from "react";
import "./Datascience.css";

const DataScience = () => {
  return (
    <div className="container py-5 ds-page">

      {/* TITLE */}
      <h1 className="text-center text-primary fw-bold mb-4">
        Data Science – Industry Oriented Training Program
      </h1>

      {/* INTRO */}
      <p className="lead text-muted text-center mb-5">
        This Data Science program is designed as per
        <strong> real industry and company requirements</strong>.
        Learn how to work with <strong>real datasets, machine learning models,</strong>
        and <strong>business-driven analytics problems</strong> used in real companies.
      </p>

      {/* ABOUT */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">📘 About the Program</h3>
        <p>
          This program prepares you for roles such as
          <strong> Data Scientist, Machine Learning Engineer, and AI Analyst</strong>.
          You will gain hands-on experience with
          <strong> Python, Statistics, Machine Learning, and Deep Learning</strong>
          along with real-world case studies.
        </p>
      </div>

      {/* COURSE DETAILS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">📋 Course Details (Real)</h3>
        <ul>
          <li><strong>Duration:</strong> 5 – 7 Months</li>
          <li><strong>Mode:</strong> Online / Offline</li>
          <li><strong>Prerequisites:</strong> Python Basics, 12th Level Maths</li>
          <li><strong>Level:</strong> Beginner → Advanced</li>
          <li><strong>Hands-on:</strong> 75% Practical, 25% Theory</li>
        </ul>
      </div>

      {/* SKILLS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">🧠 Skills You Will Actually Learn</h3>
        <ul>
          <li>Python for Data Science</li>
          <li>Data Cleaning & Feature Engineering</li>
          <li>Exploratory Data Analysis (EDA)</li>
          <li>Statistics & Probability for Data Science</li>
          <li>Machine Learning Algorithms</li>
          <li>Model Evaluation & Optimization</li>
          <li>Deep Learning with Neural Networks</li>
          <li>Data Storytelling & Business Insights</li>
        </ul>
      </div>

      {/* CURRICULUM */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">📚 Real-World Curriculum</h3>
        <ul>
          <li>Python Programming for Data Science</li>
          <li>Statistics, Probability & Linear Algebra</li>
          <li>Data Wrangling with Pandas & NumPy</li>
          <li>Machine Learning (Regression, Classification, Clustering)</li>
          <li>Advanced ML (Ensemble Models)</li>
          <li>Deep Learning (ANN, CNN Basics)</li>
          <li>Data Visualization & Storytelling</li>
          <li>Capstone Project with Real Business Data</li>
        </ul>
      </div>

      {/* TOOLS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">🛠️ Tools Used in Industry</h3>
        <ul>
          <li>Python, Jupyter Notebook</li>
          <li>Pandas, NumPy, Scikit-learn</li>
          <li>TensorFlow, Keras</li>
          <li>Power BI / Tableau</li>
          <li>SQL & Excel</li>
          <li>Git & GitHub</li>
        </ul>
      </div>

      {/* PROJECTS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">💼 Real Projects (Hands-On)</h3>
        <ul>
          <li>Customer Churn Prediction System</li>
          <li>Sales Forecasting Model</li>
          <li>Credit Risk Analysis</li>
          <li>Recommendation System</li>
          <li>End-to-End Data Science Capstone Project</li>
        </ul>
      </div>

      {/* CAREER */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">🎯 Career Opportunities</h3>
        <ul>
          <li>Data Scientist</li>
          <li>Machine Learning Engineer</li>
          <li>AI Engineer</li>
          <li>Business Intelligence Analyst</li>
          <li>Data Analyst (Advanced)</li>
        </ul>
      </div>

      {/* OUTCOMES */}
      <div className="text-center">
        <h4 className="fw-bold text-success"> What You Will Be Able To Do</h4>
        <ul className="list-unstyled">
          <li>• Work with real-world datasets</li>
          <li>• Build ML & Data Science pipelines</li>
          <li>• Deploy models for real use cases</li>
          <li>• Crack Data Science fresher interviews</li>
        </ul>
      </div>

    </div>
  );
};

export default DataScience;
