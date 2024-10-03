import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Mon Application</h1>
      <nav>
        <Link to="/">Connexion</Link>
        <Link to="/signup">Inscription</Link>
      </nav>
    </header>
  );
};

export default Header;
