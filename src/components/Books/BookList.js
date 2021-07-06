import React from "react";
import Book from "./Book";

const BookList = (props) => {
  return (
    <ul>
      {props.books.map((book) => (
        <Book
          key={book.key}
          title={book.title}
          description={book.description}
        />
      ))}
    </ul>
  );
};

export default BookList;
