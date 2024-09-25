import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { getSearchbarBoxStyles } from './SearchBar.styles';

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
		onSearch(query.trim());
	};

	return (
		<Box sx={getSearchbarBoxStyles()}>
			<TextField
				type='text'
				value={query}
				onChange={handleInputChange}
				placeholder={placeholder}
				sx={{ mr: '1rem' }}
			/>
			<Button onClick={handleSearchClick} variant='contained' color='secondary'>
				Search
			</Button>
		</Box>
	);
};

export default SearchBar;
