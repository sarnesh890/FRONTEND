import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/UserDashboardPage.css'; // Ensure styles are defined for the user dashboard

function UserDashboardPage() {
  const [user, setUser] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userId = localStorage.getItem('user'); // Getting the user ID from local storage
        if (!userId) {
          throw new Error('No user ID found');
        }
        const userResponse = await axios.get(`http://localhost:8080/users/info/${userId}`);
        const eventsResponse = await axios.get(`http://localhost:8080/users/${userId}/events`);
        setUser(userResponse.data);
        setRegisteredEvents(eventsResponse.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading user information.</p>;

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      {user ? (
        <div className="user-info">
          <p><strong>Name:</strong> {user.userName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phoneNumber}</p>
          {/* Add more user information as needed */}
        </div>
      ) : (
        <p>No user information available. Please log in.</p>
      )}
      <h2>Registered Events</h2>
      {registeredEvents.length > 0 ? (
        <ul className="registered-events">
          {registeredEvents.map(event => (
            <li key={event.id}>
              <p><strong>{event.eventName}</strong></p>
              <p>{event.location} - {event.startDate}</p>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No registered events found.</p>
      )}
    </div>
  );
}

export default UserDashboardPage;
