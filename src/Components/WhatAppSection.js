import React from "react";
import "./WhatAppSection.css";

const WhatsAppSection = () => {
  return (
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
  );
};

export default WhatsAppSection;
