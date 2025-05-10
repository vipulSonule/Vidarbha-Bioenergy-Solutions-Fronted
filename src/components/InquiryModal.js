import React, { useState } from "react";
import "./InquiryModal.css";

function InquiryModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",     // still collecting as “mobile”
    email: "",
    company: "",
    capacity: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, mobile, email, company, capacity, message } = formData;
    if (!name || !mobile || !email || !company || !capacity || !message) {
      setError("All fields are required.");
      return false;
    }
    if (!/^[0-9]{10}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return false;
    }
    if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,4}$/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/inquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            mobile: formData.mobile.trim(),
            email: formData.email.trim(),
            company: formData.company.trim(),
            capacity: formData.capacity.trim(),
            message: formData.message.trim(),
          }),
        }
      );
      
      
      

      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      alert(data.message || "Inquiry submitted!");
      setFormData({ name: "", mobile: "", email: "", company: "", capacity: "", message: "" });
    } catch (err) {
      console.error("Inquiry submission error:", err);
      alert("Error submitting inquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>MAKE AN INQUIRY</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required/>
            <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <input name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required/>
            <input name="capacity" placeholder="Products Capacity" value={formData.capacity} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required/>
          </div>
          <div className="btn-group">
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp"/>
              Let's Connect
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InquiryModal;
