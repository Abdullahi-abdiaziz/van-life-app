import React from "react";
import { useOutletContext } from "react-router-dom";

const Details = () => {
  const { currentVan } = useOutletContext();
  return (
    <section>
      <h4>
        Name: <span>{currentVan.name}</span>
      </h4>
      <h4>
        Category: <span>{currentVan.type}</span>
      </h4>
      <h4>
        Description: <span>{currentVan.description}</span>
      </h4>
      <h4>
        Vissibility: <span>public</span>
      </h4>
    </section>
  );
};

export default Details;
