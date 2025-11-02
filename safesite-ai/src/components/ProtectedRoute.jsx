import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // or sessionStorage if you prefer

  if (!token) {
    // not logged in → redirect to auth
    return <Navigate to="/auth" replace />;
  }

  return children; // logged in → show the protected page
};

export default ProtectedRoute;
