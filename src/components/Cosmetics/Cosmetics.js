import React, { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("./cosmetics.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  return (
    <div>
      {cosmetics.map((cosmetic) => (
        <Cosmetic cosmetic={cosmetic}></Cosmetic>
      ))}
      <h1>hello </h1>
    </div>
  );
};

export default Cosmetics;
