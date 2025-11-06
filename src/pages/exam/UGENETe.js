// src/pages/exam/UGENET.js
import React from "react";
import "./UGENETe.css";

const UGENETe = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 text-primary fw-bold">
        UGC NET – Computer Science
      </h1>

      <p className="lead text-muted text-center mb-5">
        The **UGC NET (University Grants Commission – National Eligibility Test)**
        is a national-level exam conducted by **NTA** to determine eligibility for
        **Assistant Professorship and Junior Research Fellowship (JRF)** in Indian
        universities and colleges for the **Computer Science & Applications** subject.
      </p>

      {/* About the Exam */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">📘 About the Exam</h3>
        <p>
          UGC NET Computer Science evaluates candidates on their knowledge of core
          computer science concepts, programming, and research aptitude. It is held
          twice a year (June & December) in **Computer-Based Test (CBT)** mode by
          the National Testing Agency (NTA).
        </p>
      </div>

      {/* Eligibility */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🎯 Eligibility Criteria</h3>
        <ul>
          <li>
            Master’s degree in Computer Science, Information Technology, or related
            discipline with **at least 55% marks** (50% for reserved categories).
          </li>
          <li>
            Final year postgraduate students are also eligible to apply.
          </li>
          <li>No upper age limit for Assistant Professor eligibility.</li>
          <li>For JRF, age must be **less than 30 years** (relaxation applicable).</li>
        </ul>
      </div>

      {/* Exam Pattern */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🧾 Exam Pattern</h3>
        <ul>
          <li>Mode: Computer-Based Test (CBT)</li>
          <li>Paper I: General Teaching & Research Aptitude (50 questions, 100 marks)</li>
          <li>Paper II: Computer Science (100 questions, 200 marks)</li>
          <li>Total Duration: 3 hours (no break between papers)</li>
          <li>All questions are Multiple Choice Questions (MCQs)</li>
        </ul>
      </div>

      {/* Syllabus */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🧠 Major Topics Covered</h3>
        <ul>
          <li>Computer System Architecture</li>
          <li>Data Structures and Algorithms</li>
          <li>Programming Languages and Compilers</li>
          <li>Operating Systems</li>
          <li>Database Management Systems (DBMS)</li>
          <li>Computer Networks and Web Technologies</li>
          <li>Software Engineering</li>
          <li>Theory of Computation and Automata</li>
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Data Mining, Cloud Computing, and IoT Fundamentals</li>
          <li>Discrete Mathematics and Graph Theory</li>
          <li>Research Methodology and Emerging Technologies</li>
        </ul>
      </div>

      {/* Career Opportunities */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🎓 Career Opportunities</h3>
        <p>
          Qualifying UGC NET Computer Science allows candidates to:
        </p>
        <ul>
          <li>Become **Assistant Professors** in universities and colleges.</li>
          <li>Qualify for **Junior Research Fellowship (JRF)** positions.</li>
          <li>Work in **Research Labs, PSUs, and Educational Institutes**.</li>
          <li>Pursue **Ph.D. in Computer Science** or **AI/ML/Data Science** domains.</li>
        </ul>
      </div>

      {/* Preparation Tips */}
      <div className="text-center">
        <h4 className="fw-bold text-success">🚀 Preparation Tips</h4>
        <ul className="list-unstyled">
          <li>• Study from standard books like Galvin, Ullman, and Tanenbaum.</li>
          <li>• Follow latest UGC NET syllabus released by NTA.</li>
          <li>• Practice mock tests and previous year question papers.</li>
          <li>• Focus on Paper I for reasoning & teaching aptitude.</li>
          <li>• Revise formulas and definitions before the exam.</li>
        </ul>
      </div>
    </div>
  );
};

export default UGENETe;
