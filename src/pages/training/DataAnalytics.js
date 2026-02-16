import React, { useState } from "react";
import "./DataAnalytics.css";

const DataAnalytics = () => {
  const [activeTab, setActiveTab] = useState("foundations");

  return (
    <div className="da-wrapper">

      {/* ================= HERO ================= */}
      <section className="da-hero">
        <div className="da-hero-left">
          <span className="tag">#IndustryOriented</span>
          <h1>Data Analytics Training Program</h1>
          <p>
            Learn how to collect, clean, analyze, and visualize data to support
            real business decisions using industry-standard tools.
          </p>

          <button className="buy-btn">Enroll Now</button>
          <p className="emi">Internship & Placement Guidance</p>
        </div>

        <div className="da-hero-right">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="data-analytics"
          />
        </div>
      </section>

      {/* ================= INFO BAR ================= */}
      <section className="da-info">
        <div><b>Live Training</b><br />Mentor Led</div>
        <div><b>Apr 2026</b><br />Start Date</div>
        <div><b>4 Months</b><br />Duration</div>
        <div><b>Online / Offline</b><br />Mode</div>
        <div><b>English / Hinglish</b><br />Language</div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="da-about">
        <div className="about-left">
          <h2>About Data Analytics Program</h2>
          <ul>
            <li>Industry-focused analytics curriculum</li>
            <li>80% practical, real datasets</li>
            <li>Business case studies</li>
            <li>Dashboard & reporting skills</li>
            <li>Interview-oriented training</li>
          </ul>
        </div>

        <div className="about-right">
          <img
            src="https://images.unsplash.com/photo-1556155092-8707de31f9c4"
            alt="about-data-analytics"
          />
        </div>
      </section>

      {/* ================= OFFERINGS ================= */}
      <section className="da-offerings">
        <h2>What This Program Offers</h2>

        <div className="offer-grid">
          <div>Excel for Analytics</div>
          <div>SQL for Business Queries</div>
          <div>Data Cleaning</div>
          <div>EDA Techniques</div>
          <div>Power BI / Tableau</div>
          <div>Python for Analysis</div>
          <div>Business KPIs</div>
          <div>Capstone Project</div>
        </div>
      </section>

      {/* ================= CURRICULUM ================= */}
      <section className="da-curriculum">
        <div className="tabs">
          {[
            ["foundations", "Analytics Foundations"],
            ["excel", "Excel"],
            ["sql", "SQL"],
            ["viz", "Data Visualization"],
            ["python", "Python"],
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
              <li>What is Data Analytics </li>
              <li>Analytics vs Data Science </li>
              <li>Types of Analytics </li>
              <li>Business Use Cases </li>
              <li>Analytics Workflow </li>
            </ul>
          )}

          {activeTab === "excel" && (
            <ul>
              <li>Excel Basics & Functions </li>
              <li>Pivot Tables </li>
              <li>Dashboards </li>
              <li>Reports Automation </li>
            </ul>
          )}

          {activeTab === "sql" && (
            <ul>
              <li>SELECT, WHERE </li>
              <li>JOINS </li>
              <li>GROUP BY & HAVING </li>
              <li>Subqueries </li>
            </ul>
          )}

          {activeTab === "viz" && (
            <ul>
              <li>Power BI Basics </li>
              <li>Tableau Fundamentals </li>
              <li>Interactive Dashboards </li>
            </ul>
          )}

          {activeTab === "python" && (
            <ul>
              <li>Pandas & NumPy </li>
              <li>Data Cleaning </li>
              <li>EDA with Python </li>
            </ul>
          )}

          {activeTab === "projects" && (
            <ul>
              <li>Sales Dashboard Project </li>
              <li>Customer Analysis </li>
              <li>Business KPI Dashboard </li>
            </ul>
          )}
        </div>
      </section>

    </div>
  );
};

export default DataAnalytics;
