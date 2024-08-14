// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import '../styles/AdminDashboard.css';

// // // Sample static user data
// // const staticUsers = [
// //   { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
// //   { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
// //   { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
// //   // Add more static users as needed
// // ];

// // const AdminDashboard = () => {
// //   const [users] = useState(staticUsers); // Use static data here

// //   return (
// //     <div className="admin-dashboard">
// //       <h2>Admin Dashboard</h2>
// //       <div className="admin-options">
// //         <Link to="/admin/create-event" className="admin-option">Create Event</Link>
// //         <Link to="/admin/manage-users" className="admin-option">Manage Users</Link>
// //       </div>
// //       <h3>Manage Users</h3>
// //       <table className="users-table">
// //         <thead>
// //           <tr>
// //             <th>ID</th>
// //             <th>Name</th>
// //             <th>Email</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {users.map(user => (
// //             <tr key={user.id}>
// //               <td>{user.id}</td>
// //               <td>{user.name}</td>
// //               <td>{user.email}</td>
// //               <td>
// //                 <Link to={`/admin/user-details/${user.id}`} className="view-details">View Details</Link>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AdminDashboard.css'; // Add your styles for the admin dashboard

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   const handleManageUsers = () => {
//     navigate('/manage-users');
//   };

//   const handleManageEvents = () => {
//     navigate('/manage-events');
//   };

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard</h2>
//       <div className="admin-options">
//         <button onClick={handleManageUsers}>Manage Users</button>
//         <button onClick={handleManageEvents}>Manage Events</button>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
