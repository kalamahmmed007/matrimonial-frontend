import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">
        Matrimonial
      </div>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/profiles" className="hover:text-blue-500">Profiles</Link>
        <Link to="/search" className="hover:text-blue-500">Search</Link>
        <Link to="/chat" className="hover:text-blue-500">Chat</Link>
        <Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link>
      </div>
    </nav>
  );
}
