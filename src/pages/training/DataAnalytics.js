import React from "react";
import "./DataAnalytics.css";

const DataAnalytics = () => {
  return (
    <div className="container py-5 data-page">

      {/* TITLE */}
      <h1 className="text-center text-primary fw-bold mb-4">
        Data Analytics – Industry Oriented Training Program
      </h1>

      {/* INTRO */}
      <p className="lead text-muted text-center mb-5">
        This Data Analytics training program is designed as per
        <strong> real business and industry requirements</strong>.
        Learn how to <strong>collect, clean, analyze, and visualize data</strong>
        to support data-driven decision making in real companies.
      </p>

      {/* ABOUT */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">📘 About the Program</h3>
        <p>
          This program prepares you for real-world roles such as
          <strong> Data Analyst, Business Analyst, and BI Analyst</strong>.
          You will work with <strong>real datasets, dashboards, and case studies</strong>
          used by companies for sales, marketing, finance, and operations.
        </p>
      </div>

      {/* COURSE DETAILS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">📋 Course Details (Real)</h3>
        <ul>
          <li><strong>Duration:</strong> 3 – 4 Months</li>
          <li><strong>Mode:</strong> Online / Offline</li>
          <li><strong>Prerequisites:</strong> Basic Computer Knowledge</li>
          <li><strong>Level:</strong> Beginner → Intermediate</li>
          <li><strong>Hands-on:</strong> 80% Practical, 20% Theory</li>
        </ul>
      </div>

      {/* SKILLS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">🧠 Skills You Will Actually Learn</h3>
        <ul>
          <li>Data Cleaning & Data Preprocessing</li>
          <li>Exploratory Data Analysis (EDA)</li>
          <li>Data Visualization & Dashboard Design</li>
          <li>SQL Queries for Business Analysis</li>
          <li>Excel for Reports & Automation</li>
          <li>Python for Data Analysis (Pandas, NumPy)</li>
          <li>Statistical Analysis & Hypothesis Testing</li>
          <li>Business & KPI Analysis</li>
        </ul>
      </div>

      {/* CURRICULUM */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">📚 Real-World Curriculum</h3>
        <ul>
          <li>Data Analytics Fundamentals & Use Cases</li>
          <li>Excel (Formulas, Pivot Tables, Dashboards)</li>
          <li>SQL (SELECT, JOIN, GROUP BY, Subqueries)</li>
          <li>Data Visualization (Power BI / Tableau)</li>
          <li>Python for Data Analysis</li>
          <li>EDA & Statistical Techniques</li>
          <li>Business Case Studies</li>
          <li>Capstone Project with Real Data</li>
        </ul>
      </div>

      {/* TOOLS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">🛠️ Tools Used in Industry</h3>
        <ul>
          <li>Microsoft Excel</li>
          <li>SQL / MySQL</li>
          <li>Python (Pandas, NumPy, Matplotlib)</li>
          <li>Power BI / Tableau</li>
          <li>Google Sheets</li>
        </ul>
      </div>

      {/* PROJECTS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">💼 Real Projects (Hands-On)</h3>
        <ul>
          <li>Sales Performance Dashboard</li>
          <li>Customer Behavior Analysis</li>
          <li>Marketing Campaign Analysis</li>
          <li>Financial Report Automation</li>
          <li>Business KPI Dashboard</li>
        </ul>
      </div>

      {/* CAREER */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">🎯 Career Opportunities</h3>
        <ul>
          <li>Data Analyst</li>
          <li>Business Analyst</li>
          <li>BI (Business Intelligence) Analyst</li>
          <li>Reporting Analyst</li>
          <li>Operations / Marketing Analyst</li>
        </ul>
      </div>

      {/* OUTCOMES */}
      <div className="text-center">
        <h4 className="fw-bold text-success"> What You Will Be Able To Do</h4>
        <ul className="list-unstyled">
          <li>• Analyze real business datasets</li>
          <li>• Build dashboards used by management</li>
          <li>• Answer business questions using data</li>
          <li>• Clear Data Analyst interviews (Fresher)</li>
        </ul>
      </div>

    </div>
  );
};

export default DataAnalytics;
