import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { ShimmerContentBlock } from "react-shimmer-effects";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  const animation = {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { delay: 0.1 },
  };

  return (
    <section className="host-van-details">
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <motion.div className="host-van-detail-layout-container" {...animation}>
        {currentVan ? (
          <>
            <div className="host-van-detail-img">
              <img src={currentVan.imageUrl} />
            </div>
            <div className="host-nav-swapper">
              <nav className="host-nav">
                <NavLink to="details">Details</NavLink>
                <NavLink to="pricing">Pricing</NavLink>
                <NavLink to="photos">Photos</NavLink>
              </nav>
              <Outlet context={{ currentVan }} />
            </div>
          </>
        ) : (
          <ShimmerContentBlock
            title
            text
            cta
            thumbnailWidth={370}
            thumbnailHeight={370}
          />
        )}
      </motion.div>
    </section>
  );
}
