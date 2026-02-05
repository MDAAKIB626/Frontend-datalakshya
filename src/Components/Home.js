import React, { useRef, useEffect } from "react";
import "./Home.css";

/* Student Review Images */
import studentimg1 from "./homeimages20/studentimg1.jpg";
import studentimg2 from "./homeimages20/studentimg2.jpg";
import studentimg3 from "./homeimages20/studentimg3.jpg";
import studentimg4 from "./homeimages20/studentimg4.jpg";
import studentimg5 from "./homeimages20/studentimg5.jpg";
import studentimg6 from "./homeimages20/studentimg6.jpg";
import studentimg7 from "./homeimages20/studentimg7.jpg";
import studentimg8 from "./homeimages20/studentimg8.jpg";

/* Course Images */
import aiimages from "./Coursesimages/aiimages.png";
import mlimages from "./Coursesimages/mllearning.jpg";
import datascienceimages from "./Coursesimages/datascience.jpeg";
import analyticsimages from "./Coursesimages/dataanalystimages.jpg";
import deeplearningimages from "./Coursesimages/deep learning.jpg";
import powerbiimages from "./Coursesimages/powerbi.jpg";

import WhatsAppSection from "./WhatAppSection";
import Contact from "./Contact";
import FoundersSection from "./FoundersSection";
import MissionSection from "./Mission";
import CompitiveExam from "./CompitiveExam";
import Features from "./Features";
import Banner from "./Banner";

const Home = () => {
  const sliderRef = useRef(null);
  const autoScrollRef = useRef(null);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollRef.current = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: 1,       // speed (increase for faster)
          behavior: "smooth",
        });
      }
    }, 20);
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  /* ================= ARROWS ================= */
  const scrollLeft = () => {
    stopAutoScroll();
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    setTimeout(startAutoScroll, 2000);
  };

  const scrollRight = () => {
    stopAutoScroll();
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    setTimeout(startAutoScroll, 2000);
  };





  
  return (
    <div className="home">
      <Banner />

      {/* 🎓 COURSES */}
      <section className="courses" id="courses">
        <h2>Our Popular Courses</h2>

        <div className="course-slider-wrapper">
          <button className="arrow" onClick={scrollLeft}>
            &#10094;
          </button>

          <div className="course-slider" ref={sliderRef}>
            <div className="course-track">
              {[
                {
                  img: aiimages,
                  title: "Artificial Intelligence",
                  desc: "AI concepts, intelligent systems & automation.",
                  link: "/training/ai",
                },
                {
                  img: mlimages,
                  title: "Machine Learning",
                  desc: "Algorithms, Python & real-world ML projects.",
                  link: "/training/ml",
                },
                {
                  img: datascienceimages,
                  title: "Data Science",
                  desc: "Python, ML, Power BI & real datasets.",
                  link: "/training/datascience",
                },
                {
                  img: analyticsimages,
                  title: "Data Analytics",
                  desc: "SQL, Excel, Power BI & dashboards.",
                  link: "/training/dataanalytics",
                },
                {
                  img: deeplearningimages,
                  title: "Deep Learning",
                  desc: "CNN, RNN, TensorFlow & AI models.",
                  link: "/training/deeplearning",
                },
                {
                  img: powerbiimages,
                  title: "Power BI",
                  desc: "Power BI, DAX & business reports.",
                  link: "/training/powerbi",
                },
              ].map((course, index) => (
                <div className="course-card" key={index}>
                  <img src={course.img} alt={course.title} className="course-img" />
                  <h3>{course.title}</h3>
                  <p>{course.desc}</p>
                  <a href={course.link} className="btn-course">
                    View Course
                  </a>
                </div>
              ))}
            </div>
          </div>

          <button className="arrow" onClick={scrollRight}>
            &#10095;
          </button>
        </div>
      </section>

      <MissionSection />
      <CompitiveExam />
      <Features />

    {/* 💬 REVIEWS */}
<section className="reviews" id="reviews">
  <h2>What Our Students Say</h2>

  <div className="review-slider">
    <div className="review-track">
      {[
        {
          img: studentimg1,
          comment:
            "Artificial Intelligence course ne meri fundamentals strong kar di. Concepts clear aur practical lage."
        },
        {
          img: studentimg2,
          comment:
            "Machine Learning training industry oriented thi. Real projects se kaafi learning hui."
        },
        {
          img: studentimg3,
          comment:
            "Data Science roadmap beginner friendly hai. Mentors ka support har step par mila."
        },
        {
          img: studentimg4,
          comment:
            "Complex topics ko simple language me samjhaya gaya. Learning experience excellent raha."
        },
        {
          img: studentimg5,
          comment:
            "Hands-on assignments aur live examples ne confidence build kiya."
        },
        {
          img: studentimg6,
          comment:
            "Real-world datasets par kaam karne ka mauka mila. Course ka structure kaafi strong hai."
        },
        {
          img: studentimg7,
          comment:
            "Doubt solving sessions fast the aur trainers kaafi supportive rahe."
        },
        {
          img: studentimg8,
          comment:
            "Beginner se advanced level tak smooth journey rahi. Highly recommended!"
        }
      ].map((review, i) => (
        <div className="review-card" key={i}>
          <img src={review.img} alt="student" />
          <p>“{review.comment}”</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 📞 CONTACT */}
      <section className="contact-whatsapp-wrapper">
        <div className="contact-whatsapp-container">
          <div className="left-box">
            <WhatsAppSection />
          </div>
         
        </div>
      </section>

      <FoundersSection />
    </div>
  );
};

export default Home;
