import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthButtons = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login(); // Simule la connexion
    navigate("/dashboard");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div>
      <button onClick={handleLogin}>Connexion</button>
      <button onClick={handleSignup}>Inscription</button>
    </div>
  );
};

export default AuthButtons;
