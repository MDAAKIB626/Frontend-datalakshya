import React from "react";
import "./Home.css";
/* mentors image */
import img1 from "./homeimages20/mentorimage1.jpg";
import img2 from "./homeimages20/mentorimage2.jpg";
import img3 from "./homeimages20/mentorimage3.jpg";
import banner from "./homeimages20/al.png";
import img4 from "./homeimages20/mentorimages4.jpg";
/* Student Review Image */
  import studentimg1 from "./homeimages20/studentimg1.jpg"; 
  import studentimg2 from "./homeimages20/studentimg2.jpg"; 
  import studentimg3 from "./homeimages20/studentimg3.jpg"; 
  import studentimg4 from "./homeimages20/studentimg4.jpg"; 
  import studentimg5 from "./homeimages20/studentimg5.jpg"; 
  import studentimg6 from "./homeimages20/studentimg6.jpg";
  import studentimg7 from "./homeimages20/studentimg7.jpg"; 
  import studentimg8 from "./homeimages20/studentimg8.jpg";  

/*COURSEimages */
import aiimages from "./Coursesimages/aiimages.png";
import mlimages from "./Coursesimages/mllearning.jpg";
import datascienceimages from "./Coursesimages/datascience.jpeg";
import analyticsimages from "./Coursesimages/dataanalystimages.jpg";
import deeplearningimages from "./Coursesimages/deep learning.jpg";
import powerbiimages from "./Coursesimages/powerbi.jpg";
import ourvision from  "./Coursesimages/ourvisionimg.jpeg";


const Home = () => {
  return (
    <div className="home">
      {/* 🌟 Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          position: "relative",
        }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Data Lakshya</h1>
          
          <h6> Empowering Minds with Data and AI</h6>
          <a href="#courses" className="btn">
            Explore Courses
          </a>
        </div>
      </section>
      {/* 🎓 Auto-Scrolling Courses Section */}
      <section className="courses" id="courses">
        <h2>Our Popular Courses</h2>
        <div className="course-slider">
          <div className="course-track">
            <div className="course-card">
              <img src={aiimages} alt="AI" className="course-img" />
              <h3>Artificial Intelligence</h3>
              <p>Learn intelligent automation and machine behavior.</p>
              <a href="/training/ai" className="btn-course">View Course</a>
            </div>
            <div className="course-card">
               <img src={mlimages} alt="ml" className="course-img" />
              <h3>Machine Learning</h3>
              <p>Build predictive models using ML algorithms.</p>
              <a href="/training/ml" className="btn-course">View Course</a>
            </div>
            <div className="course-card">
               <img src={datascienceimages} alt="Datascience" className="course-img" />
              <h3>Data Science</h3>
              <p>Explore data visualization and storytelling techniques.</p>
               <a href="/training/datascience" className="btn-course">View Course</a>
            </div>
            <div className="course-card">
               <img src={ analyticsimages} alt="Dataanalyst" className="course-img" />
              <h3>Data Analytics</h3>
              <p>Transform raw data into meaningful insights.</p>
               <a href="/training/dataanalytics" className="btn-course">View Course</a>
            </div>
           
            <div className="course-card">
               <img src={  deeplearningimages} alt="Dataanalyst" className="course-img" />
              <h3>Deep Learning</h3>
              <p>Work with Neural Networks & CNNs.</p>
                <a href="/training/deeplearning" className="btn-course">View Course</a>
            </div>
           
            <div className="course-card">
              <img src={powerbiimages } alt="powerbi" className="course-img" />
              <h3>Power BI</h3>
              <p>Learn dashboard creation and analytics visualization.</p>
               <a href="/training/powerbi" className="btn-course">View Course</a>
            </div>
          </div>
        </div>
      </section>

      {/* 🧠 About Section */}
      <section className="about" id="about">
        <div className="container mt-4">
          <div className="text-center mb-5"> 
          </div>


          {/* Vision */}
       {/* Vision Section */}
<div className="vision-box">
  <div className="row align-items-center mb-5 flex-md-row-reverse">
    <div className="col-md-6 text-center">
      <img src={ourvision} alt="Vision" className="vision-img" />
    </div>

    <div className="col-md-6">
      <h2 className="vision-title">Our Vision</h2>
      <p className="vision-text">
       Welcome to Data Lakshya – Empowering Minds with Data and AI

    Data Lakshya is an educational initiative dedicated to guiding learners toward excellence in Data Science, Artificial Intelligence, and Machine Learning. Our vision is to make complex concepts simple and practical through structured learning, interactive sessions, and real-world projects. Whether you are preparing for competitive exams like GATE, CSIR NET, or exploring a career in Data Analytics, Data Lakshya provides the right direction, resources, and mentorship to help you achieve your goals.
      </p>
    </div>
  </div>
</div>


          {/* Team */}
          <div className="text-center mb-4">
            <h2 className="fw-bold text-success">Meet Our Mentors</h2>
            <p className="text-secondary">Dedicated educators and industry experts behind Data Lakshya</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 col-md-4 col-lg-3 mb-4 text-center">
              <img src={img1} alt="Team Member" className="img-fluid rounded-circle mb-2" />
              <h5 className="fw-bold">Seraj Ahmad</h5>
              <p className="text-secondary">Data Science & Applied Mathmatics</p>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mb-4 text-center">
              <img src={img2} alt="Team Member" className="img-fluid rounded-circle mb-2" />
              <h5 className="fw-bold">Govind Kumar</h5>
              <p className="text-secondary">Aptitude & Reasoning Expert</p>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mb-4 text-center">
              <img src={img3} alt="Team Member" className="img-fluid rounded-circle mb-2" />
              <h5 className="fw-bold">Mohd. Adil</h5>
              <p className="text-secondary">AI/ML Expert</p>
            </div>
             <div className="col-6 col-md-4 col-lg-3 mb-4 text-center">
              <img src={img4} alt="Team Member" className="img-fluid rounded-circle mb-2" />
              <h5 className="fw-bold">Annu Pathak</h5>
              <p className="text-secondary">Enginnering Maths Expert</p>
            </div>
             
          </div>

          <div className="text-center mt-5 mb-5">
            <h3 className="fw-bold text-primary mb-3">Join Data Lakshya Today!</h3>
            <p className="text-secondary mb-3">
              Start learning, practicing, and achieving your goals with our expert-led courses and guidance.
            </p>
            <a href="#courses" className="btn btn-success btn-lg">
              Explore Courses
            </a>
          </div>
        </div>
      </section>

      

      {/* 💬 Student Reviews Section */}
      <section className="reviews" id="reviews">
        <h2>What Our Students Say</h2>
        <div className="review-slider">
          <div className="review-track">
            <div className="review-card">
              <img src={studentimg8} alt="Student" />
              <h4> Anjali Sharma</h4>
              <p> “Excellent teaching! Concepts are explained clearly with real examples.” </p>
            </div>
            <div className="review-card">
              <img src={studentimg1} alt="Student" />
              <h4> Rohit Verma</h4>
             <p> “Best place to learn Data Science and AI from basics to advanced.”</p>
            </div>
            <div className="review-card">
              <img src={studentimg2} alt="Student" />
              <h4>Simran Kaur</h4>
            <p> “Very supportive teacher and practical learning approach.” </p>
            </div>
            <div className="review-card">
              <img src={studentimg3} alt="Student" />
              <h4>Mohit Singh</h4>
              <p>“Interactive classes and clear explanations. Loved the sessions!”</p>
            </div>
               <div className="review-card">
              <img src={studentimg7} alt="Student" />
              <h4> Ayesha Khan</h4>
              <p>“Strong focus on both math and machine learning concepts.”</p>
            </div>
               <div className="review-card">
              <img src={studentimg5} alt="Student" />
              <h4>Amit Yadav</h4>
             <p> “Personal attention and career guidance make this academy special.”</p>
            </div>
               <div className="review-card">
              <img src={studentimg4} alt="Student" />
              <h4> Neha Gupta</h4>
              <p>“Helped me gain confidence in Python and data analytics.”</p>
            </div>
               <div className="review-card">
              <img src={studentimg6} alt="Student" />
              <h4>Sandeep Kumar</h4>
             <p> “Professional teaching with easy-to-understand examples.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🤝 whatapps Section */}
      
  {/* 📞 WhatsApp Enquiry Section */}
<section className="whatsapp-section" id="whatsapp">
  <div className="whatsapp-content container">
    <div className="whatsapp-left">
      <h2 className="fw-bold">Contact us on WhatsApp</h2>
      <p>
        Have questions about courses, fees, or career guidance?
        Message us on WhatsApp and our team will assist you instantly.
      </p>
      <a
        href="https://wa.me/919559520191?text=Hello%2C%20I%20am%20interested%20in%20your%20courses.%20Please%20share%20details."
        className="btn whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬 Chat on WhatsApp
      </a>
    </div>

   
  </div>
</section>

      {/* 📞 Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
