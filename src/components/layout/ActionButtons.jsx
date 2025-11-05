import React from "react";
import { Link } from "react-router-dom";

const ActionButtons = () => {
  const buttons = [
    { text: "Go to Dashboard", to: "/dashboard", bgColor: "#52c41a" },
    { text: "Admin Panel", to: "/admin", bgColor: "#faad14" },
    { text: "Search Now", to: "/search", bgColor: "#1890ff" },
  ];

  return (
    <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {buttons.map((btn, index) => (
        <Link
          key={index}
          to={btn.to}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: btn.bgColor,
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            flex: "1 1 200px",
            textAlign: "center"
          }}
        >
          {btn.text}
        </Link>
      ))}
    </div>
  );
};

export default ActionButtons;
