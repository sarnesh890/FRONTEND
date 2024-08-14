import React, { useState, useEffect } from 'react';
import '../styles/ManageEventsPage.css';

const ManageEventsPage = () => {
    const [approvedEvents, setApprovedEvents] = useState([]);

    useEffect(() => {
        const fetchApprovedEvents = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/events/all');
                if (response.ok) {
                    const data = await response.json();
                    setApprovedEvents(data);
                } else {
                    console.error('Failed to fetch approved events');
                }
            } catch (error) {
                console.error('Error fetching approved events:', error);
            }
        };

        fetchApprovedEvents();
    }, []);

    const handleDelete = async (eventId) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            try {
                const response = await fetch(`http://localhost:8080/api/events/admin/${eventId}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    setApprovedEvents(approvedEvents.filter(event => event.id !== eventId));
                } else {
                    console.error('Failed to delete event');
                }
            } catch (error) {
                console.error('Error deleting event:', error);
            }
        }
    };

    return (
        <div className="manage-events-page">
            <h1>Manage Approved Events</h1>
            {approvedEvents.length === 0 ? (
                <p>No approved events available.</p>
            ) : (
                <ul>
                    {approvedEvents.map(event => (
                        <li key={event.eventId}>
                            <h2>{event.eventName}</h2>
                            <p>{event.location} - {event.startDate}</p>
                            <p>{event.description}</p>
                            <img src={event.eventImage} alt={event.eventName} style={{ width: '100px', height: '100px' }} />
                            <button onClick={() => handleDelete(event.eventId)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ManageEventsPage;
