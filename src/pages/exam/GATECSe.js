import React from "react";
import "./GATECSe.css";

const GATECSe = () => {
  return (
    <div className="gatecs-container py-5">
      <h1 className="gatecs-title">GATE – Computer Science & Information Technology (CS & IT)</h1>
      <p className="gatecs-intro">
        The Graduate Aptitude Test in Engineering (GATE) for Computer Science and Information Technology 
        is one of the most competitive exams for students aiming for higher studies (M.Tech/MS) 
        or jobs in PSU sectors like ONGC, BHEL, IOCL, and research organizations.
      </p>

      <section className="gatecs-section">
        <h2>Syllabus Overview</h2>
        <p>
          The GATE CS & IT syllabus covers core topics from undergraduate computer science courses. 
          Here’s a breakdown of the major areas:
        </p>
        <ul>
          <li>Data Structures & Algorithms</li>
          <li>Programming & Data Structures (C, C++, Java)</li>
          <li>Operating Systems</li>
          <li>Database Management Systems (DBMS)</li>
          <li>Computer Networks</li>
          <li>Theory of Computation</li>
          <li>Compiler Design</li>
          <li>Digital Logic</li>
          <li>Computer Organization & Architecture</li>
          <li>Discrete Mathematics & Engineering Mathematics</li>
        </ul>
      </section>

      <section className="gatecs-section">
        <h2>Exam Pattern</h2>
        <ul>
          <li><strong>Mode:</strong> Online (Computer-Based Test)</li>
          <li><strong>Duration:</strong> 3 Hours</li>
          <li><strong>Questions:</strong> 65 (MCQs & Numerical)</li>
          <li><strong>Total Marks:</strong> 100</li>
          <li><strong>Sections:</strong> General Aptitude (15 Marks) + Core CS & IT (85 Marks)</li>
        </ul>
      </section>

      <section className="gatecs-section">
        <h2>Eligibility Criteria</h2>
        <ul>
          <li>Bachelor’s degree in Engineering/Technology (4 years after 10+2 or 3 years after diploma).</li>
          <li>Final-year students are also eligible.</li>
          <li>No age limit for appearing in GATE.</li>
        </ul>
      </section>

      <section className="gatecs-section">
        <h2>Preparation Tips</h2>
        <ul>
          <li>Understand the syllabus thoroughly and focus on core CS subjects.</li>
          <li>Refer to standard books like Galvin (OS), Tanenbaum (CN), Cormen (DSA), and Ullman (DBMS).</li>
          <li>Practice previous year question papers and online mock tests regularly.</li>
          <li>Focus on accuracy and time management during practice sessions.</li>
        </ul>
      </section>

      <section className="gatecs-section">
        <h2>Top Resources</h2>
        <ul>
          <li>NPTEL Online Courses (Free)</li>
          <li>GeeksforGeeks GATE Corner</li>
          <li>Made Easy / Ace Academy Notes</li>
          <li>Official GATE Website: <a href="https://gate.iitkgp.ac.in" target="_blank" rel="noreferrer">gate.iitkgp.ac.in</a></li>
        </ul>
      </section>
    </div>
  );
};

export default GATECSe;
