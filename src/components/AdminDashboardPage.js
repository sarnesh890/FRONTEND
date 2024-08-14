import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminDashboardPage.css';

const AdminDashboardPage = () => {
    const [eventRequests, setEventRequests] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const fetchEventRequests = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/events/admin/pending');
            if (response.ok) {
                const data = await response.json();
                console.log('Fetched Event Requests:', data); // Verify the structure and IDs
                setEventRequests(data);
            } else {
                console.error('Failed to fetch pending events');
            }
        } catch (error) {
            console.error('Error fetching pending events:', error);
        }
    };
    

    useEffect(() => {
        fetchEventRequests();
    }, []);

    const handleApprove = async (eventId) => {
        console.log('Approving event with ID:', eventId); // Check value of eventId
        if (eventId !== undefined && eventId !== null) {
            try {
                console.log(eventId);   
                const response = await fetch(`http://localhost:8080/api/events/admin/${eventId}/approve`, {
                    method: 'POST',
                });
                if (response.ok) {
                    fetchEventRequests(); // Refresh the list of pending events
                } else {
                    console.error('Failed to approve event');
                    setErrorMessage('Failed to approve event');
                }
            } catch (error) {
                console.error('Error approving event:', error);
                setErrorMessage('Error approving event');
            }
        } else {
            console.log("Event ID : ",eventId);
            console.error('Invalid event ID:', eventId);
        }
    };
    
    const handleReject = async (eventId) => {
        console.log('Rejecting event with ID:', eventId);
        if (window.confirm('Are you sure you want to reject this event?')) {
            try {
                const response = await fetch(`http://localhost:8080/api/events/admin/${eventId}/reject`, {
                    method: 'POST',
                });
                if (response.ok) {
                    fetchEventRequests();
                } else {
                    console.error('Failed to reject event');
                }
            } catch (error) {
                console.error('Error rejecting event:', error);
            }
        }
    };
    
    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <h1>Admin Dashboard</h1>
                <nav className="admin-nav">
                    <Link to="/manage-users">Manage Users</Link>
                    <Link to="/manage-events">Manage Events</Link>
                    <Link to="/logout">Logout</Link>
                </nav>
            </div>
            <div className="admin-main">
                <h2>Manage Event Requests</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {eventRequests.length === 0 ? (
                    <p>No pending event requests.</p>
                ) : (
                    <ul>
                        {eventRequests.map(event => (
                        <li key={event.eventId}>
                            <p><strong>{event.eventName}</strong></p>
                            <p>{event.location} - {event.startDate}</p>
                            <p>{event.description}</p>
                            <button onClick={() => handleApprove(event.eventId)}>Approve</button>
                            <button onClick={() => handleReject(event.id)}>Reject</button>
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default AdminDashboardPage;
