import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Projects.css";

export default function Projects({ projects, onLogout, userEmail }) {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const categories = ["Tous", ...new Set(projects.map(p => p.category))];
  
  let filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  // Filtrer par mot-clé de recherche
  if (searchTerm.trim()) {
    filteredProjects = filteredProjects.filter(p => 
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      {/* Navbar */}
      <nav className="projects-navbar">
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

      {/* Projects Content */}
      <main className="projects-content">
        {/* Header Section */}
        <section className="projects-header">
          <h1>My Projects</h1>
          <p className="projects-description">
            Whether you have a mobile app idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality.
          </p>
        </section>

        {/* Search and Filters */}
        <section className="search-filters-section">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search projects by name or description..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <div key={project.id} className="project-card" onClick={() => openModal(project)}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <button className="see-details-btn">SEE DETAILS</button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-projects">No projects found matching your search</p>
          )}
        </section>
      </main>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            
            <div className="modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>

            <div className="modal-body">
              <h2>{selectedProject.title}</h2>
              <p className="modal-category">{selectedProject.category}</p>
              
              <p className="modal-description">{selectedProject.fullDescription}</p>
              
              <div className="modal-technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <Link to={`/project/${selectedProject.id}`} className="modal-btn-primary">
                  View Full Details
                </Link>
                <button className="modal-btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="projects-footer">
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