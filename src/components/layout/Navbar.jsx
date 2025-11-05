import React from "react";
import { Link } from "react-router-dom"; // Optional if using React Router

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold text-danger" to="/">
          Matrimonial
        </Link>

        {/* Hamburger button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-bold text-dark" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-dark" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-dark" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-dark" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-danger ms-lg-3 fw-bold"
                to="/signup"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
