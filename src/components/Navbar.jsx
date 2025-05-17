import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-menu">
          <Link to="/" className="nav-link">
            ホーム
          </Link>
          <Link to="/introduction" className="nav-link">
            Introduction
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/coming-soon" className="nav-link">
            Coming Soon
          </Link>
          <Link to="/contact" className="nav-link">
            お問い合わせ
          </Link>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
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
