// src/pages/training/AI.js
import React from "react";
import "./AI.css";

const AI = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary fw-bold mb-4">
        Artificial Intelligence (AI) Training Program
      </h1>

      <p className="lead text-muted text-center mb-5">
        Master Artificial Intelligence concepts and real-world problem-solving skills.
        This program focuses on **Machine Learning, Deep Learning, Neural Networks,**
        and **AI applications** across various industries.
      </p>

      {/* About the Course */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">📘 About the Program</h3>
        <p>
          This AI training course helps learners build a strong foundation in
          artificial intelligence by combining theory with hands-on practice.
          You'll work on real datasets, understand AI algorithms, and build
          intelligent systems capable of reasoning and learning.
        </p>
      </div>

      {/* Skills Covered */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🧠 Key Skills You Will Learn</h3>
        <ul>
          <li>Machine Learning Algorithms (Supervised & Unsupervised)</li>
          <li>Deep Learning with Neural Networks (ANN, CNN, RNN)</li>
          <li>Natural Language Processing (NLP)</li>
          <li>Computer Vision & Image Recognition</li>
          <li>Python for AI (NumPy, Pandas, TensorFlow, PyTorch)</li>
          <li>AI Model Deployment & Optimization</li>
        </ul>
      </div>

      {/* Curriculum */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">📚 Course Curriculum Overview</h3>
        <ul>
          <li>Introduction to Artificial Intelligence</li>
          <li>Mathematics for AI – Linear Algebra, Probability, and Statistics</li>
          <li>Python Programming & Data Handling</li>
          <li>Machine Learning Fundamentals</li>
          <li>Deep Learning and Neural Networks</li>
          <li>Natural Language Processing</li>
          <li>AI in Real-world Applications (Healthcare, Finance, Robotics)</li>
          <li>Capstone Project on AI</li>
        </ul>
      </div>

      {/* Tools & Technologies */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🛠️ Tools & Technologies Covered</h3>
        <ul>
          <li>Python, TensorFlow, PyTorch, Keras</li>
          <li>OpenCV, Scikit-learn, NumPy, Pandas</li>
          <li>Google Colab, Jupyter Notebook</li>
          <li>Hugging Face, NLTK, SpaCy</li>
        </ul>
      </div>

      {/* Career Opportunities */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🎯 Career Opportunities After Training</h3>
        <ul>
          <li>AI Engineer / Research Scientist</li>
          <li>Machine Learning Engineer</li>
          <li>Data Scientist / Analyst</li>
          <li>Computer Vision Engineer</li>
          <li>NLP Engineer / Chatbot Developer</li>
          <li>AI Product Manager</li>
        </ul>
      </div>

      {/* Learning Outcomes */}
      <div className="text-center">
        <h4 className="fw-bold text-success">🚀 Learning Outcomes</h4>
        <ul className="list-unstyled">
          <li>• Build, train, and evaluate ML & AI models.</li>
          <li>• Apply AI concepts to solve real-world business problems.</li>
          <li>• Understand neural networks and model optimization.</li>
          <li>• Deploy AI models using cloud tools and APIs.</li>
        </ul>
      </div>
    </div>
  );
};

export default AI;
