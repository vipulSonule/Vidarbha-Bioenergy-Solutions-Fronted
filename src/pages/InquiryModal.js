import React, { useState } from "react";
import "./InquiryModal.css";

const InquiryModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    capacity: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          inquiry: `Mobile: ${formData.mobile}, Company: ${formData.company}, Capacity: ${formData.capacity}, Message: ${formData.message}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message || "Inquiry submitted successfully!");
        setFormData({ name: "", mobile: "", email: "", company: "", capacity: "", message: "" });
      } else {
        setError(data.error || "Something went wrong!");
      }
    } catch (err) {
      setError("Failed to submit inquiry. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>MAKE AN INQUIRY</h2>

        <form className="inquiry-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
            <input type="tel" name="mobile" placeholder="Mobile" required value={formData.mobile} onChange={handleChange} />
          </div>

          <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />

          <div className="form-group">
            <input type="text" name="company" placeholder="Company Name" required value={formData.company} onChange={handleChange} />
            <input type="text" name="capacity" placeholder="Products Capacity" required value={formData.capacity} onChange={handleChange} />
          </div>

          <textarea name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange}></textarea>

          {loading && <p>Submitting...</p>}
          {success && <p className="success">{success}</p>}
          {error && <p className="error">{error}</p>}

          <div className="btn-group">
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
              Let's Connect
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryModal;
