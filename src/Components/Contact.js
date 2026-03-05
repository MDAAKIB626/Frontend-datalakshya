import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {

        alert("Message sent successfully ✅");

        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: ""
        });

      } else {
        alert(data.msg || "Error sending message");
      }

    } catch (error) {

      console.log(error);
      alert("Server Error");

    }

    setLoading(false);
  };


  return (
    <section className="contact" id="contact">

      <h2>Contact Us</h2>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Your Mobile Number"
          maxLength="10"
          value={formData.mobile}
          onChange={(e) =>
            setFormData({
              ...formData,
              mobile: e.target.value.replace(/[^0-9]/g, "")
            })
          }
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>

    </section>
  );
};

export default Contact;