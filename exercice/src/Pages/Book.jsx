import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Books from "../Constants/Books";

const Book = () => {
  let { bookSlug } = useParams();
  const [currentBook, setCurrentBook] = useState(null);

  useEffect(() => {
    setCurrentBook(Books.find((book) => book.slug === bookSlug));
  }, [bookSlug]);

  const display = () => {
    if (!currentBook) {
      return "";
    }
    return (
      <div>
        <h1>{currentBook.title}</h1>
        <p>{currentBook.author}</p>
        <p>{currentBook.description}</p>
      </div>
    );
  };
  return display();
};

export default Book;
