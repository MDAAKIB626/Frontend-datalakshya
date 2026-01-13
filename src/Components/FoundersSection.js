import React from "react";
import "./Founders.css";

import founder2 from "./Founderimage/founder2.jpg";
import founder1 from "./Founderimage/mentorimage1.jpg";

const FoundersSection = () => {
  return (
    <section className="founders-hero">
      <div className="founders-container">

        {/* LEFT CONTENT */}
        <div className="founders-left">
          <span className="founders-badge">Meet our Founder ✨</span>

          <h1 className="founders-quote">
            “The new wave of technology is <br />
            <span>here to change our lives forever!</span>”
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
