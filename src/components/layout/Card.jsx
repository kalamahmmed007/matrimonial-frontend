import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, link, color }) => {
  return (
    <div
      style={{
        backgroundColor: color || "#f0f0f0",
        padding: "1.5rem",
        borderRadius: "10px",
        marginBottom: "1rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        flex: "1 1 250px"
      }}
    >
      <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ marginBottom: "1rem" }}>{description}</p>
      {link && (
        <Link
          to={link.to}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: link.bgColor || "#1890ff",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none"
          }}
        >
          {link.text}
        </Link>
      )}
    </div>
  );
};

export default Card;
