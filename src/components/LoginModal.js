// import React from 'react';
// import '../styles/LoginModal.css'; // Ensure this path is correct

// function LoginModal({ onClose }) {
//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h2>Login Required</h2>
//         <p>Please login to view event details.</p>
//         <button className="btn-close" onClick={onClose}>Close</button>
//         <div className="modal-buttons">
//           <a href="/login" className="btn-login">Login</a>
//           <a href="/signup" className="btn-signup">Sign Up</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginModal;
// src/components/LoginModal.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginModal.css';

function LoginModal({ onClose }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    onClose();
    navigate('/login');
  };

  const handleSignupClick = () => {
    onClose();
    navigate('/signup');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login Required</h2>
        <p>Please login to view event details.</p>
        <button className="btn-close" onClick={onClose}>Close</button>
        <div className="modal-buttons">
          <button className="btn-login" onClick={handleLoginClick}>Login</button>
          <button className="btn-signup" onClick={handleSignupClick}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
