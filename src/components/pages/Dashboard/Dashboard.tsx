import React, { useState } from 'react';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import StockTable from '../../organisms/StockTable/StockTable';
import PageLayout from '../../templates/PageLayout';
import useFetchStocks from '../../../hooks/useFetchStocks/useFetchStocks';
import { Box, CircularProgress, Typography } from '@mui/material';
import { getSearchbarContainerStyles } from './Dashboars.styles';

const DashBoard: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const { data, isLoading, error } = useFetchStocks();

	const handleSearch = (query: string) => {
		setSearchQuery(query);
	};

	return (
		<PageLayout>
			<Box sx={getSearchbarContainerStyles()}>
				<Typography variant='h4' component='h1'>
					Stocks at NYSE
				</Typography>
				<SearchBar onSearch={handleSearch} placeholder='Search by name or symbol' />
			</Box>
			{isLoading ? (
				<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
					<CircularProgress />
				</Box>
			) : (
				<StockTable data={data || []} isLoading={isLoading} error={error?.message} searchQuery={searchQuery} />
			)}
		</PageLayout>
	);
};

export default DashBoard;
