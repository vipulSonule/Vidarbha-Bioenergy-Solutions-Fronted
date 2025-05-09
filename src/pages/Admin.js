import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [loadingInquiries, setLoadingInquiries] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin-login");
      return;
    }

    // Fetch contact messages
    axios
      .get("http://localhost:5000/api/contacts", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setContacts(res.data);
        setLoadingContacts(false);
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("token");
        setError("Failed to load contacts.");
        setLoadingContacts(false);
        navigate("/admin-login");
      });

    // Fetch inquiries
    axios
      .get("http://localhost:5000/api/inquiries", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setInquiries(res.data);
        setLoadingInquiries(false);
      })
      .catch((err) => {
        console.error("Failed to load inquiries:", err);
        setError("Failed to load inquiries.");
        setLoadingInquiries(false);
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Admin Panel</h2>
        <button onClick={handleLogout} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
          Logout
        </button>
      </div>

      {error && <div style={{ color: "red", marginTop: "1rem" }}>{error}</div>}

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
        {/* Contact Messages Section */}
        <section style={{ width: "48%", padding: "1rem", borderRight: "1px solid #ccc" }}>
          <h3>📬 Contact Messages</h3>
          {loadingContacts ? (
            <p>Loading contacts...</p>
          ) : (
            contacts.map((contact, index) => (
              <div key={index} style={{ borderBottom: "1px solid #ccc", margin: "1rem 0" }}>
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Phone:</strong> {contact.contactNo}</p>
                <p><strong>Company:</strong> {contact.company}</p>
                <p><strong>Message:</strong> {contact.message}</p>
              </div>
            ))
          )}
        </section>

        {/* Inquiries Section */}
        <section style={{ width: "48%", padding: "1rem" }}>
          <h3>❓ Inquiries</h3>
          {loadingInquiries ? (
            <p>Loading inquiries...</p>
          ) : (
            inquiries.map((inquiry, index) => (
              <div key={index} style={{ borderBottom: "1px solid #ccc", margin: "1rem 0" }}>
                <p><strong>Name:</strong> {inquiry.name}</p>
                <p><strong>Email:</strong> {inquiry.email}</p>
                <p><strong>Contact No:</strong> {inquiry.contactNo}</p>
                <p><strong>Company:</strong> {inquiry.company}</p>
                <p><strong>Capacity:</strong> {inquiry.capacity}</p>
                <p><strong>Inquiry:</strong> {inquiry.message}</p>
                <p><strong>Date:</strong> {new Date(inquiry.createdAt).toLocaleString()}</p>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default Admin;
