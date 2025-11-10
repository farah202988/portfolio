import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../Style/Projects.css";

export default function Projects({ projects, onLogout, userEmail }) {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["Tous", ...new Set(projects.map(p => p.category))];
  //Si selectedCategory vaut "Tous" → on prend tous les projets (projects)

//Sinon → on applique un filtre pour ne garder que les projets qui correspondent à la catégorie sélectionnée
//projects.filter(p => p.category === selectedCategory):La méthode filter crée un nouveau tableau avec seulement les projets dont p.category est égal à selectedCategory.
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

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      {/* Navbar Component */}
      <Navbar userEmail={userEmail} onLogout={onLogout} />

      {/* Projects Content */}
      <main className="projects-content">
        {/* Header Component */}
        <Header 
          title="My Projects" 
          subtitle="Whether you have a mobile app idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality."
        />

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

      {/* Footer Component */}
      <Footer />
    </div>
  );
}