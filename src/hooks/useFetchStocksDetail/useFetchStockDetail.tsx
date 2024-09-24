import { StockDetail } from "../../types/StocksTypes";
import { useQuery } from '@tanstack/react-query';


interface FetchStockDetailParams {
    symbol: string | undefined;
    interval: string;
    start_date?: string;
    end_date?: string;
    realTime?: boolean;
}

const fetchStockDetail = async ({ symbol, interval, start_date, end_date }: FetchStockDetailParams): Promise<StockDetail> => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const getDateParams = () => {
        if (start_date && end_date) {
            return `&start_date=${start_date}&end_date=${end_date}`;
        }
        return '';
    };

    const response = await fetch(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&apikey=${apiKey}${getDateParams()}`);
    const result = await response.json();

    if (result) {
        return result;
    } else {
        throw new Error('No data found');
    }
};

const getIntervalMs = (interval: string) => {
    switch (interval) {
        case '1min':
            return 60000; // 1 minute in milliseconds
        case '5min':
            return 300000; // 5 minutes in milliseconds
        case '15min':
            return 900000; // 15 minutes in milliseconds
        default:
            return 60000; // Default to 1 minute
    }
};

const useFetchStockDetail = (params: FetchStockDetailParams) => {
    return useQuery<StockDetail, Error>({
        queryKey: ['stockDetail', params], queryFn: () => fetchStockDetail(params), refetchInterval: params.realTime ? getIntervalMs(params.interval) : false
    });

}

export default useFetchStockDetail;