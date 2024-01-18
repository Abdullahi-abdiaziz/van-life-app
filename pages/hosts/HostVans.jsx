import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShimmerPostList } from "react-shimmer-effects";

export default function HostVans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVansEls = vans.map((van) => (
    <Link to={`${van.id}`} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  const animation = {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: "400",
      damping: "20",
    },
  };

  return (
    <section className="host-vans">
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? (
          <motion.section className="host-vans-elements" {...animation}>
            {hostVansEls}
          </motion.section>
        ) : (
          <ShimmerPostList
            className="post"
            postStyle="STYLE_FIVE"
            col={3}
            row={2}
            gap={30}
          />
        )}
      </div>
    </section>
  );
}
