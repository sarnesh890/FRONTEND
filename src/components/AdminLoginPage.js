import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminLoginPage.css';

const AdminLoginPage = ({ setAdmin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (credentials.username === 'admin' && credentials.password === 'admin') {
      setAdmin(true);  // Indicate that the logged-in user is an admin
      navigate('/admin-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="admin-login-page">
      <h2>Admin Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="admin-login-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
