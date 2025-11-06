

// src/pages/training/PowerBI.js
import React from "react";
import "./PowerBi.css";

const PowerBI = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-warning fw-bold mb-4">
        Power BI Training Program
      </h1>

      <p className="lead text-muted text-center mb-5">
        Transform data into interactive insights!  
        This Power BI course helps you master business intelligence,  
        data modeling, and visualization — empowering you to create impactful dashboards and reports.
      </p>

      {/* About the Course */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">📘 About the Program</h3>
        <p>
          Power BI is Microsoft’s powerful Business Intelligence (BI) tool used for transforming
          raw data into visually engaging and interactive reports.  
          This course teaches you how to connect, model, and visualize data to drive data-driven decisions
          across organizations.
        </p>
      </div>

      {/* Skills Covered */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🧠 Key Skills You Will Learn</h3>
        <ul>
          <li>Data Import and Data Transformation using Power Query</li>
          <li>Building Data Models and Relationships</li>
          <li>Creating Interactive Dashboards and Reports</li>
          <li>Using DAX (Data Analysis Expressions) for Calculations</li>
          <li>Connecting Power BI to Excel, SQL Server, and Web APIs</li>
          <li>Publishing and Sharing Reports in Power BI Service</li>
          <li>Implementing Row-Level Security (RLS)</li>
        </ul>
      </div>

      {/* Course Curriculum */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">📚 Course Curriculum Overview</h3>
        <ul>
          <li>Module 1: Introduction to Power BI & BI Concepts</li>
          <li>Module 2: Power Query – Data Cleaning & Transformation</li>
          <li>Module 3: Data Modeling & Relationships</li>
          <li>Module 4: Introduction to DAX – Calculated Columns & Measures</li>
          <li>Module 5: Building Dashboards and Interactive Visualizations</li>
          <li>Module 6: Power BI Service – Publishing & Collaboration</li>
          <li>Module 7: Real-Time Data & Power BI Integration with Cloud</li>
          <li>Module 8: Capstone Project – End-to-End Business Dashboard</li>
        </ul>
      </div>

      {/* Tools & Technologies */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🛠️ Tools & Technologies Covered</h3>
        <ul>
          <li>Microsoft Power BI Desktop</li>
          <li>Power BI Service & Power BI Mobile</li>
          <li>Power Query & M Language</li>
          <li>DAX (Data Analysis Expressions)</li>
          <li>Microsoft Excel & SQL Server</li>
          <li>Azure Data & Cloud Integration</li>
        </ul>
      </div>

      {/* Career Opportunities */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🎯 Career Opportunities After Training</h3>
        <ul>
          <li>Power BI Developer</li>
          <li>Data Visualization Specialist</li>
          <li>Business Intelligence Analyst</li>
          <li>Reporting Analyst</li>
          <li>Data Analyst</li>
        </ul>
      </div>

      {/* Preparation Tips */}
      <div className="text-center">
        <h4 className="fw-bold text-success">🚀 Preparation & Learning Tips</h4>
        <ul className="list-unstyled">
          <li>• Learn Excel formulas and pivot tables — it helps in DAX understanding.</li>
          <li>• Explore real datasets from Kaggle or open data portals.</li>
          <li>• Practice creating dashboards for different domains (Sales, HR, Finance).</li>
          <li>• Experiment with DAX measures and calculated columns.</li>
          <li>• Publish your dashboards to Power BI Service and share them.</li>
          <li>• Keep exploring new Power BI visuals and community resources.</li>
        </ul>
      </div>
    </div>
  );
};

export default PowerBI;
