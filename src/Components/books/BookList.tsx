import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../../context/book";
interface Props {
  books: {
    id: number;
    title: string;
  }[];
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

const BookList = ({ books, onDelete, onEdit }: Props) => {
  const { count, incrementCount } = useContext(BooksContext);
  const renderdBooks = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />
    );
  });
  return <div className="book-list">
    <div>{count}
      <button className="button" onClick={incrementCount}>Count</button></div>
    {renderdBooks}
  </div>;
};

export default BookList;
