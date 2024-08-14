import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/EventDetailsPage.css';

function EventDetailsPage() {
    const { eventId } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/events/${eventId}`);
                if (response.ok) {
                    const data = await response.json();
                    setEvent(data);
                } else {
                    setError('Failed to fetch event details');
                }
            } catch (error) {
                setError('Error fetching event details');
            } finally {
                setLoading(false);
            }
        };

        fetchEventDetails();
    }, [eventId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!event) {
        return <div>No event found</div>;
    }

    const handleRegisterClick = () => {
        navigate(`/register/${event.id}`);
    };

    return (
        <div className="event-details-page">
            <div className="event-details-container">
                <div className="event-name">
                    <h1>{event.name}</h1>
                    <p className="event-location-date">
                        {event.location}, {event.date}
                    </p>
                </div>
                {/* <img className="event-image" src={event.image} alt={event.name} /> */}
                <img className="event-image" src={event.eventImage} alt={event.name} />
                <div className="event-info">
                    <h2>About the Event</h2>
                    <p>{event.details}</p>
                    <h2>Event Activities</h2>
                    <p>{event.schedule}</p>
                    <h2>Contact Details</h2>
                    <p>{event.contact}</p>
                    <h2>Last Date for Registration</h2>
                    <p>{event.registrationDeadline}</p>
                    <h2>Registration Fees</h2>
                    <p className="fees">{event.fees}</p>
                    <button className="register-button" onClick={handleRegisterClick}>Register</button>
                </div>
            </div>
        </div>
    );
}

export default EventDetailsPage;
