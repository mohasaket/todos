import { useContext, useEffect } from "react";
import BookCreate from "./Components/books/BookCreate";
import BookList from "./Components/books/BookList";
import "./appBook.css";
import BooksContext from "./context/book";

function App() {
  const { fetchBooks } = useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  }, [])


  return (
    <>
      <BookList />
      <BookCreate />
    </>
  );
}

export default App;
