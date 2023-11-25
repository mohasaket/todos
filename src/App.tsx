import { useContext, useEffect } from "react";
import BookCreate from "./Components/books/BookCreate";
import BookList from "./Components/books/BookList";
import "./appBook.css";
import BooksContext from "./context/book";

function App() {
  const { fetchBooks } = useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
