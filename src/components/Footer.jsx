// src/components/Footer.jsx
import React from "react";
import "../Style/Footer.css";

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-content">
        <p>&copy; 2025 Mon Portfolio. Tous droits réservés.</p>
        <div className="footer-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}