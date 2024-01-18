import React from "react";
import { useOutletContext } from "react-router-dom";

const Pricing = () => {
  const { currentVan } = useOutletContext();
  return (
    <section>
      <h4>
        Price: <span>${currentVan.price}</span>
      </h4>
    </section>
  );
};

export default Pricing;
