import React from "react";
import { useAuth } from "../../context/AuthContext.jsx";

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <p>Please login to view your profile.</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Your Profile</h1>
      <p>Name: {user.name}</p>
      {/* Future: Show more profile info */}
    </div>
  );
};

export default ProfilePage;
