import React from "react";
import { addToFakeDb } from "../../utilities/fakedb";

const Cosmetic = (props) => {
  console.log(props.cosmetic);

  const { name, age, _id, gender } = props.cosmetic;

  const handleEvent = () => {
    console.log(_id);
    addToFakeDb(name);
  };
  return (
    <div>
      <h4>id:{_id}</h4>
      <h2>name:{name}</h2>
      <p>age: {age}</p>
      <button onClick={handleEvent}>click</button>
    </div>
  );
};

export default Cosmetic;
