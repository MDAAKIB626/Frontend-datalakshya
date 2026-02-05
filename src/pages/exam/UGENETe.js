// src/pages/exam/UGENETe.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./UGENETe.css";

/* ================= ANIMATION ================= */
const sectionAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ================= SUBJECT DATA ================= */
const subjects = [
  {
    title: "Paper I – Teaching & Research Aptitude (100 Marks)",
    topics: [
      "Teaching Aptitude",
      "Research Aptitude",
      "Reading Comprehension",
      "Communication",
      "Reasoning (Logical & Analytical)",
      "Data Interpretation",
      "ICT & Higher Education System",
    ],
  },
  {
    title: "Computer System Architecture",
    topics: [
      "Digital Logic",
      "Processor Architecture",
      "Memory Hierarchy",
      "I/O Systems",
    ],
  },
  {
    title: "Data Structures & Algorithms",
    topics: [
      "Arrays, Linked Lists, Stacks, Queues",
      "Trees & Graphs",
      "Searching & Sorting",
      "Algorithm Complexity",
    ],
  },
  {
    title: "Operating Systems",
    topics: [
      "Processes & Threads",
      "CPU Scheduling",
      "Deadlocks",
      "Memory Management",
      "File Systems",
    ],
  },
  {
    title: "DBMS",
    topics: [
      "ER Model & Relational Model",
      "Normalization",
      "SQL Queries",
      "Transactions & Concurrency Control",
    ],
  },
  {
    title: "Computer Networks & Web Technology",
    topics: [
      "OSI & TCP/IP Models",
      "Routing & Switching",
      "HTTP, FTP, DNS",
      "Web Technologies Basics",
    ],
  },
  {
    title: "Theory of Computation",
    topics: [
      "Finite Automata",
      "Context Free Grammar",
      "Turing Machine",
      "Decidability",
    ],
  },
  {
    title: "AI, ML & Emerging Technologies",
    topics: [
      "Artificial Intelligence Basics",
      "Machine Learning Concepts",
      "Data Mining",
      "Cloud Computing",
      "IoT Fundamentals",
    ],
  },
];

/* ================= COMPONENT ================= */
const UGENETe = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="ug-net-container">

      <h1 className="ug-net-title">
        UGC NET – Computer Science
      </h1>

      <p className="ug-net-badge">
        Conducted by NTA | Eligibility for Assistant Professor & JRF
      </p>

      <p className="ug-net-intro">
        <strong>UGC NET (Computer Science)</strong> is a national-level exam
        conducted by <strong>NTA</strong> for eligibility to become
        <strong> Assistant Professor</strong> and for
        <strong> Junior Research Fellowship (JRF)</strong>.
      </p>

      {/* SUBJECT SECTION */}
      <motion.section
        className="ug-net-section"
        variants={sectionAnim}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Paper-wise Syllabus & Topics</h2>

        {subjects.map((sub, index) => (
          <div key={index} className="subject-card">

            <div className="subject-header">
              <span className="subject-title">{sub.title}</span>

              <button
                className="details-btn"
                onClick={() => toggleDetails(index)}
              >
                {openIndex === index ? "Hide Details" : "View Details"}
              </button>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="subject-topics"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ul>
                    {sub.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}
      </motion.section>

      <p className="ug-net-para">
        🎯 <strong>Strategy:</strong>  
        Paper I ko lightly mat lena — 100 marks guaranteed hote hain.
        Paper II me <strong>DSA, OS, DBMS, TOC</strong> sabse scoring hain.
        Previous Year Questions (PYQs) repeatedly practice kar.
      </p>

    </div>
  );
};

export default UGENETe;
