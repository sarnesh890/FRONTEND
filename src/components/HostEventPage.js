// import React from 'react';
// import '../styles/HostEventPage.css'
// function HostEventPage() {
//   const handleHostEvent = (e) => {
//     e.preventDefault();
//     // Implement event hosting logic here
//   };

//   return (
//     <div>
//       <h2>Host an Event</h2>
//       <form onSubmit={handleHostEvent}>
//         <label>
//           Event Name:
//           <input type="text" name="eventName" required />
//         </label>
//         <label>
//           Organizer Name:
//           <input type="text" name="organizerName" required />
//         </label>
//         <label>
//           Date:
//           <input type="date" name="date" required />
//         </label>
//         <label>
//           Location:
//           <input type="text" name="location" required />
//         </label>
//         <label>
//           Description:
//           <textarea name="description" required></textarea>
//         </label>
//         <button type="submit">Host Event</button>
//       </form>
//     </div>
//   );
// }

// export default HostEventPage;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/HostEventPage.css';

// function HostEventPage() {
//   const navigate = useNavigate();

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Handle event creation logic here
//     navigate('/event-created'); // Navigate to event created confirmation or details page
//   };

//   return (
//     <div>
//       <h2>Host an Event</h2>
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Event Name:
//           <input type="text" name="eventName" required />
//         </label>
//         <label>
//           Date:
//           <input type="date" name="date" required />
//         </label>
//         <label>
//           Location:
//           <input type="text" name="location" required />
//         </label>
//         <label>
//           Description:
//           <textarea name="description" required></textarea>
//         </label>
//         <button type="submit">Create Event</button>
//       </form>
//     </div>
//   );
// }

// export default HostEventPage;
