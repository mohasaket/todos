import { useState } from "react";
import BookCreate from "./Components/books/BookCreate";
import "./appBook.css";
interface Book {
  id: number;
  title: string;
}
function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const createBook = (title: string) => {
    const updateBooks = [...books, { id: 123, title: title }];
    setBooks(updateBooks);
  };

  return (
    <>
      {books.length}
      <BookCreate onCreate={createBook} />
    </>
  );
}

export default App;
