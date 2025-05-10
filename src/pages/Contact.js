import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your message has been submitted!");
        setFormData({
          name: "",
          email: "",
          contactNo: "",
          company: "",
          message: "",
        });
      } else {
        alert("There was a problem submitting your message.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while submitting your message. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Section: Contact Information */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Have any questions or inquiries? Feel free to reach out! We’d love
            to assist you with our biomass pellets solutions.
          </p>

          <div className="contact-details">
            <p><strong>📍 Address:</strong><b> At.Devtak, Nagbhid, India</b></p>
            <h3>Directors Contact</h3>
            <p><strong>Himanshu B. Waghmare</strong> (Managing Director, Chief Financial Officer) 8928768132</p>
            <p><strong>Piyush V. Chilbule</strong> (Chief Marketing Officer) 7385603563</p>
            <p><strong>Vipul D. Sonule</strong> (Chief Operating Officer) 8308579791</p>
            <p><strong>Krunal K. Kamble</strong> (Chief Operating Officer) 7264043071</p>
            <p><strong>📧 Email:</strong> vidarbhabioenergysolutions@gmail.com</p>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="contact-form-container">
          <h3>Get in Touch</h3>
          <form onSubmit={handleSubmit}>
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
              type="text"
              name="contactNo"
              placeholder="Contact Number"
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="map-container">
        <h3>Find Us Here</h3>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3471.861777292379!2d79.73507667524525!3d20.6109326809359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDM2JzM5LjQiTiA3OcKwNDQnMTUuNiJF!5e1!3m2!1sen!2sin!4v1742023427009!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
