import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

// Import des images
import farahMarketImg from "./images/farahmarket.jpg";
import farahMarket1 from "./images/farahmarket1.png";
import farahMarket2 from "./images/farahmarket2.png";
import farahMarket3 from "./images/farahmarket3.png";
import farahMarket4 from "./images/farahmarket4.png";
import dashboardImg from "./images/dashboard.png";
import dashboard1 from "./images/dashboard1.png";
import dashboard2 from "./images/dashboard2.png";
import dashboard3 from "./images/dashboard3.png";
import dashboard4 from "./images/dashboard.png";

// Import des pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

function App() {
  // État global de connexion
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  // Données des projets
  const [projects] = useState([
    {
      id: 1,
      title: "FarahMarket",
      category: "Web",
      description: "Boutique en ligne des produits 100% tunisiennes avec design moderne et responsif.",
      fullDescription: "FarahMarket est une plateforme e-commerce dédiée à la vente de produits tunisiens authentiques. Conçue avec HTML5, CSS3 et Bootstrap pour une expérience utilisateur fluide et professionnelle.",
      image: farahMarketImg,
      gallery: [farahMarket1, farahMarket2, farahMarket3, farahMarket4],
      technologies: ["HTML5", "CSS3", "Bootstrap"],
      link: "#"
    },
    {
      id: 2,
      title: "Ecommerce Dashboard",
      category: "Web",
      description: "A modern and responsive e-commerce dashboard designed to visualize key performance indicators.",
      fullDescription: "A modern and responsive e-commerce dashboard designed to visualize key performance indicators such as customers, orders, revenue, and monthly targets. The interface presents data through interactive charts and clean UI components inspired by professional analytics tools.",
      image: dashboardImg,
      gallery: [dashboard1, dashboard2, dashboard3, dashboard4],
      technologies: ["HTML5", "CSS3", "Bootstrap", "Chart.js"],
      link: "#"
    },
    {
      id: 3,
      title: "Landing Page Development",
      category: "Web",
      description: "Promotional landing page for a fitness website Summer Campaign. Form development included.",
      fullDescription: "Landing page professionnelle avec formulaire de contact.",
      image: "https://via.placeholder.com/300x200?text=Project+3",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      link: "#"
    },
    {
      id: 4,
      title: "Mobile App Development",
      category: "React",
      description: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
      fullDescription: "Application avec map intégrée et système de notation.",
      image: "https://via.placeholder.com/300x200?text=Project+4",
      technologies: ["React", "Google Maps API"],
      link: "#"
    },
    {
      id: 5,
      title: "E-commerce development",
      category: "JavaScript",
      description: "Ecommerce website offering access to the latest and greatest gadgets and accessories.",
      fullDescription: "Plateforme e-commerce avec panier et paiement.",
      image: "https://via.placeholder.com/300x200?text=Project+5",
      technologies: ["JavaScript", "Node.js", "Stripe API"],
      link: "#"
    },
    {
      id: 6,
      title: "Dashboard Analytics",
      category: "React",
      description: "Analytics dashboard with real-time data visualization and insights.",
      fullDescription: "Tableau de bord avec graphiques interactifs.",
      image: "https://via.placeholder.com/300x200?text=Project+6",
      technologies: ["React", "Chart.js", "Node.js"],
      link: "#"
    }
  ]);

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
          
          {/* Routes protégées */}
          <Route 
            path="/" 
            element={isLoggedIn ? <Home userEmail={userEmail} onLogout={handleLogout} /> : <Navigate to="/login" />} 
          />
          
          <Route 
            path="/projects" 
            element={isLoggedIn ? <Projects projects={projects} onLogout={handleLogout} userEmail={userEmail} /> : <Navigate to="/login" />} 
          />
          
          <Route 
            path="/project/:id" 
            element={isLoggedIn ? <ProjectDetail projects={projects} onLogout={handleLogout} userEmail={userEmail} /> : <Navigate to="/login" />} 
          />
          
          <Route 
            path="/contact" 
            element={isLoggedIn ? <Contact onLogout={handleLogout} userEmail={userEmail} /> : <Navigate to="/login" />} 
          />
          
          {/* Redirection par défaut */}
          <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;