import React from "react";
import "./Home.css";

import banner from "./homeimages20/bannerimg.jpeg";

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
import VisionMentors from "./VisionMentors";
import MissionSection from "./Mission";
import CompitiveExam from "./CompitiveExam";
import Features from "./Features";
 import Banner from "./Banner"; 

const Home = () => {
  return (
    <>
      <div className="home">


<Banner />



  




        {/* 🎓 Courses Section */}
        <section className="courses" id="courses">
          <h2>Our Popular Courses</h2>

          <div className="course-slider">
            <div className="course-track">
              {[
                { img: aiimages, title: "Artificial Intelligence", link: "/training/ai" },
                { img: mlimages, title: "Machine Learning", link: "/training/ml" },
                { img: datascienceimages, title: "Data Science", link: "/training/datascience" },
                { img: analyticsimages, title: "Data Analytics", link: "/training/dataanalytics" },
                { img: deeplearningimages, title: "Deep Learning", link: "/training/deeplearning" },
                { img: powerbiimages, title: "Power BI", link: "/training/powerbi" },
              ].map((course, index) => (
                <div className="course-card" key={index}>
                  <img src={course.img} alt={course.title} className="course-img" />
                  <h3>{course.title}</h3>
                  <p>Learn industry-ready skills with expert guidance.</p>
                  <a href={course.link} className="btn-course">View Course</a>
                </div>
              ))}
            </div>
          </div>
        </section>
         <MissionSection />
      
   
        <CompitiveExam />
        <Features />

        {/* 💬 Reviews Section */}
        <section className="reviews" id="reviews">
          <h2>What Our Students Say</h2>
          <div className="review-slider">
            <div className="review-track">
              {[
                { img: studentimg8, name: "Anjali Sharma" },
                { img: studentimg1, name: "Rohit Verma" },
                { img: studentimg2, name: "Simran Kaur" },
                { img: studentimg3, name: "Mohit Singh" },
                { img: studentimg7, name: "Ayesha Khan" },
                { img: studentimg5, name: "Amit Yadav" },
                { img: studentimg4, name: "Neha Gupta" },
                { img: studentimg6, name: "Sandeep Kumar" },
              ].map((s, index) => (
                <div className="review-card" key={index}>
                  <img src={s.img} alt={s.name} />
                  <h4>{s.name}</h4>
                  <p>Excellent teaching and practical learning approach.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
             <VisionMentors />
        {/* 📞 Contact + WhatsApp */}
        <section className="contact-whatsapp-wrapper">
          <div className="contact-whatsapp-container">
            <div className="left-box">
              <WhatsAppSection />
            </div>
            <div className="right-box">
              <Contact />
            </div>
          </div>
        </section>

        <FoundersSection />
      </div>
    </>
  );
};

export default Home;
