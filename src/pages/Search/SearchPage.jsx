import React from "react";
import { useLocation } from "react-router-dom";

const dummyProfiles = [
  { id: 1, name: "Ayesha", gender: "female", age: 24, religion: "Islam" },
  { id: 2, name: "Rahim", gender: "male", age: 28, religion: "Islam" },
  { id: 3, name: "Priya", gender: "female", age: 26, religion: "Hindu" },
  { id: 4, name: "John", gender: "male", age: 32, religion: "Christian" },
];

const SearchPage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const gender = params.get("gender");
  const ageRange = params.get("age");
  const religion = params.get("religion");

  const filtered = dummyProfiles.filter((p) => {
    const ageMatch =
      !ageRange ||
      (p.age >= parseInt(ageRange.split("-")[0]) &&
        p.age <= parseInt(ageRange.split("-")[1] || 100));

    return (
      (!gender || p.gender === gender) &&
      ageMatch &&
      (!religion || p.religion === religion)
    );
  });

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Search Results</h2>

      {filtered.length === 0 ? (
        <p className="text-danger">No profiles found!</p>
      ) : (
        <div className="row">
          {filtered.map((p) => (
            <div className="col-md-4 mb-4" key={p.id}>
              <div className="card shadow">
                <div className="card-body">
                  <h4>{p.name}</h4>
                  <p>Gender: {p.gender}</p>
                  <p>Age: {p.age}</p>
                  <p>Religion: {p.religion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
