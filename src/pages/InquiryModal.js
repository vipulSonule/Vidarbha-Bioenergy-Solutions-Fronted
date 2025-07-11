import React from "react";
import "./InquiryModal.css";

const InquiryModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>MAKE AN INQUIRY</h2>
        
        <form className="inquiry-form">
          <div className="form-group">
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Mobile" required />
          </div>

          <input type="email" placeholder="Email" required />
          <div className="form-group">
            <input type="text" placeholder="Company Name" required />
            <input type="text" placeholder="Products Capacity" required />
          </div>

          <textarea placeholder="Message" rows="4"></textarea>

          <div className="btn-group">
            <button type="submit" className="submit-btn">SUBMIT</button>
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
// import React from "react";
// import "./InquiryModal.css";

// function InquiryModal({ onClose }) {
//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <button className="close-btn" onClick={onClose}>X</button>
//         <h2>MAKE AN INQUIRY</h2>
//         <form>
//           <div className="form-group">
//             <input type="text" placeholder="Name" required />
//             <input type="text" placeholder="Mobile" required />
//           </div>
//           <div className="form-group">
//             <input type="email" placeholder="Email" required />
//           </div>
//           <div className="form-group">
//             <input type="text" placeholder="Company Name" required />
//             <input type="text" placeholder="Products Capacity" required />
//           </div>
//           <div className="form-group">
//             <textarea placeholder="Message" required />
//           </div>
//           <button type="submit" className="submit-btn">SUBMIT</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default InquiryModal;


