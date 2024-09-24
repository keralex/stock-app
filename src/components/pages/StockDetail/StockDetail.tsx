import React, { useState } from "react";
import PageLayout from "../../templates/PageLayout";
import { useParams } from "react-router-dom";
import dayjs, { Dayjs } from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import useFetchStockDetail from "../../../hooks/useFetchStocksDetail";
import StockChart from "../../organisms/StockChart";
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from "@mui/material";



const StockDetail: React.FC = () => {
    const dateFormat = 'YYYY-MM-DD HH:mm:ss';
    const params = useParams()
    const symbol = params.symbol;

    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
    const [endDate, setEndDate] = useState<Dayjs | null>(null);
    const [interval, setInterval] = useState<string>('1min');
    const [realTime, setRealTime] = useState<boolean>(false);
    const { data, isLoading, error } = useFetchStockDetail({ symbol, interval, start_date: startDate?.format(dateFormat), end_date: endDate?.format(dateFormat) });

    return (
        <PageLayout>
            <h1>Stock Detail</h1>
            <form>
                <FormControl>
                    <FormControlLabel control={
                        <Checkbox onChange={(event) => setRealTime(event.target.checked)} checked={realTime} />
                    } label="Do you want the chart to update in real time?" />
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="Start Date"
                        value={startDate}
                        onChange={(newValue: Dayjs | null) => setStartDate(newValue)}
                        views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
                    />
                    <DateTimePicker
                        label="End Date"
                        value={endDate}
                        onChange={(newValue: Dayjs | null) => setEndDate(newValue)}
                        views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
                    />
                </LocalizationProvider>
                <FormControl fullWidth>
                    <InputLabel id="interval-select-label">Interval</InputLabel>
                    <Select
                        id="interval-select"
                        value={interval}
                        label="Age"
                        onChange={(event) => setInterval(event.target.value as string)}
                    >
                        <MenuItem value={'1min'}>1 Min</MenuItem>
                        <MenuItem value={'5min'}>5 Min</MenuItem>
                        <MenuItem value={'15min'}>15 Min</MenuItem>
                    </Select>
                </FormControl>
            </form>
            {symbol && data &&
                <StockChart data={data.values} symbol={symbol} />
            }
        </PageLayout>
    )
};

export default StockDetail;