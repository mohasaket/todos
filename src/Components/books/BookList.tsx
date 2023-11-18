import BookShow from "./BookShow";
interface Props {
  books: {
    id: number;
    title: string;
  }[];
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

const BookList = ({ books, onDelete, onEdit }: Props) => {
  const renderdBooks = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />
    );
  });
  return <div className="book-list">{renderdBooks}</div>;
};

export default BookList;
