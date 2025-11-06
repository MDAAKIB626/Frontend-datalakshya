// src/pages/training/DataAnalytics.js
import React from "react";
import "./DataAnalytics.css";

const DataAnalytics = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary fw-bold mb-4">
        Data Analytics Training Program
      </h1>

      <p className="lead text-muted text-center mb-5">
        Learn how to collect, analyze, and visualize data to make smarter
        business decisions. Gain hands-on experience in tools like Excel,
        SQL, Power BI, and Python.
      </p>

      {/* About the Course */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">📘 About the Program</h3>
        <p>
          This Data Analytics course equips learners with the skills to
          transform raw data into actionable insights. You’ll learn the entire
          analytics process — from data cleaning and visualization to applying
          statistical models for decision-making.
        </p>
      </div>

      {/* Skills Covered */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🧠 Key Skills You Will Learn</h3>
        <ul>
          <li>Data Cleaning and Preprocessing</li>
          <li>Exploratory Data Analysis (EDA)</li>
          <li>Data Visualization using Power BI & Tableau</li>
          <li>SQL for Data Analytics</li>
          <li>Python for Data Handling (Pandas, NumPy)</li>
          <li>Statistical Analysis and Hypothesis Testing</li>
          <li>Business Analytics with Case Studies</li>
        </ul>
      </div>

      {/* Course Modules */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">📚 Course Curriculum Overview</h3>
        <ul>
          <li>Introduction to Data Analytics</li>
          <li>Excel for Data Analytics</li>
          <li>Data Visualization Tools (Power BI / Tableau)</li>
          <li>SQL for Data Management</li>
          <li>Python for Data Analysis</li>
          <li>Statistical Techniques & Predictive Analytics</li>
          <li>Capstone Project using Real-World Data</li>
        </ul>
      </div>

      {/* Tools & Technologies */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🛠️ Tools & Technologies Covered</h3>
        <ul>
          <li>Microsoft Excel</li>
          <li>SQL / MySQL</li>
          <li>Python (NumPy, Pandas, Matplotlib)</li>
          <li>Power BI / Tableau</li>
          <li>Google Sheets</li>
        </ul>
      </div>

      {/* Career Opportunities */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🎯 Career Opportunities After Training</h3>
        <ul>
          <li>Data Analyst / Business Analyst</li>
          <li>Data Visualization Specialist</li>
          <li>BI (Business Intelligence) Developer</li>
          <li>Reporting Analyst</li>
          <li>Market Research Analyst</li>
        </ul>
      </div>

      {/* Learning Outcomes */}
      <div className="text-center">
        <h4 className="fw-bold text-success">🚀 Learning Outcomes</h4>
        <ul className="list-unstyled">
          <li>• Understand the data analysis process from end to end.</li>
          <li>• Use tools like Excel, Power BI, and SQL to analyze data.</li>
          <li>• Create dashboards and business reports for decision-making.</li>
          <li>• Work on real datasets for hands-on project experience.</li>
        </ul>
      </div>
    </div>
  );
};

export default DataAnalytics;
