import React, { useState } from "react";
import "./PowerBi.css";

const PowerBI = () => {
  const [activeTab, setActiveTab] = useState("foundations");

  return (
    <div className="bi-wrapper">

      {/* ================= HERO ================= */}
      <section className="bi-hero">
        <div className="bi-hero-left">
          <span className="tag">#IndustryReady</span>
          <h1>Power BI Training Program</h1>
          <p>
            Become an industry-ready Power BI Developer. Learn data modeling,
            DAX, dashboards and business reporting with real-world projects.
          </p>

          <button className="buy-btn">Enroll Now</button>
          <p className="emi">Industry Projects & Career Support</p>
        </div>

        <div className="bi-hero-right">
          <img
            src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6"
            alt="power-bi"
          />
        </div>
      </section>

      {/* ================= INFO BAR ================= */}
      <section className="bi-info">
        <div><b>Hands-on Projects</b><br />Industry Based</div>
        <div><b>Mar 2026</b><br />Start Date</div>
        <div><b>2 Months</b><br />Duration</div>
        <div><b>Live</b><br />Mode</div>
        <div><b>English</b><br />Language</div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bi-about">
        <div className="about-left">
          <h2>About Power BI Program</h2>
          <ul>
            <li>Business Intelligence fundamentals</li>
            <li>Corporate dashboards & KPIs</li>
            <li>Data modeling & relationships</li>
            <li>DAX calculations</li>
            <li>Deployment using Power BI Service</li>
          </ul>
        </div>

        <div className="about-right">
          <img
            src="https://images.unsplash.com/photo-1556155092-8707de31f9c4"
            alt="powerbi-about"
          />
        </div>
      </section>

      {/* ================= OFFERINGS ================= */}
      <section className="bi-offerings">
        <h2>Exclusive Course Offerings</h2>

        <div className="offer-grid">
          <div>Power BI Desktop</div>
          <div>Power Query</div>
          <div>Data Cleaning</div>
          <div>Data Modeling</div>
          <div>DAX Measures</div>
          <div>Time Intelligence</div>
          <div>Dashboards</div>
          <div>Power BI Service</div>
          <div>Report Sharing</div>
          <div>Capstone Project</div>
        </div>
      </section>

      {/* ================= CURRICULUM ================= */}
      <section className="bi-curriculum">
        <div className="tabs">
          {[
            ["foundations", "BI Foundations"],
            ["query", "Power Query"],
            ["modeling", "Data Modeling"],
            ["dax", "DAX"],
            ["viz", "Visualization"],
            ["deployment", "Deployment"],
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
              <li>Introduction to Business Intelligence </li>
              <li>Power BI Architecture </li>
              <li>BI vs Analytics </li>
              <li>Corporate BI Use Cases </li>
            </ul>
          )}

          {activeTab === "query" && (
            <ul>
              <li>Power Query Basics </li>
              <li>Data Cleaning </li>
              <li>ETL Process </li>
            </ul>
          )}

          {activeTab === "modeling" && (
            <ul>
              <li>Star Schema </li>
              <li>Relationships </li>
              <li>Fact & Dimension Tables </li>
            </ul>
          )}

          {activeTab === "dax" && (
            <ul>
              <li>DAX Basics </li>
              <li>Measures & Columns </li>
              <li>Time Intelligence </li>
            </ul>
          )}

          {activeTab === "viz" && (
            <ul>
              <li>Charts & Visuals </li>
              <li>Slicers & Filters </li>
              <li>Drill-through </li>
            </ul>
          )}

          {activeTab === "deployment" && (
            <ul>
              <li>Power BI Service </li>
              <li>Publishing Reports </li>
              <li>Sharing & Security </li>
            </ul>
          )}

        </div>
      </section>

    </div>
  );
};

export default PowerBI;
