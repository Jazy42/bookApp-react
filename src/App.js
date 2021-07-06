import React, { useCallback, useState, useEffect } from "react";
import AddBook from "../src/components/Books/AddBook";
import Button from "./components/UI/Button/Button.js";
import BookList from "./components/Books/BookList";
import Header from "./components/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [books, setBooks] = useState([]);
  const addBookHandler = async (books) => {
    const response = await fetch(
      "https://booksapp-react-default-rtdb.firebaseio.com/books.json",
      {
        method: "POST",
        body: JSON.stringify(books), //body requires json
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  const fetchBooksHandler = useCallback(async () => {
    const response = await fetch(
      "https://booksapp-react-default-rtdb.firebaseio.com/books.json"
    );
    const data = await response.json();
    const allBooks = [];
    for (const key in data) {
      allBooks.push({
        id: key,
        title: data[key].title,
        description: data[key].description,
      });
    }
    setBooks(allBooks);
    console.log(allBooks);
  }, []);

  useEffect(() => {
    fetchBooksHandler();
  }, [fetchBooksHandler]);

  const ShowCartHandler = () => {
    console.info("called");
    setCartIsShown(true);
  };
  const HideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={HideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <AddBook onAddBook={addBookHandler} />
      <BookList books={books} />
      <Button type="submit" onClick={fetchBooksHandler}>
        fetch books
      </Button>
    </CartProvider>
  );
};
export default App;
