import React from "react";

const HeroSection = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundColor: "#e9b2b8ff", // Red background for now
        height: "100vh",            // Full viewport height
        width: "100vw",             // Full viewport width
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Optional overlay if you add image later */}
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div> */}

      {/* Hero content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h1 className="display-4 fw-bold mb-3">
          Find Your Perfect Match ❤️
        </h1>
        <p className="lead mb-4">
          Join thousands of families and start your journey of love today!
        </p>
        <div>
          <a href="/signup" className="btn btn-light btn-lg me-3 fw-bold text-danger">
            Sign Up
          </a>
          <a href="/browse" className="btn btn-outline-light btn-lg fw-bold">
            Browse Profiles
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
