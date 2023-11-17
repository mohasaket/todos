import { useState } from "react";
import BookEdit from "./BookEdit";

interface Props {
  book: {
    id: number;
    title: string;
  };
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}
const BookShow = ({ book, onDelete, onEdit }: Props) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id: number, newTitle: string) => {
    setShowEdit(false);
    onEdit(id, newTitle);
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
