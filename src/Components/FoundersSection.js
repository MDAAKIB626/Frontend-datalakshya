import React from "react";
import "./Founders.css";


import founder1 from "./Founderimage/mentorimage1.jpg";

const FoundersSection = () => {
  return (
    <section className="founders-hero">
      <div className="founders-container">

        {/* LEFT CONTENT */}
        <div className="founders-left">
          <span className="founders-badge">Founder’s Message ✨</span>

         <h1 className="founders-quote">
  At Data Lakshya, we believe success is built at the intersection of clear concepts,
  disciplined effort, and strong belief. Whether your goal is mastering AI and Data Science
  or cracking competitive exams like GATE and UGC NET, the journey demands consistency and
  the right guidance. We are here to mentor, motivate, and support you at every step-turning
  challenges into confidence and ambition into achievement.
</h1>

        </div>

        {/* RIGHT IMAGE */}
        <div className="founders-right single-founder">
          <div className="founder-card">
            <img src={founder1} alt="Siraj Ahmed" className="founder-img" />
            <div className="founder-info">
              <h4>Siraj Ahmed</h4>
              <p>Founder & CEO @ Data Lakshya</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FoundersSection;
