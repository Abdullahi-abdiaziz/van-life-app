import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Header = () => {
  const animation = {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <Link to="/hosts">Hosts</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
};
