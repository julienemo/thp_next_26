import React from "react";
import { Link } from "react-router-dom";

const Suggestion = ({ suggestion, uuid, onclick }) => {
  return (
    <Link to={`/jobs/${uuid}`}>
      <li
        className="autocomplete-items"
        onClick={() => {
          onclick(uuid, suggestion);
        }}
      >
        {suggestion}
      </li>
    </Link>
  );
};

export default Suggestion;
