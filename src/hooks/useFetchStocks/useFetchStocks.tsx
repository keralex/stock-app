import { StockListItem } from '../../types/StocksTypes';
import { useQuery } from '@tanstack/react-query';

const fetchStocks = async (): Promise<StockListItem[]> => {
    const response = await fetch('https://api.twelvedata.com/stocks?source=docs&exchange=NYSE');

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    return result.data;
};

const useFetchStocks = () => {
    return useQuery<StockListItem[], Error>({ queryKey: ['stocks'], queryFn: fetchStocks });
};

export default useFetchStocks;