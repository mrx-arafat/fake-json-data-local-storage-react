import React from "react";

const Cosmetic = (props) => {
  console.log(props.cosmetic);

  const { name, age, _id } = props.cosmetic;
  return (
    <div>
      <h4>id:{_id}</h4>
      <h2>name:{name}</h2>
      <p>age: {age}</p>
    </div>
  );
};

export default Cosmetic;
