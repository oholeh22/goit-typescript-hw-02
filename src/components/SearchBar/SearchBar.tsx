import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { useState, FormEvent, ChangeEvent } from 'react';
import { SearchBarProps } from '../App/App.types';

const notify = (message: string): void => {
    toast(message, {
        duration: 2000,
        position: 'top-right',
        style: {
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
        },
    });
};

const SearchBar: React.FC<SearchBarProps> = ({ setQuery }) => {
    const [input, setInput] = useState<string>('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (input.trim() === '') {
            notify('Please enter a search term');
        } else {
            setQuery(input);
            setInput('');
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInput(e.target.value);
    };

    return (
        <header className={css.header}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images"
                    className={css.input}
                    value={input}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
                <Toaster />
            </form>
        </header>
    );
};

export default SearchBar;
