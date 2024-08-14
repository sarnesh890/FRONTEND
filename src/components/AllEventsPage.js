import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from './EventCard';
import '../styles/AllEventsPage.css';

const AllEventsPage = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/events/all');
                if (response.ok) {
                    const data = await response.json();
                    setEvents(data);
                } else {
                    console.error('Failed to fetch events');
                }
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    const handleCardClick = (eventId) => {
        navigate(`/event/${eventId}`);
    };

    return (
        <div className="all-events-page">
            <h1>All Events</h1>
            {events.length === 0 ? (
                <p>No events available.</p>
            ) : (
                <div className="events-grid">
                    {events.map(event => (
                        <EventCard key={event.eventId} event={event} onClick={() => handleCardClick(event.eventId)} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllEventsPage;
    