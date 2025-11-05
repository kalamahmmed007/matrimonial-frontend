import React from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Matrimonial.com.bd</h1>
      {isAuthenticated ? (
        <p>Hello, {user.name}! Explore your dashboard below.</p>
      ) : (
        <p>
          Please <Link to="/login" style={{ color: "#1890ff" }}>login</Link> to access your account.
        </p>
      )}

      <div style={{ marginTop: "2rem" }}>
        <Link
          to="/dashboard"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#52c41a",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            marginRight: "1rem"
          }}
        >
          Go to Dashboard
        </Link>
        <Link
          to="/admin"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#faad14",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none"
          }}
        >
          Admin Panel
        </Link>
      </div>
    </div>
  );
};

export default Home;
