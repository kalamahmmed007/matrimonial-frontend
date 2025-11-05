import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5>Matrimonial.com.bd</h5>
            <p className="mb-0">Connecting hearts since 2025</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mx-2">
                <a href="/" className="text-light text-decoration-none">Home</a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="/search" className="text-light text-decoration-none">Search</a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="/dashboard" className="text-light text-decoration-none">Dashboard</a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="/admin" className="text-light text-decoration-none">Admin</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3">
          <small>&copy; {new Date().getFullYear()} Matrimonial.com.bd. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
