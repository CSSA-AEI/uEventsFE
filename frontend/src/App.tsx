import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/homepage/Home.tsx';
import EventPage from './pages/event/EventPage.tsx';
import Navbar from './components/Navbar.tsx';
import Login from './pages/login/Login.tsx';
import { useAuth } from './authentication/AuthContext.tsx';

function AppContent() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();  // Now safely inside Router context

  return (
    <div className="App">
      {isLoggedIn && location.pathname !== '/login' && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/events/:eventId" element={<EventPage />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent /> 
    </Router>
  );
}

export default App;