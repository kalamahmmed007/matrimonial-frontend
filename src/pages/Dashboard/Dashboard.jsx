import React from "react";
import { useAuth } from "../../context/AuthContext.jsx";

const Dashboard = () => {
  const { user, login, logout, isAuthenticated } = useAuth();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button
            onClick={logout}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#ff4d4f",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "1rem"
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button
            onClick={() => login({ name: "Admin" })}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#1890ff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "1rem"
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
