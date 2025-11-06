import React from "react";
import "./GATEDAe.css";

const GATEDAe = () => {
  return (
    <div className="container py-5 gate-da">
      <h1 className="text-center mb-4 text-primary fw-bold">
        GATE (DA)– Data Science & Artificial Intelligence 
      </h1>

      <p className="lead text-muted text-center mb-5">
        The GATE (Graduate Aptitude Test in Engineering) – Data Science and
        Artificial Intelligence paper is a national-level exam that evaluates a
        candidate’s expertise in core data science, artificial intelligence,
        and computational skills. It is jointly conducted by IISc Bangalore and
        IITs, and serves as a gateway to M.Tech, MS, and Ph.D. programs across
        India’s premier institutes.
      </p>

      {/* About */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">📘 About the Exam</h3>
        <p>
          Introduced by IIT Madras and IISc Bangalore, the GATE (DA) paper focuses on 
          Data Science, Artificial Intelligence, and Machine Learning — covering 
          mathematical, algorithmic, and analytical problem-solving skills. 
          It allows students from backgrounds such as Computer Science, Statistics, 
          Electrical Engineering, Mathematics, and related fields to apply for 
          advanced degrees in cutting-edge areas like AI, ML, Data Analytics, and 
          Deep Learning.
        </p>
      </div>

      {/* Eligibility */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🎯 Eligibility Criteria</h3>
        <ul>
          <li>
            Candidates with a Bachelor’s degree in Engineering, Technology, Science,
            Mathematics, or Statistics are eligible.
          </li>
          <li>
            Final-year students of these programs can also apply.
          </li>
          <li>No upper age limit or restriction on the number of attempts.</li>
        </ul>
      </div>

      {/* Syllabus */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🧠 Detailed Syllabus</h3>
        <p>
          The syllabus for GATE (Data Science & AI) combines mathematical
          foundations, computational algorithms, and AI principles.
        </p>

        <h5 className="text-dark mt-3">📊 Mathematics & Statistics</h5>
        <ul>
          <li>Linear Algebra: Matrices, Eigenvalues, Eigenvectors, Vector Spaces</li>
          <li>Probability & Statistics: Random Variables, Distributions, Hypothesis Testing</li>
          <li>Calculus: Differentiation, Integration, Gradient, Optimization Techniques</li>
          <li>Discrete Mathematics: Sets, Relations, Graph Theory, Combinatorics</li>
        </ul>

        <h5 className="text-dark mt-4">💻 Computer Science Fundamentals</h5>
        <ul>
          <li>Programming (Python, C/C++): Data Structures, Algorithms, Complexity</li>
          <li>Database Management: SQL, Normalization, Transactions</li>
          <li>Operating Systems & Networks (Basic Concepts)</li>
        </ul>

        <h5 className="text-dark mt-4">🧠 Artificial Intelligence & Machine Learning</h5>
        <ul>
          <li>Supervised Learning: Linear/Logistic Regression, Decision Trees, SVM</li>
          <li>Unsupervised Learning: K-Means, PCA, Clustering</li>
          <li>Neural Networks: Perceptron, Deep Learning, Backpropagation</li>
          <li>Natural Language Processing (Basics)</li>
          <li>Reinforcement Learning (Fundamentals)</li>
        </ul>

        <h5 className="text-dark mt-4">📈 Data Analytics & Visualization</h5>
        <ul>
          <li>Data Preprocessing & Cleaning</li>
          <li>Exploratory Data Analysis</li>
          <li>Data Visualization Tools: Matplotlib, Seaborn</li>
          <li>Big Data Concepts (Hadoop/Spark Overview)</li>
        </ul>
      </div>

      {/* Exam Pattern */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🧾 Exam Pattern</h3>
        <ul>
          <li><strong>Mode:</strong> Computer-Based Test (CBT)</li>
          <li><strong>Duration:</strong> 3 Hours</li>
          <li><strong>Total Marks:</strong> 100</li>
          <li><strong>Total Questions:</strong> 65 (MCQ, MSQ, NAT)</li>
          <li>
            <strong>Sections:</strong>
            <ul>
              <li>General Aptitude – 15 Marks</li>
              <li>Data Science & AI Core – 85 Marks</li>
            </ul>
          </li>
          <li><strong>Negative Marking:</strong> Yes (only for MCQs)</li>
        </ul>
      </div>

      {/* Career Opportunities */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🧩 Career Opportunities</h3>
        <p>
          GATE DA opens doors to postgraduate studies in AI, Data Science, and
          Analytics. With increasing demand across industries, candidates can
          also pursue professional roles such as:
        </p>
        <ul>
          <li>Data Scientist</li>
          <li>Machine Learning Engineer</li>
          <li>AI Research Associate</li>
          <li>Big Data Analyst</li>
          <li>Business Intelligence Specialist</li>
          <li>AI Consultant or Research Scholar (IIT/IISc)</li>
        </ul>
      </div>

      {/* Preparation Tips */}
      <div className="text-center mb-5">
        <h4 className="fw-bold text-success">🚀 Preparation Tips</h4>
        <ul className="list-unstyled">
          <li>• Study Mathematics, Programming, and AI theory in parallel.</li>
          <li>• Practice coding in Python regularly — focus on NumPy, Pandas, and Scikit-learn.</li>
          <li>• Solve previous year GATE CS papers for analytical sections.</li>
          <li>• Attempt mock tests and track time management.</li>
          <li>• Revise key formulas and maintain short notes for last-week revision.</li>
          <li>• Follow IIT GATE official syllabus updates every year.</li>
        </ul>
      </div>

      {/* Useful Links */}
      <div className="text-center">
        <h4 className="fw-semibold text-primary">🌐 Useful Resources</h4>
        <ul className="list-unstyled">
          <li>
            <a href="https://gate.iitm.ac.in/" target="_blank" rel="noreferrer">
              Official GATE 2025 Website (IIT Madras)
            </a>
          </li>
          <li>
            <a href="https://nptel.ac.in/" target="_blank" rel="noreferrer">
              NPTEL AI & Data Science Courses
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noreferrer">
              GeeksforGeeks – Machine Learning Practice
            </a>
          </li>
          <li>
            <a href="https://towardsdatascience.com/" target="_blank" rel="noreferrer">
              Towards Data Science – Conceptual Articles
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GATEDAe;
