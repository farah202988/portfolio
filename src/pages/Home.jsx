import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Style/Home.css";
import portfolioImg from "../images/portfolio.png";

export default function Home({ userEmail, onLogout }) {
  return (
    <div className="home-container">
      {/* Navbar Component */}
      <Navbar userEmail={userEmail} onLogout={onLogout} />

      {/* Hero Section */}
      <main className="home-content">
        <div className="hero-section">
          <div className="hero-left">
            <h1>Welcome to my Portfolio: Data & Web Projects Inside!</h1>
            <p>
              Hi! I'm Farah Bahri, a Business Intelligence student passionate about web development.
              I enjoy collecting and transforming data into insights through dashboards and interactive web apps.
              My goal is to combine data analysis and web technologies to create useful, modern solutions.
            </p>

            <div className="quick-links">
              <Link to="/projects" className="link-btn">View My Projects</Link>
              <Link to="/contact" className="link-btn">Contact Me</Link>
            </div>
          </div>

          <div className="hero-right">
            <div className="profile-image">
              <img src={portfolioImg} alt="Profile" />
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <section className="what-i-do-section">
          <div className="what-i-do-header">
            <p className="section-label">MY SKILLS</p>
            <h2>What I do</h2>
            <p className="section-description">
              Here are the key skills and tools I have developed in both Business Intelligence and Web Development, which I use to analyze data, build dashboards, and create interactive web applications.
            </p>
          </div>

          <div className="skills-container">
            <div className="skill-box">
              <h3>Business Intelligence & Data</h3>
              <ul className="skill-list-items">
                <li>ETL : Talend, Power BI Dataflows</li>
                <li>Visualisation : Power BI, Tableau, Excel avancé</li>
                <li>Bases de données : MySQL, PostgreSQL</li>
                <li>Langages : SQL, Python (pandas, matplotlib, seaborn, scikit-learn)</li>
                <li>Modélisation : Schéma étoile, flocon, OLAP</li>
                <li>Méthodologie : CRISP-DM, Data Warehousing</li>
              </ul>
            </div>

            <div className="skill-box">
              <h3>Développement Web</h3>
              <ul className="skill-list-items">
                <li>Front-end : HTML5, CSS3, JavaScript, React.js</li>
                <li>Back-end : Node.js, PHP, Express, API REST</li>
                <li>Base de données : MySQL, MongoDB</li>
                <li>Outils : VS Code, Git/GitHub, Postman</li>
                <li>Design : Figma, TailwindCSS, Bootstrap</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}