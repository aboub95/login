import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Simulez une logique de connexion ici
    if (email && name) {
      login();
      console.log(${'yuyuyu'});
      
      setSuccess(
        "Connexion réussie ! Vous serez redirigé vers le tableau de bord."
      );
      setTimeout(() => {
        window.location.href = "/dashboard"; // Redirection après 2 secondes
      }, 2000);
    } else {
      setError("Veuillez remplir tous les champs.");
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Mot de passe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default LoginForm;
