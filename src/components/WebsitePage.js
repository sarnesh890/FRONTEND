// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/WebsitePage.css';

// function WebsitePage() {
//   // Assuming you store user info in localStorage after login
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const storedUsername = localStorage.getItem('username');
//     setUsername(storedUsername);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('username');
//     window.location.href = '/login';
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <Link to="/website">Home</Link>
//         <Link to="/all-events">All Events</Link>
//         <Link to="/host-event">Host Event</Link>
//         <Link to="/about">About</Link>
//         {username && (
//           <div className="user-dashboard">
//             <span>{username}</span>
//             <button onClick={handleLogout}>Logout</button>
//           </div>
//         )}
//       </nav>
//       <div className="content">
//         {/* Content of your WebsitePage */}
//       </div>
//     </div>
//   );
// }

// export default WebsitePage;
