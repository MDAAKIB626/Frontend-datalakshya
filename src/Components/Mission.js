import React from "react";
import "./Mission.css";
import mission from "./homeimages20/aboutimage.jpeg";
const Mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">

        {/* TITLE */}
        <div className="mission-header">
          <h2>ABOUT US</h2>
        </div>

        {/* CONTENT LEFT | IMAGE RIGHT */}
        <div className="mission-main">
          {/* LEFT CONTENT */}
          <div className="mission-content">

            <p>
          
              Data Lakshya is a learning-driven organization with a strong motive
              to serve and grow the data and computer science domain through
              quality education, practical training, and academic guidance.
            </p>

            <p>
              We provide focused training in Data Science, Artificial
              Intelligence, Machine Learning, Natural Language Processing, and
              other related technologies with strong fundamentals and real-world
              applications.
            </p>

            <p>
              Our goal is not just to teach, but to guide, mentor, and support
              learners in achieving meaningful careers.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="mission-image">
            <img src={mission} alt="Our Mission" />
          </div>
        </div>

        {/* CARDS */}
        <div className="mission-grid">
          <div className="mission-item">
            <h3> Industry-Focused Learning</h3>
            <p>Deliver practical, job-ready education aligned with industry.</p>
          </div>

          <div className="mission-item">
            <h3>Career Growth</h3>
            <p>Equip learners with in-demand skills for success.</p>
          </div>

          <div className="mission-item">
            <h3>Accessible Education</h3>
            <p>Provide affordable and inclusive technical education.</p>
          </div>

          <div className="mission-item">
            <h3>Mentorship & Support</h3>
            <p>Offer continuous guidance to help learners achieve goals.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;
