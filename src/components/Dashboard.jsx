import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Bienvenue sur votre tableau de bord</h1>
      <p>Voici vos informations et statistiques.</p>
      <button onClick={logout}>Déconnexion</button>
    </div>
  );
};

export default Dashboard;
