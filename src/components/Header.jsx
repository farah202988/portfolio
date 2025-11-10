// src/components/Header.jsx
import React from "react";
import "../Style/Header.css";

export default function Header({ title, subtitle, children }) {
  return (
    <header className="page-header">
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        {subtitle && <p className="header-subtitle">{subtitle}</p>}
        {children && <div className="header-actions">{children}</div>}
      </div>
    </header>
  );
}