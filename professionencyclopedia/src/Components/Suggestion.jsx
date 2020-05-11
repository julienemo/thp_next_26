import React from "react";
import { BrowerRouter as Router, Switch, Route, Link } from "react-router-dom";

const Suggestion = ({ suggestion, uuid }) => {
  const two = "2"; // placeholder
  return (
    <Link to={`/jobs/${uuid}`}>
      <li className="autocomplete-items"> {suggestion}</li>
    </Link>
  );
};

export default Suggestion;
