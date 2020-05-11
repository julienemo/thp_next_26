import React from "react";
import { Link } from "react-router-dom";
import Books from "../Constants/Books";

const Navbar = () => {
  const shortid = require("shortid");
  return (
    <div>
      {Books.map((book) => (
        <Link key={shortid.generate()} to={`/book/${book.slug}`}>
          {book.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
