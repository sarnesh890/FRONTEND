
import React, { useState } from 'react';
import '../styles/SignupPage.css';

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: formData.username,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          password: formData.password
        })
      });

      if (response.ok) {
        window.location.href = '/login';
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Signup failed');
      }
    } catch (error) {
      setError('An error occurred during signup');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Sign Up for Eventora</h2>
        <form onSubmit={handleSignup}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Phone Number:
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </label>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </label>
          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </label>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
