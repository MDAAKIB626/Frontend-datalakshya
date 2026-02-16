import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./GATECSe.css";

/* ================= ANIMATION ================= */
const sectionAnim = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

/* ================= SUBJECT DATA ================= */
const subjects = [
  {
    title: "Engineering Mathematics (12–15 Marks)",
    topics: [
      "Discrete Mathematics: Logic, Sets, Relations, Functions",
      "Combinatorics: Permutations & Combinations",
      "Graph Theory: Trees, Connectivity, Shortest Path",
      "Linear Algebra: Matrices, Rank, Eigenvalues & Eigenvectors",
      "Probability: Random Variables, Bayes Theorem",
      "Statistics: Mean, Variance, Standard Deviation",
    ],
  },
  {
    title: "Data Structures & Algorithms (15–18 Marks)",
    topics: [
      "Arrays, Linked Lists, Stacks, Queues",
      "Trees: BST, AVL, Heaps",
      "Graphs: BFS, DFS, Topological Sort",
      "Sorting & Searching Algorithms",
      "Greedy, Divide & Conquer, Dynamic Programming",
      "Time & Space Complexity",
    ],
  },
  {
    title: "Operating Systems (8–10 Marks)",
    topics: [
      "Processes & Threads",
      "CPU Scheduling Algorithms",
      "Deadlocks (Prevention, Avoidance, Detection)",
      "Memory Management & Virtual Memory",
      "File Systems & Disk Scheduling",
    ],
  },
  {
    title: "DBMS (7–9 Marks)",
    topics: [
      "ER Model & Relational Model",
      "Normalization (1NF to BCNF)",
      "SQL Queries & Joins",
      "Transactions & ACID Properties",
      "Concurrency Control & Indexing",
    ],
  },
  {
    title: "Computer Networks (7–9 Marks)",
    topics: [
      "OSI & TCP/IP Models",
      "Data Link Layer Protocols",
      "IP Addressing & Subnetting",
      "Routing Algorithms",
      "Transport Layer: TCP & UDP",
      "Application Layer Protocols",
    ],
  },
  {
    title: "Computer Organization & Architecture (6–8 Marks)",
    topics: [
      "Number Systems & Boolean Algebra",
      "Instruction Set Architecture",
      "Pipelining & Hazards",
      "Cache Memory & Virtual Memory",
      "I/O Organization",
    ],
  },
  {
    title: "Theory of Computation (6–8 Marks)",
    topics: [
      "Regular Languages & Finite Automata",
      "Context-Free Grammars & PDA",
      "Turing Machines",
      "Decidability & Undecidability",
      "Chomsky Hierarchy",
    ],
  },
  {
    title: "Compiler Design (4–6 Marks)",
    topics: [
      "Lexical Analysis",
      "Syntax Analysis (Parsing)",
      "Semantic Analysis",
      "Intermediate Code Generation",
      "Code Optimization",
    ],
  },
  {
    title: "General Aptitude (15 Marks – Fixed)",
    topics: [
      "Verbal Ability",
      "Numerical Ability",
      "Logical Reasoning",
      "Data Interpretation",
    ],
  },
];

/* ================= COMPONENT ================= */
const GATECSe = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="gatecs-container">

      {/* TITLE */}
      <h1 className="gatecs-title">
        GATE – Computer Science & Information Technology (CS)
      </h1>

      <p className="gatecs-badge">
        Conducted by IITs & IISc | Score Valid 3 Years | Accepted by IITs, NITs & PSUs
      </p>

      {/* INTRO */}
      <p className="gatecs-intro">
        <strong>GATE (Graduate Aptitude Test in Engineering)</strong> evaluates
        core Computer Science fundamentals and is widely used for
        <strong> M.Tech / MS / PhD admissions</strong> and
        <strong> PSU recruitment</strong>.
      </p>

      {/* EXTRA PARAGRAPHS */}
      <p className="gatecs-para">
        GATE Computer Science (CS) is one of the most competitive papers.
        A good GATE score can secure admission into premier institutes like
        <strong> IITs, IISc, and NITs</strong>, along with financial assistance
        in the form of monthly stipends during higher studies.
      </p>

      <p className="gatecs-para">
        The subject-wise marks distribution below is based on previous year
        trends. Click on the <strong>“View Details”</strong> button to explore
        important topics for each subject and plan your preparation effectively.
      </p>

      {/* SUBJECTS */}
      <motion.section
        className="gatecs-section"
        variants={sectionAnim}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Subject-wise Marks & Detailed Topics</h2>

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

      

    </div>
  );
};

export default GATECSe;
