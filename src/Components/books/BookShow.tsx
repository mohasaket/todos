import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../../hooks/use-books-context";

interface Props {
  book: {
    id: number;
    title: string;
  };

}

const BookShow = ({ book }: Props) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookByID } = useBooksContext();

  const handleDeleteClick = () => {
    deleteBookByID(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);

  };

  let content = <h3> {book.title}</h3>;

  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/200/300`} alt="books" />
      <div>{content}</div>
      <div className="actions">
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default BookShow;
