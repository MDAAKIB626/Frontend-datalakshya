import React, { useState } from "react";
import "./Blog.css";

/* ================= TOP NAVBAR DATA ================= */
const topMenuData = {
  pythonML: {
    title: "Python for Machine Learning",
    desc:
      "Python is the most popular language for Machine Learning because of its clean syntax, flexibility, and powerful ecosystem. It allows developers and data scientists to focus more on problem-solving rather than language complexity."
  },
  
  mlAlgorithms: {
    title: "ML Algorithms",
    desc:
      "Machine Learning algorithms enable systems to learn from data. This section covers core supervised and unsupervised algorithms used in real-world applications."
  },
  eda: {
    title: "Exploratory Data Analysis (EDA)",
    desc:
      "EDA is the process of analyzing datasets to discover patterns, trends, and anomalies before applying Machine Learning models."
  },
  mathML: {
    title: "Math for Machine Learning",
    desc:
      "Mathematics forms the backbone of Machine Learning, including linear algebra, probability, and statistics."
  },
  interview: {
    title: "ML Interview Preparation",
    desc:
      "This section focuses on common interview questions, real-world scenarios, and problem-solving techniques."
  },
  projects: {
    title: "Machine Learning Projects",
    desc:
      "Hands-on projects help in understanding how ML models are built, trained, and deployed in real applications."
  },
  deepLearning: {
    title: "Deep Learning",
    desc:
      "Deep Learning is a subset of Machine Learning that uses neural networks with multiple layers to model complex patterns."
  },
  nlp: {
    title: "Natural Language Processing (NLP)",
    desc:
      "NLP enables machines to understand and process human language and is widely used in chatbots and search engines."
  }
};

/* ================= SIDEBAR DATA (LONG DESCRIPTIONS) ================= */
const sidebarData = {
  pythonML: [
    {
      id: "intro",
      title: "Introduction to Python for ML",
      desc:
        "Python is widely used in Machine Learning due to its simplicity, readability, and extensive ecosystem. It supports rapid development and experimentation, making it suitable for both beginners and professionals."
    },
    {
      id: "env",
      title: "Setting up ML Environment",
      desc:
        "Setting up a proper environment includes installing Python, package managers, and tools like Anaconda, Jupyter Notebook, and VS Code. A well-configured environment ensures smooth development and reproducibility."
    },
    {
      id: "numpy",
      title: "NumPy for Numerical Computing",
      desc:
        "NumPy provides support for large multi-dimensional arrays and mathematical operations. It forms the base of many ML libraries and is essential for numerical computations."
    },
    {
      id: "pandas",
      title: "Pandas for Data Analysis",
      desc:
        "Pandas offers powerful data structures such as DataFrame and Series. It is used extensively for data cleaning, transformation, and exploratory data analysis."
    }
  ],

  mlWithR: [
    {
      id: "rintro",
      title: "Introduction to R",
      desc:
        "R is a language built for statistics and data analysis. It provides advanced statistical functions and visualization tools."
    },
    {
      id: "rmodel",
      title: "ML Modeling in R",
      desc:
        "R provides libraries like caret for training and evaluating Machine Learning models efficiently."
    }
  ],

  mlAlgorithms: [
    {
      id: "reg",
      title: "Regression Algorithms",
      desc:
        "Regression algorithms predict continuous values and are widely used in forecasting and trend analysis."
    },
    {
      id: "clf",
      title: "Classification Algorithms",
      desc:
        "Classification algorithms categorize data into classes and are used in spam detection and sentiment analysis."
    },
    {
      id: "tree",
      title: "Tree-Based Algorithms",
      desc:
        "Tree-based algorithms like Random Forest and Gradient Boosting provide high accuracy and interpretability."
    }
  ],

  eda: [
    {
      id: "edaIntro",
      title: "What is EDA?",
      desc:
        "EDA helps in understanding data distribution, patterns, and relationships before modeling."
    },
    {
      id: "clean",
      title: "Data Cleaning",
      desc:
        "Data cleaning involves handling missing values, duplicates, and outliers to improve data quality."
    }
  ],

  mathML: [
    {
      id: "la",
      title: "Linear Algebra",
      desc:
        "Linear algebra concepts such as vectors and matrices are fundamental to ML algorithms."
    },
    {
      id: "prob",
      title: "Probability & Statistics",
      desc:
        "Probability and statistics help in understanding uncertainty and data distributions."
    }
  ],

  deepLearning: [
    {
      id: "nn",
      title: "Neural Networks",
      desc:
        "Neural Networks learn complex patterns by adjusting weights through backpropagation."
    },
    {
      id: "cnn",
      title: "Convolutional Neural Networks",
      desc:
        "CNNs are designed for image data and are widely used in computer vision."
    }
  ],

  nlp: [
    {
      id: "nlpIntro",
      title: "Introduction to NLP",
      desc:
        "NLP allows machines to read, understand, and generate human language."
    },
    {
      id: "prep",
      title: "Text Preprocessing",
      desc:
        "Text preprocessing converts raw text into structured data for ML models."
    }
  ]
};

const Blog = () => {
  const [activeTop, setActiveTop] = useState("pythonML");
  const [activeSide, setActiveSide] = useState(null);

  const sideItems = sidebarData[activeTop] || [];

  const activeContent = activeSide
    ? sideItems.find((i) => i.id === activeSide)
    : topMenuData[activeTop];

  return (
    <div className="blog-wrapper">
      {/* ================= TOP NAVBAR ================= */}
      <div className="top-menu">
        {Object.keys(topMenuData).map((key) => (
          <span
            key={key}
            className={`menu-item ${activeTop === key ? "active" : ""}`}
            onClick={() => {
              setActiveTop(key);
              setActiveSide(null);
            }}
          >
            {topMenuData[key].title.split(" (")[0]}
          </span>
        ))}
      </div>

      <div className="layout">
        {/* ================= SIDEBAR ================= */}
        <div className="sidebar">
          <h4>Technical Scripter 2026</h4>

          {sideItems.map((item) => (
            <div
              key={item.id}
              className={`sidebar-item ${
                activeSide === item.id ? "active" : ""
              }`}
              onClick={() => setActiveSide(item.id)}
            >
              {item.title}
            </div>
          ))}
        </div>

        {/* ================= CONTENT ================= */}
        <div className="content-area">
          <h2>{activeContent.title}</h2>
          <p>{activeContent.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
