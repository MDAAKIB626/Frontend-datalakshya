import React from "react";
import './VisionMentors.css';

import img1 from "./homeimages20/mentorimage1.jpg";
import img2 from "./homeimages20/mentorimage2.jpg";
import img3 from "./homeimages20/mentorimage3.jpg";
import img4 from "./homeimages20/mentorimages4.jpg";

const mentors = [
  {
    img: img1,
    name: "Siraj Ahmad",
    role: "Data Science & Maths",
    work: "5+ Years",
    teach: "3+ Years",
    desc: "Experienced mentor with strong background in Data Science and teaching."
  },
  {
    img: img2,
    name: "Govind Kumar",
    role: "Aptitude & Reasoning",
    work: "5+ Years",
    teach: "2+ Years",
    desc: "Expert in aptitude, reasoning and competitive exam preparation."
  },
  {
    img: img3,
    name: "Mohd. Adil",
    role: "AI / ML Expert",
    work: "5+ Years",
    teach: "3+ Years",
    desc: "AI & ML professional focused on practical and industry-ready learning."
  },
  {
    img: img4,
    name: " Dr.Annu Pathak",
    role: "Engineering Maths",
    work: "5+ Years",
    teach: "3+ Years",
    desc: "Specialist in Engineering Mathematics with strong academic expertise."
  },
];

const VisionMentors = () => {
  return (
    <section className="dl-mentor-section">

      {/* HEADER */}
      <div className="dl-mentor-header">
        <div>
      
          <h2>Meet our Top Mentors</h2>
          <div className="dl-underline"></div>
        </div>
      </div>

      {/* CARDS */}
      <div className="dl-mentor-cards">
        {mentors.map((m, i) => (
          <div className="dl-card" key={i}>

            <div className="dl-img-wrap">
              <img src={m.img} alt={m.name} />
            </div>

            <div className="dl-card-body">
              <h4>{m.name}</h4>
              <p className="dl-role">{m.role}</p>

              <div className="dl-exp">
                <span><b>{m.work}</b> Work Exp.</span>
                <span><b>{m.teach}</b> Teaching Exp.</span>
              </div>

              <p className="dl-desc">{m.desc}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default VisionMentors;
