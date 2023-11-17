import { ChangeEvent, FormEvent, useState } from "react";
interface Props {
  book: {
    id: number;
    title: string;
  };
  onEdit: (id: number, title: string) => void;
  onSubmit: () => void;
}
const BookEdit = ({ book, onEdit, onSubmit }: Props) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onEdit(book.id, title);
    onSubmit();
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
