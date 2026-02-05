import React from "react";
import "./PowerBi.css";

const PowerBI = () => {
  return (
    <div className="container py-5 bi-page">

      {/* TITLE */}
      <h1 className="text-center text-warning fw-bold mb-4">
        Power BI – Industry Oriented Business Intelligence Training
      </h1>

      {/* INTRO */}
      <p className="lead text-muted text-center mb-5">
        This Power BI training program is designed according to
        <strong> real business intelligence and analytics requirements</strong>.
        Learn how companies use <strong>Power BI dashboards, DAX calculations,</strong>
        and <strong>data models</strong> to drive business decisions.
      </p>

      {/* ABOUT */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">📘 About the Program</h3>
        <p>
          Power BI is one of the most widely used <strong>Business Intelligence (BI)</strong> tools
          in enterprises. This program focuses on
          <strong> real corporate reporting, KPI dashboards, and management reports</strong>.
          You will work with datasets related to <strong>sales, finance, HR, and operations</strong>.
        </p>
      </div>

      {/* COURSE DETAILS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">📋 Course Details (Real)</h3>
        <ul>
          <li><strong>Duration:</strong> 1.5 – 2.5 Months</li>
          <li><strong>Mode:</strong> Online / Offline</li>
          <li><strong>Prerequisites:</strong> Basic Excel & Computer Knowledge</li>
          <li><strong>Level:</strong> Beginner → Intermediate</li>
          <li><strong>Hands-on:</strong> 80% Practical, 20% Theory</li>
        </ul>
      </div>

      {/* SKILLS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">🧠 Skills You Will Actually Learn</h3>
        <ul>
          <li>Data Cleaning & Transformation using Power Query</li>
          <li>Building Data Models & Relationships</li>
          <li>Creating Interactive Dashboards</li>
          <li>DAX Measures, Calculated Columns & KPIs</li>
          <li>Time Intelligence (YTD, MTD, YoY)</li>
          <li>Row Level Security (RLS)</li>
          <li>Performance Optimization of Reports</li>
          <li>Publishing & Sharing Reports via Power BI Service</li>
        </ul>
      </div>

      {/* CURRICULUM */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">📚 Real-World Curriculum</h3>
        <ul>
          <li>BI Fundamentals & Power BI Architecture</li>
          <li>Power Query (Data Cleaning & ETL)</li>
          <li>Data Modeling (Star Schema, Relationships)</li>
          <li>DAX Fundamentals & Advanced Measures</li>
          <li>KPIs, Filters, Slicers & Drill-through</li>
          <li>Dashboard Design Best Practices</li>
          <li>Power BI Service & Workspace Management</li>
          <li>Capstone Project – Business Dashboard</li>
        </ul>
      </div>

      {/* TOOLS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">🛠️ Tools Used in Industry</h3>
        <ul>
          <li>Power BI Desktop</li>
          <li>Power BI Service & Mobile</li>
          <li>Power Query & DAX</li>
          <li>Microsoft Excel</li>
          <li>SQL Server / MySQL</li>
          <li>Azure Data Sources</li>
        </ul>
      </div>

      {/* PROJECTS */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">💼 Real Projects (Hands-On)</h3>
        <ul>
          <li>Sales Performance Dashboard</li>
          <li>Financial KPI Dashboard</li>
          <li>HR Analytics Dashboard</li>
          <li>Supply Chain & Inventory Dashboard</li>
          <li>Executive Management Dashboard</li>
        </ul>
      </div>

      {/* CAREER */}
      <div className="mb-5">
        <h3 className="fw-semibold text-secondary">🎯 Career Opportunities</h3>
        <ul>
          <li>Power BI Developer</li>
          <li>Business Intelligence Analyst</li>
          <li>Data Analyst</li>
          <li>Reporting Analyst</li>
          <li>BI Consultant (Junior)</li>
        </ul>
      </div>

      {/* OUTCOMES */}
      <div className="text-center">
        <h4 className="fw-bold text-success"> What You Will Be Able To Do</h4>
        <ul className="list-unstyled">
          <li>• Build corporate-level dashboards</li>
          <li>• Write real DAX measures used in companies</li>
          <li>• Answer business questions using data</li>
          <li>• Clear Power BI / BI Analyst interviews</li>
        </ul>
      </div>

    </div>
  );
};

export default PowerBI;
