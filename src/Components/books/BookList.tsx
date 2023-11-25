import useBooksContext from "../../hooks/use-books-context";
import BookShow from "./BookShow";

const BookList = () => {
  const { books } = useBooksContext();

  const renderdBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderdBooks}</div>;
};

export default BookList;
