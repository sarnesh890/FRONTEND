// src/components/ManageUsersPage.js
import React, { useState, useEffect } from 'react';
import '../styles/ManageUsersPage.css';

const ManageUsersPage = () => {
    const [users, setUsers] = useState([]);
    const [userEvents, setUserEvents] = useState({});

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8080/users');
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data);
                } else {
                    console.error('Failed to fetch users');
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDeleteUser = async (userId) => {
        try {
            const response = await fetch(`http://localhost:8080/users/${userId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // Remove the deleted user from the state
                setUsers(users.filter(user => user.userId !== userId));
            } else {
                console.error('Failed to delete user');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleFetchUserEvents = async (userId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/users/${userId}/events`);
            if (response.ok) {
                const data = await response.json();
                setUserEvents(prevState => ({ ...prevState, [userId]: data }));
            } else {
                console.error('Failed to fetch user events');
            }
        } catch (error) {
            console.error('Error fetching user events:', error);
        }
    };

    return (
        <div className="manage-users-page">
            <h1>Manage Users</h1>
            {users.length === 0 ? (
                <p>No users available.</p>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.userId} className="user-card">
                            <h2>{user.name}</h2>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <button onClick={() => handleFetchUserEvents(user.userId)}>View Events</button>
                            <button onClick={() => handleDeleteUser(user.userId)}>Delete User</button>

                            {userEvents[user.id] && (
                                <div className="user-events">
                                    <h3>Registered Events:</h3>
                                    <ul>
                                        {userEvents[user.userId].map(event => (
                                            <li key={event.id}>
                                                <h4>{event.eventName}</h4>
                                                <p>{event.location} - {event.startDate}</p>
                                                <p>{event.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ManageUsersPage;
