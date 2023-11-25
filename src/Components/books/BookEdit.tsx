import { ChangeEvent, FormEvent, useState } from "react";
import useBooksContext from "../../hooks/use-books-context";
interface Props {
  book: {
    id: number;
    title: string;
  };
  onSubmit: () => void;
}
const BookEdit = ({ book, onSubmit }: Props) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit()
    editBookById(book.id, title);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" onChange={handleChange} value={title} />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
