import React, { useState } from 'react';
import PageLayout from '../../templates/PageLayout';
import { useParams } from 'react-router-dom';
import dayjs, { Dayjs } from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import useFetchStockDetail from '../../../hooks/useFetchStocksDetail';
import StockChart from '../../organisms/StockChart';
import {
	Box,
	Checkbox,
	CircularProgress,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from '@mui/material';

const StockDetail: React.FC = () => {
	const dateFormat = 'YYYY-MM-DD HH:mm:ss';
	const params = useParams();
	const { symbol, name } = params;

	const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
	const [endDate, setEndDate] = useState<Dayjs | null>(null);
	const [interval, setInterval] = useState<string>('1min');
	const [realTime, setRealTime] = useState<boolean>(false);
	const [chartType, setChartType] = useState<'line' | 'candlestick'>('line');

	const { data, isLoading, error } = useFetchStockDetail({
		symbol,
		interval,
		start_date: startDate?.format(dateFormat),
		end_date: endDate?.format(dateFormat),
		realTime,
	});

	return (
		<PageLayout>
			<Typography variant='h4' component='h1'>
				{symbol} | {name} | {data?.meta.currency}
			</Typography>
			<Box my='1rem'>
				<FormControl>
					<FormControlLabel
						control={
							<Checkbox onChange={(event) => setRealTime(event.target.checked)} checked={realTime} />
						}
						label='Do you want the chart to update in real time?'
					/>
				</FormControl>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DateTimePicker
						label='Start Date'
						value={startDate}
						onChange={(newValue: Dayjs | null) => setStartDate(newValue)}
						views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
						sx={{ mr: '1rem' }}
					/>
					<DateTimePicker
						label='End Date'
						value={endDate}
						onChange={(newValue: Dayjs | null) => setEndDate(newValue)}
						views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
					/>
				</LocalizationProvider>
			</Box>
			<Box my='1rem'>
				<FormControl>
					<InputLabel id='interval-select-label'>Interval</InputLabel>
					<Select
						id='interval-select'
						value={interval}
						label='Interval'
						onChange={(event) => setInterval(event.target.value as string)}
						sx={{ width: '200px', mr: '1rem' }}
					>
						<MenuItem value={'1min'}>1 Min</MenuItem>
						<MenuItem value={'5min'}>5 Min</MenuItem>
						<MenuItem value={'15min'}>15 Min</MenuItem>
					</Select>
				</FormControl>
				<FormControl>
					<InputLabel id='chart-select-label'>Chart Type</InputLabel>
					<Select
						id='chart-select'
						value={chartType}
						label='Chart Type'
						onChange={(event) => setChartType(event.target.value as 'line' | 'candlestick')}
						sx={{ width: '200px' }}
					>
						<MenuItem value={'line'}>Line</MenuItem>
						<MenuItem value={'candlestick'}>Candlestick</MenuItem>
					</Select>
				</FormControl>
			</Box>
			{symbol && data && !isLoading ? (
				<StockChart data={data.values} symbol={symbol} chartType={chartType} />
			) : (
				<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
					<CircularProgress />
				</Box>
			)}
		</PageLayout>
	);
};

export default StockDetail;
