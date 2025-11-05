import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";

const SearchPage = () => {
  const { user, isAuthenticated } = useAuth();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Dummy search function (replace with API call later)
  const handleSearch = () => {
    if (!query) return;
    // For demo, just return dummy users
    const dummyResults = [
      { id: 1, name: "John Doe", age: 28, city: "Dhaka" },
      { id: 2, name: "Jane Smith", age: 25, city: "Chittagong" }
    ].filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );

    setResults(dummyResults);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Search Profiles</h1>

      {isAuthenticated ? (
        <>
          <input
            type="text"
            placeholder="Search by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: "0.5rem",
              width: "250px",
              marginRight: "1rem",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#1890ff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Search
          </button>

          <div style={{ marginTop: "2rem" }}>
            {results.length > 0 ? (
              <ul>
                {results.map((profile) => (
                  <li key={profile.id} style={{ marginBottom: "1rem" }}>
                    <strong>{profile.name}</strong>, {profile.age} years, {profile.city}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No results found.</p>
            )}
          </div>
        </>
      ) : (
        <p>Please login to search profiles.</p>
      )}
    </div>
  );
};

export default SearchPage;
