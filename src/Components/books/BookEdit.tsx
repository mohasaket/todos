import { ChangeEvent, FormEvent, useState } from "react";
interface Props {
  book: {
    id: number;
    title: string;
  };
  onSubmit: (id: number, title: string) => void;
}
const BookEdit = ({ book, onSubmit }: Props) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(book.id, title);
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
