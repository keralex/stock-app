import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSearchClick = () => {
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder={placeholder}
            />
            <button onClick={handleSearchClick}>Search</button>
        </div>
    );
};

export default SearchBar;