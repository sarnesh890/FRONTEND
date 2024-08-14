import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.png';

function Navbar({ user, isAdmin }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Eventora Logo" className="navbar-logo" />
        </Link>
      </div>
      <button className={`navbar-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
        <span className="navbar-toggle-icon"></span>
      </button>
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        {isAdmin ? (
          <>
            <Link to="/manage-users" className="nav-item">Manage Users</Link>
            <Link to="/manage-events" className="nav-item">Manage Events</Link>
            <button onClick={handleLogout} className="nav-item logout-btn" aria-label="Logout">Logout</button>
          </>
        ) : (
          <>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/all-events" className="nav-item">All Events</Link>
            {user && <Link to="/create-event" className="nav-item" aria-label="Create a new event">Create Event</Link>}
            {!user ? (
              <Link to="/login" className="nav-item">Login</Link>
            ) : (
              <>
                <Link to="/user-dashboard" className="nav-item" aria-label="User Dashboard">User Dashboard</Link>
                <button onClick={handleLogout} className="nav-item logout-btn" aria-label="Logout">Logout</button>
              </>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
