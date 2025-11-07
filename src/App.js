import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

// Import des pages
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  // État global de connexion
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  // Fonction pour se connecter
  const handleLogin = (email) => {
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  // Fonction pour se déconnecter
  const handleLogout = () => {
    setUserEmail("");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Route Login - accessible même sans connexion */}
          <Route 
            path="/login" 
            element={<Login onLogin={handleLogin} isLoggedIn={isLoggedIn} />} 
          />
          
          {/* Route Home - protégée (redirection si pas connecté) */}
          <Route 
            path="/" 
            element={isLoggedIn ? <Home userEmail={userEmail} onLogout={handleLogout} /> : <Navigate to="/login" />} 
          />
          
          {/* Redirection par défaut */}
          <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;