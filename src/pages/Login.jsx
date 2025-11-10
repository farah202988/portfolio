import React, { useState } from "react";
import { useNavigate } from "react-router-dom";//useNavigate : Hook pour rediriger vers d'autres pages
import "../Style/Login.css";

export default function Login({ onLogin, isLoggedIn }) {
  // États du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Identifiants valides
  const VALID_EMAIL = "farahbahri@gmail.com";
  const VALID_PASSWORD = "Farah2025";

  // Si l'utilisateur est déjà connecté, rediriger vers home
  if (isLoggedIn) {
    navigate("/");
    return null;
  }

  // Gérer les changements d'input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
    setSuccess("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
    setSuccess("");
  };

  // Validation et soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();// Évite le rechargement de la page
    setError("");
    setSuccess("");

    // Validation basique
    if (!email || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    if (!email.includes("@")) {
      setError("Veuillez entrer un email valide");
      return;
    }

    if (password.length < 3) {
      setError("Le mot de passe doit contenir au moins 3 caractères");
      return;
    }

    // Vérifier si email et mot de passe sont les deux incorrects
    if (email !== VALID_EMAIL && password !== VALID_PASSWORD) {
      setError("Email et mot de passe incorrects");
      return;
    }

    // Vérifier l'email seul
    if (email !== VALID_EMAIL) {
      setError("Email incorrect");
      return;
    }

    // Vérifier le mot de passe seul
    if (password !== VALID_PASSWORD) {
      setError("Mot de passe incorrect");
      return;
    }

    // ✅ Si tout est correct, afficher message de succès
    setSuccess("✓ Connexion réussie! Redirection en cours...");
    setLoading(true);

    // Simuler un délai de chargement
    setTimeout(() => {
      // Appeler la fonction de connexion
      onLogin(email);
      // Rediriger vers la page d'accueil
      navigate("/");
      setLoading(false);//Appelle la fonction du parent (App.js)
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* En-tête */}
        <div className="login-header">
          <h1>Portfolio de Farah</h1>
          <p>Pour accéder au portfolio de Farah veuillez remplir ce formulaire</p>
        </div>

        {/* Afficher les erreurs */}
        {error && <div className="error-message">{error}</div>}

        {/* Afficher le succès */}
        {success && <div className="success-message">{success}</div>}

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="login-form">
          {/* Champ Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="exemple@email.com"
              disabled={loading}
            />
          </div>

          {/* Champ Mot de passe */}
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                disabled={loading}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loading}
              >
                {showPassword ? "masquer" : "voir"}
              </button>
            </div>
          </div>

          {/* Bouton Submit */}
          <button 
            type="submit" 
            className="login-btn"
            disabled={loading}
          >
            {loading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}