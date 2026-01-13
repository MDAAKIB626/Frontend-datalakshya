import React from "react";
import "./GATECSe.css";

const GATECSe = () => {
  return (
    <div className="gatecs-container py-5">
      <h1 className="gatecs-title">
        GATE – Computer Science & Information Technology (CS)
      </h1>

      <p className="gatecs-intro">
        <strong>GATE (Graduate Aptitude Test in Engineering)</strong> is a
        national-level examination jointly conducted by the Indian Institutes
        of Technology (IITs) and the Indian Institute of Science (IISc),
        Bengaluru. The <strong>Computer Science (CS)</strong> paper evaluates
        candidates on core computer science concepts and is widely used for
        admission to <strong>M.Tech / MS / PhD</strong> programs and
        recruitment in various <strong>Public Sector Undertakings (PSUs)</strong>.
      </p>

      {/* SYLLABUS */}
      <section className="gatecs-section">
        <h2>Syllabus Overview (As per Official GATE)</h2>
        <p>
          The GATE CS syllabus is based on standard undergraduate-level computer
          science subjects. The major topics included are:
        </p>
        <ul>
          <li>Engineering Mathematics (Discrete Mathematics & Linear Algebra)</li>
          <li>Data Structures and Algorithms</li>
          <li>Programming (C language fundamentals)</li>
          <li>Operating Systems</li>
          <li>Database Management Systems (DBMS)</li>
          <li>Computer Networks</li>
          <li>Theory of Computation</li>
          <li>Compiler Design</li>
          <li>Digital Logic</li>
          <li>Computer Organization and Architecture</li>
        </ul>
      </section>

      {/* EXAM PATTERN */}
      <section className="gatecs-section">
        <h2>Exam Pattern (Official)</h2>
        <ul>
          <li><strong>Mode:</strong> Computer Based Test (CBT)</li>
          <li><strong>Duration:</strong> 3 Hours (180 Minutes)</li>
          <li><strong>Total Questions:</strong> 65</li>
          <li><strong>Total Marks:</strong> 100</li>
          <li>
            <strong>Question Types:</strong> MCQs, MSQs (Multiple Select),
            and NAT (Numerical Answer Type)
          </li>
          <li>
            <strong>Mark Distribution:</strong> General Aptitude (15 Marks) +
            CS Subjects (85 Marks)
          </li>
          <li>
            <strong>Negative Marking:</strong> Applicable only for MCQs
          </li>
        </ul>
      </section>

      {/* ELIGIBILITY */}
      <section className="gatecs-section">
        <h2>Eligibility Criteria</h2>
        <ul>
          <li>
            Candidates holding or pursuing a Bachelor’s degree in Engineering,
            Technology, Science, or equivalent are eligible.
          </li>
          <li>Final-year undergraduate students can also apply.</li>
          <li>No upper age limit or restriction on the number of attempts.</li>
          <li>GATE score is valid for <strong>3 years</strong>.</li>
        </ul>
      </section>

      {/* PREPARATION */}
      <section className="gatecs-section">
        <h2>Preparation Strategy (Recommended)</h2>
        <ul>
          <li>Build strong fundamentals in Data Structures, OS, and Algorithms.</li>
          <li>Practice previous year questions (PYQs) from the last 25–30 years.</li>
          <li>Focus on conceptual understanding rather than rote learning.</li>
          <li>Take regular mock tests and analyze performance.</li>
        </ul>
      </section>

      {/* RESOURCES */}
      <section className="gatecs-section">
        <h2>Trusted Resources</h2>
        <ul>
          <li>NPTEL – IIT video lectures (Free & official)</li>
          <li>Previous Year GATE Question Papers</li>
          <li>Standard textbooks (Galvin – OS, Tanenbaum – CN, CLRS – DSA)</li>
          <li>
            Official GATE Website:{" "}
            <a
              href="https://gate.iitkgp.ac.in"
              target="_blank"
              rel="noreferrer"
            >
              gate.iitkgp.ac.in
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default GATECSe;
