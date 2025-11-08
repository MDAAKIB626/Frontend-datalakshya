import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <div>
        {/* 📞 Contact Section */}
<section className="contact" id="contact">
  <h2>Contact Us</h2>
  <form className="contact-form">
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
  <input
  type="tel"
  placeholder="Your Mobile Number"
  pattern="[0-9]{10}"
  maxLength="10"
  onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
  required
/>

    <textarea placeholder="Your Message" rows="5" required></textarea>
    <button type="submit" className="btn">Send Message</button>
  </form>
</section>
    </div>
  )
}

export default Contact
