import React, { useState } from "react";
import aiimage from "./homeimages20/aiimagesssss.jpg";
import "./Blog.css";

const Blog = () => {
  const [readMore, setReadMore] = useState(false);

  const shortText = `
Artificial Intelligence (AI) is shaping the future of technology and industry.
From smart assistants and automated machines to advanced data-driven decisions,
AI is transforming the way business, education, and daily life works.

At Lakshya I IT Institute, we train students with real-world AI skills so they
can build smart applications, understand machine learning concepts, and become
future-ready IT professionals.
`;

  const fullText = `
AI is not just automation — it is intelligence created by machines. Today, AI 
is driving innovation in healthcare, banking, education, robotics, cybersecurity,
and smart business systems. Companies worldwide need skilled AI developers who can 
analyze data, build machine learning models, and deploy intelligent applications.

At Lakshya I Institute, our goal is to prepare students for real industry 
opportunities. We focus on hands-on projects, practical coding, and working with 
AI technologies like Python, Machine Learning, Natural Language Processing, 
Computer Vision, and Data Analytics.

With the right guidance and real-time projects, students at Lakshya I learn to
create chatbots, face recognition apps, voice assistants, automation systems, 
and business AI tools — building a successful future in the world of Artificial Intelligence.
`;

  return (
    <div className="container py-5">
      <div className="premium-card p-4">

        <h2 className="fw-bold text-primary mb-4 text-center">AI & Future Technology</h2>

        {/* Short Text Left + Image Right */}
        <div className="row align-items-center my-4">
          {/* Text Left */}
          <div className="col-md-7">
            <p className="text-secondary">{shortText}</p>
          </div>

          {/* Image Right */}
          <div className="col-md-5 text-center">
            <img
              src={aiimage}
              alt="AI Future"
              className="img-fluid rounded premium-img"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Read More Button */}
        <div className="text-center">
          <button
            className="btn btn-primary premium-btn mb-3"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* Full text showing below */}
        {readMore && (
          <p className="text-secondary mt-3">{fullText}</p>
        )}

      </div>
    </div>
  );
};

export default Blog;
