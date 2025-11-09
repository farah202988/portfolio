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
import brightIdeasImg from "./images/brightideas.png";
import brightIdeas1 from "./images/brightideas1.png";
import brightIdeas2 from "./images/brightideas2.png";
import brightIdeas3 from "./images/brightideas3.png";
import brightIdeas4 from "./images/brightideas4.png";
import weatherAppImg from "./images/weatherapp.png";
import weatherApp1 from "./images/weatherapp1.png";
import weatherApp2 from "./images/weatherapp2.png";
import weatherApp3 from "./images/weatherapp3.png";
import weatherApp4 from "./images/weatherapp.png";

import crmDashboardImg from "./images/crmdashboard.png";
import crmDashboard1 from "./images/crmdashboard1.png";
import crmDashboard2 from "./images/crmdashboard2.png";
import crmDashboard3 from "./images/crmdashboard3.png";
import crmDashboard4 from "./images/crmdashboard.png";

import portfolioImg from "./images/portfolioImg.png";
import portfolio1 from "./images/portfolio1.png";
import portfolio2 from "./images/portfolio2.png";
import portfolio3 from "./images/portfolio3.png";
import portfolio4 from "./images/portfolio4.png";

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
      category: "Sites Web",
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
      category: "Dashboard",
      description: "A modern and responsive e-commerce dashboard designed to visualize key performance indicators.",
      fullDescription: "A modern and responsive e-commerce dashboard designed to visualize key performance indicators such as customers, orders, revenue, and monthly targets. The interface presents data through interactive charts and clean UI components inspired by professional analytics tools.",
      image: dashboardImg,
      gallery: [dashboard1, dashboard2, dashboard3, dashboard4],
      technologies: ["HTML5", "CSS3", "Bootstrap", "Chart.js"],
      link: "#"
    },
    {
      id: 3,
      title: "Bright Ideas",
      category: "Sites Web",
      description: "Plateforme collaborative pour partager et explorer des idées novatrices avec la communauté.",
      fullDescription: "Bright Ideas est une plateforme web développée avec React permettant aux utilisateurs de partager leurs idées créatives, de collaborer avec d'autres innovateurs et de participer à des projets collectifs. L'application offre une interface intuitive pour poster des idées, commenter, noter et suivre les projets en cours.",
      image: brightIdeasImg,
      gallery: [brightIdeas1, brightIdeas2, brightIdeas3, brightIdeas4],
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT Authentication"],
      link: "#"
    },
    {
      id: 4,
      title: "My Weather App",
      category: "Sites Web",
      description: "Application météo interactive affichant les prévisions météorologiques en temps réel pour n'importe quelle ville.",
      fullDescription: "My Weather App est une application React conçue pour afficher les conditions météorologiques actuelles et les prévisions pour les jours à venir. L'application intègre une API de météo, un système de recherche par ville et une interface intuitive avec des icônes météorologiques. Fonctionnalités: recherche par géolocalisation, historique des villes recherchées et affichage détaillé des prévisions.",
      image: weatherAppImg,
      gallery: [weatherApp1, weatherApp2, weatherApp3, weatherApp4],
      technologies: ["React", "OpenWeather API", "Geolocation API", "JavaScript ES6+"],
      link: "#"
    },
    {
      id: 5,
      title: "CRM Dashboard",
      category: "Dashboard",
      description: "Tableau de bord CRM professionnel pour gérer les clients, les ventes et les interactions commerciales.",
      fullDescription: "CRM Dashboard est une application React complète dédiée à la gestion des relations clients. Elle permet de visualiser et gérer l'ensemble du pipeline de ventes, tracker les interactions avec les clients, analyser les performances commerciales et générer des rapports détaillés. Interface intuitive avec graphiques interactifs, filtrage avancé et notifications en temps réel.",
      image: crmDashboardImg,
      gallery: [crmDashboard1, crmDashboard2, crmDashboard3, crmDashboard4],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "Redux"],
      link: "#"
    },
        {
      id: 6,
      title: "Portfolio Website",
      category: "React",
      description: "Personal portfolio website showcasing projects, skills, and contact information with dark mode support.",
      fullDescription: "Un portfolio personnel moderne construit avec React, présentant mes projets, compétences et informations de contact. Inclut un système de mode sombre/clair, une navigation fluide et un design responsive.",
      image: portfolioImg,
      gallery: [portfolio1, portfolio2, portfolio3, portfolio4],
      technologies: ["React", "CSS3", "React Router", "Dark Mode"],
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