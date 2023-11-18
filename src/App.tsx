import { useState } from "react";
import BookCreate from "./Components/books/BookCreate";
import BookList from "./Components/books/BookList";
import "./appBook.css";
interface Book {
  id: number;
  title: string;
}
function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const deleteBookByID = (id: number) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = (id: number, newTitle: string) => {
    const updatesBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatesBooks);
  };

  const createBook = (title: string) => {
    const updateBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ];
    setBooks(updateBooks);
  };

  return (
    <>
      <BookList books={books} onDelete={deleteBookByID} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </>
  );
}

export default App;
