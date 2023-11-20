import { ReactNode, createContext, useState } from 'react';
interface ProviderProps {
    children: ReactNode;
}
interface BooksContextProps {
    count?: number;
    incrementCount?: () => void
}

const BooksContext = createContext<BooksContextProps>({});

function Provider({ children }: ProviderProps) {
    const [count, setCount] = useState(5);

    const valueToShare = {
        count,
        incrementCount: () => {
            setCount(count + 1);
        },
    };

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;
