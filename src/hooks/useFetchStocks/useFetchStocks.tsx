import { StockListItem } from '../../types/StocksTypes';
import { useQuery } from '@tanstack/react-query';

const fetchStocks = async (): Promise<StockListItem[]> => {
    const response = await fetch('https://api.twelvedata.com/stocks?source=docs&exchange=NYSE');
    const result = await response.json();

    if (result.data && Array.isArray(result.data)) {
        return result.data;
    } else {
        throw new Error('No data found');
    }
};

const useFetchStocks = () => {
    return useQuery<StockListItem[], Error>({ queryKey: ['stocks'], queryFn: fetchStocks });
};

export default useFetchStocks;