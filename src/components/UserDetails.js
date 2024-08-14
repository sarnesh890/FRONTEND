// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import '../styles/UserDetails.css';

// const UserDetails = () => {
//   const { userId } = useParams();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(`/api/admin/users/${userId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch user details');
//         }
//         const data = await response.json();
//         setUser(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserDetails();
//   }, [userId]);

//   return (
//     <div className="user-details">
//       <h2>User Details</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p className="error-message">{error}</p>}
//       {user && (
//         <div className="user-info">
//           <p><strong>ID:</strong> {user.id}</p>
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Phone:</strong> {user.phone}</p>
//           <p><strong>Address:</strong> {user.address}</p>
//           <p><strong>Joined Date:</strong> {new Date(user.joinedDate).toLocaleDateString()}</p>
//           {/* Add more fields as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserDetails;
