import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/Vite-React/"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            ホーム
          </Link>
          <Link
            to="/Vite-React/introduction"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Introduction
          </Link>
          <Link
            to="/Vite-React/projects"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/Vite-React/coming-soon"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Coming Soon
          </Link>
          <Link
            to="/Vite-React/contact"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            お問い合わせ
          </Link>
          <a
            href="https://github.com/waiorecchi"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            GitHub
          </a>
        </div>
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
