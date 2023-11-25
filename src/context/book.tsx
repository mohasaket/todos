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
    count?: number;
    incrementCount?: () => void;
    deleteBookByID: (id: number) => Promise<void>;
    editBookById: (id: number, newTitle: string) => Promise<void>;
    createBook: (title: string) => Promise<void>;
    fetchBooks: () => Promise<void>;
}

const BooksContext = createContext<BooksContextProps>({
    books: [],
    deleteBookByID: async () => { },
    editBookById: async () => { },
    createBook: async () => { },
    fetchBooks: async () => { },
});

function Provider({ children }: ProviderProps) {
    const [books, setBooks] = useState<Book[]>([]);

    const fetchBooks = async () => {
        const response = await axios.get(' http://localhost:3001/books');
        setBooks(response.data)
    }

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

    const deleteBookByID = async (id: number) => {
        await axios.put(` http://localhost:3001/books/${id}`)
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
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

    const booksContextValue: BooksContextProps = {
        books: [],
        deleteBookByID,
        editBookById,
        createBook,
        fetchBooks
    };
    return (
        <BooksContext.Provider value={booksContextValue}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;
