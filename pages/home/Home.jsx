import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import vanPhoto from '../images/van-svg.svg'

export default function Home() {
  const vanAnimate = {
    initial: { x: 200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const contentAnimate = {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <div className="home-container">
      <div className="homse_content">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="vans">Find your van</Link>
      </div>
      <div className="home_img">
        <img src={vanPhoto} alt="van" />
      </div>
    </div>
  );
}
