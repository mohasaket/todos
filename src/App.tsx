import axios from "axios";
import { useEffect, useState } from "react";
import BookCreate from "./Components/books/BookCreate";
import BookList from "./Components/books/BookList";
import "./appBook.css";
interface Book {
  id: number;
  title: string;
}
function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const response = await axios.get(' http://localhost:3001/books');
    setBooks(response.data)

  }
  useEffect(() => {
    fetchBooks();
  }, [])

  const deleteBookByID = async (id: number) => {
    await axios.put(` http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = async (id: number, newTitle: string) => {
    const response = await axios.put(` http://localhost:3001/books/${id}`, {
      title: newTitle,
    })

    const updatesBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatesBooks);

  };

  const createBook = async (title: string) => {

    const response = await axios.post(' http://localhost:3001/books', {
      title,
    })
    const updateBooks = [
      ...books,
      response.data
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
