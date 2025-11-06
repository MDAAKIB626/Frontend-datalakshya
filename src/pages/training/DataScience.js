// src/pages/training/DataScience.js
import React from "react";
import "./Datascience.css";

const DataScience = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary fw-bold mb-4">
        Data Science Training Program
      </h1>

      <p className="lead text-muted text-center mb-5">
        Master the art of turning raw data into powerful insights!  
        This comprehensive Data Science program covers Python, Machine Learning,  
        Statistics, and Data Visualization to prepare you for real-world analytics roles.
      </p>

      {/* About the Course */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">📘 About the Program</h3>
        <p>
          The Data Science course is designed to help learners understand how to
          process, visualize, and analyze data. It combines theory and hands-on
          projects to teach essential concepts such as Python programming,
          Machine Learning algorithms, and data-driven decision-making.
        </p>
      </div>

      {/* Skills Covered */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🧠 Key Skills You Will Learn</h3>
        <ul>
          <li>Python Programming for Data Science</li>
          <li>Statistical Analysis & Hypothesis Testing</li>
          <li>Data Cleaning and Preprocessing</li>
          <li>Exploratory Data Analysis (EDA)</li>
          <li>Machine Learning (Supervised & Unsupervised)</li>
          <li>Deep Learning with TensorFlow / Keras</li>
          <li>Data Visualization using Power BI & Matplotlib</li>
        </ul>
      </div>

      {/* Course Modules */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">📚 Course Curriculum Overview</h3>
        <ul>
          <li>Module 1: Python for Data Science</li>
          <li>Module 2: Statistics & Probability</li>
          <li>Module 3: Data Wrangling with Pandas & NumPy</li>
          <li>Module 4: Machine Learning Algorithms</li>
          <li>Module 5: Deep Learning & Neural Networks</li>
          <li>Module 6: Data Visualization & Storytelling</li>
          <li>Module 7: Capstone Project (Real-World Data)</li>
        </ul>
      </div>

      {/* Tools & Technologies */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🛠️ Tools & Technologies Covered</h3>
        <ul>
          <li>Python, Jupyter Notebook</li>
          <li>Pandas, NumPy, Scikit-learn</li>
          <li>TensorFlow, Keras</li>
          <li>Power BI, Tableau</li>
          <li>SQL & Excel for Data Handling</li>
        </ul>
      </div>

      {/* Career Opportunities */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🎯 Career Opportunities After Training</h3>
        <ul>
          <li>Data Scientist</li>
          <li>Machine Learning Engineer</li>
          <li>AI Researcher</li>
          <li>Business Intelligence Analyst</li>
          <li>Data Engineer</li>
        </ul>
      </div>

      {/* Preparation Tips */}
      <div className="text-center">
        <h4 className="fw-bold text-success">🚀 Preparation & Learning Tips</h4>
        <ul className="list-unstyled">
          <li>• Learn Python thoroughly before diving into ML.</li>
          <li>• Practice with open datasets (Kaggle, UCI ML Repository).</li>
          <li>• Build small projects regularly (EDA, Regression models).</li>
          <li>• Revise math foundations: Linear Algebra, Probability, Statistics.</li>
          <li>• Participate in Data Science hackathons & competitions.</li>
        </ul>
      </div>
    </div>
  );
};

export default DataScience;
