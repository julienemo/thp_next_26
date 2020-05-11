import React from "react";
import { Link } from "react-router-dom";

import Form from "./Form";

const Navbar = ({ addToList }) => {
  return (
    <nav>
      <Link className="pageTitle" to="/">
        Your Encyclopedia of Trades
      </Link>
      <Form addToList={addToList} />
    </nav>
  );
};

export default Navbar;
