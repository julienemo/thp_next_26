import React from "react";
import { useParams } from "react-router-dom";

const Skill = () => {
  const one = "1"; //
  let { skillID } = useParams("");
  return (
    <>
      <h1>Skill name</h1>
      <p>description</p>
      <div>
        <p>one job</p>
        <p>another job</p>
      </div>
    </>
  );
};

export default Skill;
