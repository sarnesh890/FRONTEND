
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import AllEventsPage from './components/AllEventsPage';
import HostEventPage from './components/HostEventPage';
import Navbar from './components/Navbar';// import Dashboard from './components/Dashboard';
import EventDetailsPage from './components/EventDetailsPage';
import RegisterEventPage from './components/RegisterEventPage';
import SuccessPage from './components/SuccessPage';
import { UserProvider } from './context/UserContext';
import AdminDashboardPage from './components/AdminDashboardPage';
import AdminLoginPage from './components/AdminLoginPage';
import CreateEventPage from './components/CreateEventPage'; 
import ManageUsersPage from './components/ManageUsersPage'; // Define this component
import ManageEventsPage from './components/ManageEventsPage'; // Define this component
import UserDashboardPage from './components/UserDashboardPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';

function App() {
  const [user, setUser] = useState(null);
   const [isAdmin, setAdmin] = useState(false);

  const handleLogin = (username,role) => {
    setUser(username);
    localStorage.setItem('user',username);
    if (role === 'admin') {
      setAdmin(true); // Update to true if the user is an admin
  }
  };

  const handleLogout = () => {
    setUser(null);
  };
  // const [admin, setAdmin] = useState(null);


  return (
    <UserProvider value={{user,setUser}}>
    <Router>
      <Navbar user={user} onLogout={handleLogout}  isAdmin={isAdmin}/>
      <Routes>
        <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} setUser={setUser}/>} />
        
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/all-events" element={<AllEventsPage />} />
        <Route path="/host-event" element={<HostEventPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/events/:eventId" element={<EventDetailsPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        
        <Route path="/event/:eventId" element={<EventDetailsPage />} />
        <Route path="/register/:eventId" element={<RegisterEventPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/admin-login" element={<AdminLoginPage setAdmin={setAdmin} />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/manage-users" element={<ManageUsersPage />} />
        <Route path="/manage-events" element={<ManageEventsPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        {/* <Route path="/events" element={<AllEventsPage />} /> */}
        <Route path="/user-dashboard" element={user ? <UserDashboardPage /> : <LoginPage />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import LoginPage from './components/LoginPage';
// import SignupPage from './components/SignupPage';
// import AllEventsPage from './components/AllEventsPage';
// import HostEventPage from './components/HostEventPage';
// import AboutUs from './components/AboutUs';
// import Navbar from './components/Navbar';
// import Dashboard from './components/Dashboard';
// import EventDetailsPage from './components/EventDetailsPage';
// import RegisterEventPage from './components/RegisterEventPage';
// import SuccessPage from './components/SuccessPage';

// function App() {
//   const [user, setUser] = useState(null);

//   const handleLogin = (username) => {
//     setUser(username);
//   };

//   const handleLogout = () => {
//     setUser(null);
//   };

//   return (
//     <Router>
//       <Navbar user={user} onLogout={handleLogout} />
//       <Routes>
//         <Route path="/" element={<HomePage user={user} />} />
//         <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/all-events" element={<AllEventsPage />} />
//         <Route path="/host-event" element={<HostEventPage />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/" />} />
//         <Route path="/event/:eventId" element={<EventDetailsPage />} />
//         <Route path="/register" element={<RegisterEventPage />} />
//         <Route path="/success" element={<SuccessPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
