import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { columnsDefinition } from './columnsDefinition';
import { StockListItem } from '../../../types/StocksTypes';

interface StockTableProps {
	data: StockListItem[];
	isLoading: boolean;
	error?: string;
	searchQuery: string;
}

const StockTable: React.FC<StockTableProps> = ({ data, isLoading, error, searchQuery }) => {
	const getData = (): StockListItem[] => {
		if (searchQuery) {
			return data
				? data.filter(
						(row) =>
							row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
							row.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
				  )
				: [];
		}
		return data;
	};

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<Box>
			<DataGrid
				columns={columnsDefinition}
				rows={getData()}
				getRowId={(row: StockListItem) => row.symbol}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 10,
						},
					},
				}}
				loading={isLoading}
				pageSizeOptions={[5, 10, 20]}
				disableColumnMenu
			/>
		</Box>
	);
};

export default StockTable;
