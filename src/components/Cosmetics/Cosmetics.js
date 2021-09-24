import React, { useEffect, useState } from "react";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("./cosmetics.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>hello </h1>
    </div>
  );
};

export default Cosmetics;
