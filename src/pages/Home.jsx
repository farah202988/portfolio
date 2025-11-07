import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Home.css";

export default function Home({ userEmail, onLogout }) {
  const navigate = useNavigate();

  // Gérer la déconnexion
  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="home-container">
      {/* Barre de navigation */}
      <nav className="home-navbar">
        <div className="navbar-content">
          <h2>Mon Portfolio</h2>
          <div className="user-section">
            <span className="user-email">Connecté: {userEmail}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Déconnexion
            </button>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="home-content">
        <section className="welcome-section">
          <h1>Bienvenue! 🎉</h1>
          <p>Vous êtes maintenant connecté à votre portfolio</p>
        </section>

        <section className="info-section">
          <div className="info-card">
            <h3>Email</h3>
            <p>{userEmail}</p>
          </div>
          <div className="info-card">
            <h3>Status</h3>
            <p>✓ Connecté</p>
          </div>
          <div className="info-card">
            <h3>Accès</h3>
            <p>Portfolio complet</p>
          </div>
        </section>
      </main>
    </div>
  );
}