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
    count?: number;
    incrementCount?: () => void
}

const BooksContext = createContext<BooksContextProps>({});

function Provider({ children }: ProviderProps) {
    const [books, setBooks] = useState<Book[]>([]);

    const fetchBooks = async () => {
        const response = await axios.get(' http://localhost:3001/books');
        setBooks(response.data)
    }
    const deleteBookByID = async (id: number) => {
        await axios.put(` http://localhost:3001/books/${id}`)
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

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
    const valueToShare = {
        books,
        deleteBookByID,
        editBookById,
        createBook,
        fetchBooks
    }
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;
