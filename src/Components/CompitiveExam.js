import React from "react";
import "./Compitive.css";

import img1 from "./homeimages20/probability and statistics.jpg";
import img2 from "./homeimages20/Machine-Learning-and-AI.jpg";
import img3 from "./homeimages20/Linear-Algebra.png";
import img4 from "./homeimages20/Calculus and Optimization.png";
import img5 from "./homeimages20/Calculus.jpg";
import img6 from "./homeimages20/data-warehouse.jpg";

const CompitiveExam = () => {
  const exams = [
    {
      img: img1,
      title: "GATE DA (Data Science & AI)",
      desc:
        "Focuses on Data Science, AI, Machine Learning, Probability and Programming.",
    },
    {
      img: img2,
      title: "GATE CS (Computer Science & IT)",
      desc:
        "Covers core CS subjects like DSA, OS, DBMS, CN and Algorithms.",
    },
    {
      img: img3,
      title: "UGC NET CS",
      desc:
        "Eligibility exam for Assistant Professor and JRF in Computer Science.",
    },
    {
      img: img4,
      title: "Linear Algebra",
      desc: "Important for ML, AI, Optimization and GATE exams.",
    },
    {
      img: img5,
      title: "Calculus",
      desc: "Core math subject for optimization and data science.",
    },
    {
      img: img6,
      title: "Data Warehouse",
      desc: "Concepts of data storage, ETL and analytics.",
    },
  ];

  return (
    <section className="comp-exam-section">
      <h2 className="comp-title">
        Competitive Exams For GATE DA, GATE CS & UGC NET CS
      </h2>

      <div className="exam-scroll-wrapper">
        <div className="exam-scroll-track">
          {[...exams, ...exams].map((exam, index) => (
            <div className="exam-scroll-card" key={index}>
              <img src={exam.img} alt={exam.title} />
              <h3>{exam.title}</h3>
              <p>{exam.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompitiveExam;
