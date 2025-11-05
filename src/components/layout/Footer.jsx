import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* About / Logo */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-danger">Matrimonial.com</h5>
            <p>
              Helping families find perfect matches with love, trust, and care. Join thousands of happy couples today!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-dark text-decoration-none">About</a></li>
              <li><a href="/services" className="text-dark text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-dark text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-dark fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-dark fs-5"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-dark fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-dark fs-5"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

        </div>

        <hr />

        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Matrimonial.com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
