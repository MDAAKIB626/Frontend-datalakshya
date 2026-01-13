import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-subtitle">
          Shaping future-ready professionals in Data, AI & Emerging Technologies
        </p>

        <div className="mission-cards">
          <div className="mission-card">
            <h3>🎯 Industry Focused Learning</h3>
            <p>
              To deliver practical, industry-aligned education that bridges the
              gap between academics and real-world applications.
            </p>
          </div>

          <div className="mission-card">
            <h3>🚀 Career Transformation</h3>
            <p>
              Empower students and professionals with skills that accelerate
              career growth in Data Science, AI, and Analytics.
            </p>
          </div>

          <div className="mission-card">
            <h3>🌍 Accessible Quality Education</h3>
            <p>
              Make high-quality technical education affordable and accessible
              for learners from all backgrounds.
            </p>
          </div>

          {/* 🔥 NEW BOX */}
          <div className="mission-card">
            <h3>🤝 Mentorship & Support</h3>
            <p>
              Provide continuous mentorship, doubt-solving sessions, and
              guidance to help learners stay motivated and succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
