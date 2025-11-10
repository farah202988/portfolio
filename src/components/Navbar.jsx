// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar({ userEmail, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h2>Mon Portfolio</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="user-section">
          <DarkModeToggle />
          <span className="user-email">SIGN IN</span>
          <button className="logout-btn" onClick={handleLogout}>
            LOGOUT
          </button>
        </div>
      </div>
    </nav>
  );
}