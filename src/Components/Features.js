import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">Why Choose Data Lakshya</h2>
        <p className="features-subtitle">
          We focus on quality learning, real-world skills, and career success
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🎓</span>
            <h3>Expert Faculty</h3>
            <p>
              Learn from experienced mentors with strong academic and industry
              backgrounds.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">📚</span>
            <h3>Structured Curriculum</h3>
            <p>
              Well-planned syllabus aligned with GATE, UGC NET, and industry
              requirements.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">💻</span>
            <h3>Practical Learning</h3>
            <p>
              Hands-on projects, problem-solving sessions, and real-world case
              studies.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🧠</span>
            <h3>Concept Clarity</h3>
            <p>
              Focus on strong fundamentals to help you crack exams and interviews.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">📈</span>
            <h3>Career Guidance</h3>
            <p>
              Mentorship for higher studies, research, PSUs, and tech careers.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🤝</span>
            <h3>Student Support</h3>
            <p>
              Dedicated doubt sessions, mentoring, and continuous progress
              tracking.
            </p>
          </div>

          {/* 🔥 NEW FEATURE 1 */}
          <div className="feature-card">
            <span className="feature-icon">📝</span>
            <h3>Regular Assessments</h3>
            <p>
              Weekly tests, mock exams, and performance analysis to track your
              progress.
            </p>
          </div>

          {/* 🔥 NEW FEATURE 2 */}
          <div className="feature-card">
            <span className="feature-icon">🌐</span>
            <h3>Online & Offline Learning</h3>
            <p>
              Flexible learning modes with recorded lectures and live sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
