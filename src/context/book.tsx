import axios from 'axios';
import { ReactNode, createContext, useState } from 'react';
interface Book {
    id: number;
    title: string;
}
interface ProviderProps {
    children: ReactNode;
}
interface BooksContextProps {
    books: Book[];
    deleteBookById: (id: number) => Promise<void>;
    editBookById: (id: number, newTitle: string) => Promise<void>;
    createBook: (title: string) => Promise<void>;
    fetchBooks: () => Promise<void>;
}
const BooksContext = createContext<BooksContextProps>(
    {
        books: [],
        deleteBookById: async () => { },
        editBookById: async () => { },
        createBook: async () => { },
        fetchBooks: async () => { }
    });


function Provider({ children }: ProviderProps) {
    const [books, setBooks] = useState<Book[]>([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    };

    const editBookById = async (id: number, newTitle: string) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
            }

            return book;
        });

        setBooks(updatedBooks);
    };

    const deleteBookById = async (id: number) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book: Book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const createBook = async (title: string) => {
        const response = await axios.post('http://localhost:3001/books', {
            title,
        });

        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    };

    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks,
    };

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;
