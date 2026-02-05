import React from "react";
import "./WhatAppSection.css";
import whatsappImg from "./images/whatsapp.png";

const WhatsAppSection = () => {
  return (
    <section className="whatsapp-section" id="whatsapp">
      <div className="whatsapp-card">

        {/* LEFT */}
        <div className="whatsapp-left">
          <h2>Contact us on WhatsApp</h2>
          <p>
            Have questions about courses, fees, or career guidance?
            Message us on WhatsApp and our team will assist you instantly.
          </p>
        </div>

        {/* RIGHT */}
        <div className="whatsapp-right">
          <img src={whatsappImg} alt="WhatsApp" />
          <a
             href="https://wa.me/919559520191?text=hello%20i%20am%20interested%20in%20your%20courses%20please%20share%20details"
         target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            💬 Chart ON WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhatsAppSection;
