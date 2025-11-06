import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <div>
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
  )
}

export default Contact
