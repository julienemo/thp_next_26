import React from "react";
import { Link } from "react-router-dom";

import Form from "./Form";

const Navbar = () => {
  const five = "5"; // this is a placeholder
  return (
    <nav>
      <Link className="pageTitle" to="/">
        Your Encyclopedia of Trades
      </Link>
      <Form />
    </nav>
  );
};

export default Navbar;
