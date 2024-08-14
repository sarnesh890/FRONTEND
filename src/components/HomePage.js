
import React from 'react';
import { useNavigate } from 'react-router-dom';
import eventsData from '../assets/eventsData';
import '../styles/HomePage.css';

function HomePage({ user }) {
  const navigate = useNavigate();

  const handleCardClick = (eventId) => {
    if (user) {
      navigate(`/event/${eventId}`);
    } else {
      navigate('/login');
    }
  };

  const handleAdminClick = () => {
    navigate('/admin-login');
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Eventora</h1>
        <p className="hero-subtitle">Discover and manage your events effortlessly.</p>
      </div>
      <div className="event-cards-container">
        <div className="event-cards-wrapper">
          <div className="event-cards">
            {eventsData.slice(0, 6).map(event => (
              <div
                key={event.id}
                className="event-card"
                onClick={() => handleCardClick(event.id)}
              >
                <img src={require(`../assets/images/${event.image}`)} alt={event.name} />
                <div className="card-content">
                  <h2>{event.name}</h2>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <h2>About Eventora</h2>
          <p>Eventora helps you find and manage events effortlessly. From concerts to business conferences, explore a world of events today!</p>
          <div className="footer-links">
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </footer>
      {!user && (
        <button className="admin-button" onClick={handleAdminClick}>Admin Login</button>
      )}
    </div>
  );
}

export default HomePage;
