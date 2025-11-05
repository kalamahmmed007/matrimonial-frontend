import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/" onClick={handleClose}>
          Matrimonial
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleClose}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profiles" onClick={handleClose}>Profiles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search" onClick={handleClose}>Search</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chat" onClick={handleClose}>Chat</Link>
            </li>

            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard" onClick={handleClose}>Dashboard</Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-link nav-link text-danger"
                    onClick={() => { logout(); handleClose(); }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={handleClose}>Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
