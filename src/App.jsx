import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Pages
import Home from "./pages/Home/Home";
import Profiles from "./pages/Profiles/Profiles";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit";
import PartnerPreferencePage from "./pages/PartnerPreferencePage/PartnerPreferencePage";
import SearchPage from "./pages/Search/SearchPage";
import ChatPage from "./pages/Chat/ChatPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminPanel from "./pages/Admin/AdminPanel";

// Layout
import Navbar from "./components/layout/Navbar";

// Protected Route Component
function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="min-h-[calc(100vh-80px)] bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profiles" element={<ProtectedRoute><Profiles /></ProtectedRoute>} />
            <Route path="/profile/:id" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="/profile/edit" element={<ProtectedRoute><ProfileEdit /></ProtectedRoute>} />
            <Route path="/partner-preference" element={<ProtectedRoute><PartnerPreferencePage /></ProtectedRoute>} />
            <Route path="/search" element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />
            <Route path="/chat" element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
            {/* Catch all */}
            <Route path="*" element={<h1 className="text-center mt-10 text-red-500">404 - Page Not Found</h1>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
