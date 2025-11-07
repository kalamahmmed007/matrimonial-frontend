import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const featuredMembers = [
    { name: "Ayesha", age: 25, city: "Dhaka", img: "https://via.placeholder.com/300" },
    { name: "Rahim", age: 27, city: "Chittagong", img: "https://via.placeholder.com/300" },
    { name: "Sami", age: 26, city: "Khulna", img: "https://via.placeholder.com/300" },
    { name: "Fatima", age: 24, city: "Sylhet", img: "https://via.placeholder.com/300" },
  ];

  const testimonials = [
    { text: "Found my life partner here!", name: "Ayesha & Rahim" },
    { text: "Very easy to use and authentic.", name: "Sami & Fatima" },
    { text: "Highly recommended for families.", name: "Karim & Nusrat" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundColor: "#f3a1a9ff",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="container" data-aos="fade-up">
          <h1 className="display-4 fw-bold mb-3">Find Your Perfect Match ❤️</h1>
          <p className="lead mb-4">
            Join thousands of families and start your journey of love today!
          </p>
          <div>
            <Link
              to="/signup"
              className="btn btn-hover btn-lg me-3 fw-bold text-white"
              style={{ background: "linear-gradient(90deg,#ff6a6a,#ffb6b6)" }}
            >
              Sign Up
            </Link>
            <Link
              to="/search"
              className="btn btn-outline-light btn-lg fw-bold"
            >
              Browse Profiles
            </Link>
          </div>
        </div>
      </section>

      {/* Features / Benefits */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4" data-aos="fade-up">Why Choose Us</h2>
          <div className="row">
            <div className="col-md-4 mb-4" data-aos="fade-right">
              <i className="bi bi-check-circle fs-1 text-danger"></i>
              <h5 className="mt-3 fw-bold">Verified Profiles</h5>
              <p>Every profile is verified for authenticity.</p>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-up">
              <i className="bi bi-shield-lock fs-1 text-danger"></i>
              <h5 className="mt-3 fw-bold">Secure & Private</h5>
              <p>Your data is safe and secure with us.</p>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-left">
              <i className="bi bi-people fs-1 text-danger"></i>
              <h5 className="mt-3 fw-bold">Thousands of Matches</h5>
              <p>Find your perfect match from our large community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Members */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center" data-aos="fade-up">Featured Members</h2>
          <div className="row">
            {featuredMembers.map((member, i) => (
              <div key={i} className="col-md-3 mb-4" data-aos="zoom-in">
                <div className="card card-hover">
                  <img src={member.img} className="card-img-top" alt="profile" />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{member.name}</h5>
                    <p className="card-text">{member.age} yrs, {member.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center" data-aos="fade-up">Success Stories</h2>
          <Carousel indicators={false} interval={4000}>
            {testimonials.map((story, i) => (
              <Carousel.Item key={i}>
                <div className="text-center py-5">
                  <p style={{ fontSize: "1.2rem" }}>"{story.text}"</p>
                  <h6 className="fw-bold">– {story.name}</h6>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center" style={{ backgroundColor: "#dc3545" }}>
        <div className="container" data-aos="fade-up">
          <h2 className="text-white fw-bold mb-4">Ready to Find Your Match?</h2>
          <a
            href="/signup"
            className="btn btn-hover btn-lg fw-bold text-white"
            style={{ background: "linear-gradient(90deg,#ff6a6a,#ffb6b6)" }}
          >
            Sign Up Now
          </a>
        </div>
      </section>

      {/* CSS for hover effects */}
      <style jsx>{`
        .btn-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .btn-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
      `}</style>
    </>
  );
};

export default Home;
