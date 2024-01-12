import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ShimmerContentBlock } from "react-shimmer-effects";
import { motion } from "framer-motion";

const vanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(`/api/vans/${params.id}`)
        .then((resp) => resp.json())
        .then((data) => setVan(data.vans));
    }, 500);
  }, [params.id]);

  const animation = {
    initial: {x: -200, opacity: 0},
    animate: {x: 0, opacity: 1},
    transition: {delay: .1}
  }
  return (
    <div className="van-detail-container">

      {van ? (
        <motion.div {...animation} className="van-detail">
          {/* <Link to="/vans">BacK</Link> */}
          <div className="van-image">
            <img src={`${van.imageUrl}`} />
          </div>
          <div className="van-more">
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p className="van-price">
              <span>${van.price}</span>/day
            </p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
          </div>
        </motion.div>
      ) : (
        <ShimmerContentBlock
          className="post-detail"
          title
          text
          cta
          thumbnailWidth={370}
          thumbnailHeight={370}
        />
      )}
    </div>
  );
};

export default vanDetail;
