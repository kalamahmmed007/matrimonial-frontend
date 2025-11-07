import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";

// Pages
import Home from "./pages/Home/Home.jsx";
import ProfilePage from "./pages/Profiles/ProfilePage.jsx";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit.jsx";
import PartnerPreferencePage from "./pages/PartnerPreferencePage/PartnerPreferencePage.jsx";
import SearchPage from "./pages/Search/SearchPage.jsx";
import ChatPage from "./pages/Chat/ChatPage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import AdminPanel from "./pages/Admin/AdminPanel.jsx";
import Register from "./pages/Register/Register.jsx";

// Layout
import Layout from "./components/layout/Layout.jsx";

// Protected Route wrapper
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
}

// Wrapper for routes that require authentication
function ProtectedLayout() {
  return (
    <ProtectedRoute>
      <Outlet />
    </ProtectedRoute>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Home */}
          <Route path="/" element={<Layout><Home /></Layout>} />

          {/* Protected routes */}
          <Route element={<Layout><ProtectedLayout /></Layout>}>
            <Route path="/profiles" element={<ProfilePage />} />
            <Route path="/profile/edit" element={<ProfileEdit />} />
            <Route path="/partner-preference" element={<PartnerPreferencePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Route>

          {/* Catch all 404 */}
          <Route path="*" element={<Layout><h1 className="text-center mt-10 text-danger">404 - Page Not Found</h1></Layout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
