import React, { useRef } from "react";
import Button from "../UI/Button/Button";

const AddBook = (props) => {
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const addbookHandler = (event) => {
    event.preventDefault();

    const books = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    };

    props.onAddBook(books);
  };

  return (
    <form onSubmit={addbookHandler}>
      <label>Book name</label>
      <input type="text" id="bookname" ref={titleRef} />
      <label>Description</label>
      <input type="text" id="bookdescription" ref={descriptionRef} />
      <Button type="submit">Add book</Button>
    </form>
  );
};

export default AddBook;
