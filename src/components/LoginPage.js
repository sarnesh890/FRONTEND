
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

function LoginPage({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/users/get/${credentials.username}/${credentials.password}`);
      if (response.ok) {
        const data = await response.text();
        onLogin(credentials.username);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          navigate('/');
        }, 2000);
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred during login');
    }
  };

  return (
    <div className="login-page">
      {showSuccess && <div className="success-message">Successfully logged in!</div>}
      <div className="login-box">
        <h2>Login to Eventora</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          </label>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
