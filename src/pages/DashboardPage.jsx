import React from "react";
import Dashboard from "../components/Dashboard";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const DashboardPage = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
