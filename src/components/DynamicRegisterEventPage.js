// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import '../styles/RegisterEventPage.css';

// const DynamicRegisterEventPage = () => {
//   const { eventId } = useParams(); // Get event ID from URL
//   const [eventDetails, setEventDetails] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     organization: '',
//     jobTitle: '',
//     additionalInfo: ''
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch event details based on eventId
//     const fetchEventDetails = async () => {
//       try {
//         const response = await fetch(`/api/events/${eventId}`);
//         const data = await response.json();
//         setEventDetails(data);
//       } catch (error) {
//         console.error('Error fetching event details:', error);
//       }
//     };

//     fetchEventDetails();
//   }, [eventId]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Implement registration logic here (e.g., API call to save registration data)
    
//     // Mock function to send email (Replace with real email-sending logic)
//     const sendConfirmationEmail = async () => {
//       // Make API call to send email
//       console.log(`Sending confirmation email to ${formData.email}`);
//     };

//     await sendConfirmationEmail();

//     // Navigate to success page
//     navigate(`/success`);
//   };

//   if (!eventDetails) return <div>Loading...</div>;

//   return (
//     <div className="register-event-page">
//       <h2>Register for {eventDetails.name}</h2>
//       <p>{eventDetails.description}</p>
//       <form onSubmit={handleSubmit} className="register-form">
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Phone:
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Organization:
//           <input
//             type="text"
//             name="organization"
//             value={formData.organization}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Job Title:
//           <input
//             type="text"
//             name="jobTitle"
//             value={formData.jobTitle}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Additional Information:
//           <textarea
//             name="additionalInfo"
//             value={formData.additionalInfo}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default DynamicRegisterEventPage;
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EventCard.css';

const EventCard = ({ event }) => {
    return (
        <Link to={`/events/${event.id}`} className="event-card">
            <img src={event.eventPoster} alt={`${event.eventName} poster`} />
            <h3>{event.eventName}</h3>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {event.startDate} - {event.endDate}</p>
            <p><strong>Location:</strong> {event.location}</p>
        </Link>
    );
};

export default EventCard;