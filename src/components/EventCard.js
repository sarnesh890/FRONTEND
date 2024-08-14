
// import React from 'react';
// import '../styles/EventCard.css'; // Import the CSS for individual event card styling

// const EventCard = ({ event }) => {
//     return (
//         <div className="event-card">
//             <img src={event.eventImage} alt={event.eventName} />
//             <div className="event-card-content">
//                 <h3>{event.eventName}</h3>
//                 <p>{event.location}</p>
//                 <p>{event.description}</p>
//             </div>
//         </div>
//     );
// };

// export default EventCard;

// EventCard.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/EventCard.css'; // Ensure styles are defined for the event card

const EventCard = ({ event, onClick }) => {
    return (
        <div className="event-card" onClick={() => onClick(event.id)}>
            <img src={event.eventImage} alt={event.name} />
            <div className="card-content">
                <h2>{event.event}</h2>
                <p>{event.description}</p>
            </div>
        </div>
    );
};

EventCard.propTypes = {
    event: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default EventCard;

