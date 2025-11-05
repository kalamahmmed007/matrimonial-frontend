import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="d-flex align-items-center justify-content-center text-center text-white" style={{
        backgroundColor: "#f3a1a9ff",
        height: "100vh",
        width: "100vw"
      }}>
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Find Your Perfect Match ❤️</h1>
          <p className="lead mb-4">Join thousands of families and start your journey of love today!</p>
          <div>
            <a href="/signup" className="btn btn-light btn-lg me-3 fw-bold text-danger">Sign Up</a>
            <a href="/search" className="btn btn-outline-light btn-lg fw-bold">Browse Profiles</a>
          </div>
        </div>
      </section>

      {/* Features / Benefits */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose Us</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <i className="bi bi-check-circle fs-1 text-danger"></i>
              <h5 className="mt-3 fw-bold">Verified Profiles</h5>
              <p>Every profile is verified for authenticity.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-shield-lock fs-1 text-danger"></i>
              <h5 className="mt-3 fw-bold">Secure & Private</h5>
              <p>Your data is safe and secure with us.</p>
            </div>
            <div className="col-md-4 mb-4">
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
          <h2 className="fw-bold mb-4 text-center">Featured Members</h2>
          <div className="row">
            {[1,2,3,4].map((member)=>(
              <div key={member} className="col-md-3 mb-4">
                <div className="card">
                  <img src="https://via.placeholder.com/300" className="card-img-top" alt="profile" />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">Member {member}</h5>
                    <p className="card-text">25 yrs, City</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Success Stories</h2>
          <div className="row">
            {[
              { text: "Found my life partner here!", name: "Ayesha & Rahim" },
              { text: "Very easy to use and authentic.", name: "Sami & Fatima" },
              { text: "Highly recommended for families.", name: "Karim & Nusrat" }
            ].map((story,i)=>(
              <div key={i} className="col-md-4 mb-4">
                <p>"{story.text}"</p>
                <h6 className="fw-bold">– {story.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center" style={{ backgroundColor:"#dc3545" }}>
        <div className="container">
          <h2 className="text-white fw-bold mb-4">Ready to Find Your Match?</h2>
          <a href="/signup" className="btn btn-light btn-lg fw-bold text-danger">Sign Up Now</a>
        </div>
      </section>
    </>
  );
};

export default Home;
