import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./GATECSe.css";

/* ================= ANIMATION ================= */
const sectionAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ================= SUBJECT DATA ================= */
const subjects = [
  {
    title: "Mathematics & Statistics (25–30 Marks)",
    topics: [
      "Linear Algebra: Matrices, Eigenvalues, Eigenvectors",
      "Probability: Random Variables, Bayes Theorem",
      "Statistics: Mean, Variance, Distributions",
      "Calculus: Differentiation, Optimization",
      "Discrete Mathematics & Graph Theory",
    ],
  },
  {
    title: "Programming, DSA & CS Basics (20–25 Marks)",
    topics: [
      "Python / C / C++ Programming",
      "Arrays, Linked Lists, Stacks, Queues",
      "Trees & Graphs",
      "Time & Space Complexity",
      "DBMS & OS (Basic Concepts)",
      "Computer Networks (Basics)",
    ],
  },
  {
    title: "Machine Learning (20–25 Marks)",
    topics: [
      "Supervised Learning: Linear & Logistic Regression",
      "Decision Trees, SVM",
      "Unsupervised Learning: K-Means, PCA",
      "Model Evaluation & Overfitting",
    ],
  },
  {
    title: "Artificial Intelligence (15–20 Marks)",
    topics: [
      "Neural Networks & Perceptron",
      "Deep Learning Basics",
      "Backpropagation",
      "Natural Language Processing (Basics)",
      "Reinforcement Learning (Intro)",
    ],
  },
  {
    title: "Data Analytics & Visualization (10–15 Marks)",
    topics: [
      "Data Cleaning & Preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Matplotlib & Seaborn",
      "Big Data Concepts (Hadoop / Spark Overview)",
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
const GATEDAe = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="gate-da-container">

      <h1 className="gate-da-title">
        GATE – Data Science & Artificial Intelligence (DA)
      </h1>

      <p className="gate-da-badge">
        Conducted by IITs & IISc | Introduced for AI & Data Science Aspirants
      </p>

      <p className="gate-da-intro">
        <strong>GATE (DA)</strong> evaluates concepts from
        <strong> Mathematics, Data Science, Machine Learning</strong> and
        <strong> Artificial Intelligence</strong>.
        It is accepted for <strong>M.Tech / MS / PhD</strong> programs
        in top institutes like <strong>IITs & IISc</strong>.
      </p>

      {/* SUBJECT SECTION */}
      <motion.section
        className="gate-da-section"
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

export default GATEDAe;
