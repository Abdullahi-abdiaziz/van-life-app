import React from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

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
        <NavLink to="/hosts">Hosts</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/vans">Vans</NavLink>
      </nav>
    </header>
  );
};
