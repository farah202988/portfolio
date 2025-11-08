import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../Style/ProjectDetail.css";

export default function ProjectDetail({ projects, onLogout, userEmail }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-detail-container">
        <nav className="detail-navbar">
          <div className="navbar-content">
            <h2>Mon Portfolio</h2>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="user-section">
              <span className="user-email">SIGN IN</span>
              <button className="logout-btn" onClick={() => { onLogout(); navigate("/login"); }}>
                LOGOUT
              </button>
            </div>
          </div>
        </nav>
        <main className="detail-content">
          <h1>Project not found</h1>
          <Link to="/projects" className="btn-back">Back to Projects</Link>
        </main>
      </div>
    );
  }

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="project-detail-container">
      {/* Navbar */}
      <nav className="detail-navbar">
        <div className="navbar-content">
          <h2>Mon Portfolio</h2>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="user-section">
            <span className="user-email">SIGN IN</span>
            <button className="logout-btn" onClick={handleLogout}>
              LOGOUT
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="detail-content">
        <div className="back-button">
          <Link to="/projects">← Back to Projects</Link>
        </div>

        {/* Project Gallery */}
        <section className="detail-section">
          <h2>Project Gallery</h2>
          <div className="project-gallery">
            <div className="gallery-main">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="gallery-thumbnails">
              {project.gallery ? (
                project.gallery.map((img, idx) => (
                  <img key={idx} src={img} alt={`Gallery ${idx + 1}`} />
                ))
              ) : (
                <>
                  <img src={project.image} alt="Gallery 1" />
                  <img src={project.image} alt="Gallery 2" />
                  <img src={project.image} alt="Gallery 3" />
                  <img src={project.image} alt="Gallery 4" />
                </>
              )}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <div className="detail-main">
          <section className="detail-header">
            <h1>{project.title}</h1>
            <p className="detail-category">{project.category}</p>
            <p className="detail-description">{project.fullDescription}</p>
          </section>

          {/* Info Grid */}
          <section className="detail-section">
            <h2>Project Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <h3>Project Title</h3>
                <p>{project.title}</p>
              </div>
              <div className="info-item">
                <h3>Category</h3>
                <p>{project.category}</p>
              </div>
              <div className="info-item">
                <h3>Project Status</h3>
                <p>✓ Successfully Completed</p>
              </div>
              <div className="info-item">
                <h3>Completion Year</h3>
                <p>2024-2025</p>
              </div>
            </div>
          </section>

          

          {/* Technologies */}
          <section className="detail-section">
            <h2>Technologies Used</h2>
            <div className="tech-stack">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </section>

          {/* Description */}
          <section className="detail-section">
            <h2>Project Overview</h2>
            <p className="full-desc">
              {project.fullDescription}
            </p>
          </section>

          {/* Features */}
          <section className="detail-section">
            <h2>Key Features</h2>
            <ul className="features-list">
              <li>Navigation claire et intuitive entre les pages</li>
              <li>Mise en page responsive grâce à Bootstrap</li>
              <li>Intégration de galeries d'images pour les produits</li>
              <li>Formulaire de contact simple pour les clients</li>
              <li>Design moderne et ergonomique</li>
            </ul>
          </section>

          {/* Objectives */}
          <section className="detail-section">
            <h2>Project Objectives</h2>
            <ul className="objectives-list">
              <li>Démontrer mes compétences en développement front-end et UI/UX design</li>
              <li>Créer un site fonctionnel et visuellement attractif qui peut servir de base à des projets e-commerce plus avancés</li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="detail-footer">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </footer>
    </div>
  );
}