import React from "react";

const AddBook = (props) => {
  const onSubmitHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label>Book name</label>
      <input type="text" id="bookname" />
      <label>Description</label>
      <input type="text" id="bookdescription" />
      <button type="submit">Add book</button>
    </form>
  );
};

export default AddBook;
