import React from 'react';
import { Box, TextField } from '@mui/material';

type SearchBarProps = {
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ value, placeholder, onChange }) => {
    return (
        <Box display="flex" mb={4}>
            <TextField value={value} onChange={onChange} placeholder={placeholder} />
        </Box>
    );
};

export default SearchBar;