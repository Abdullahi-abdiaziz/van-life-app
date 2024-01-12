import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShimmerPostList } from "react-shimmer-effects";
import { motion } from "framer-motion";

const Vans = () => {
  const [vans, setVans] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("/api/vans")
        .then((res) => res.json())
        .then((data) => setVans(data.vans));
    }, 500);
  }, []);

  const animation = {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { delay: 0.2, type: "spring", stiffness: "400", damping: "20" },
  };

  return (
    <div>
      {vans ? (
        <motion.div {...animation} className="van">
          {vans.map((van) => (
            <Link key={van.id} className="van-tile" to={`/vans/${van.id}`}>
              <img src={van.imageUrl} />
              <div className="van-info">
                <p className="van-name">{van.name}</p>
                <p>
                  ${van.price}
                  <span>/day</span>
                </p>
              </div>
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
          ))}
        </motion.div>
      ) : (
        <ShimmerPostList
          className="post"
          postStyle="STYLE_FOUR"
          col={3}
          row={2}
          gap={30}
        />
      )}
    </div>
  );
};
export default Vans;
