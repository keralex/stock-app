import { useEffect, useState } from "react";
import { StockDetail } from "../../types/StocksTypes";


interface FetchStockDetailParams {
    symbol: string | undefined;
    interval: string;
    start_date?: string;
    end_date?: string;
}

const useFetchStockDetail = ({ symbol, interval, end_date, start_date }: FetchStockDetailParams) => {

    const apiKey = import.meta.env.VITE_API_KEY;

    const [data, setData] = useState<StockDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const getDateParams = () => {
        if (start_date && end_date) {
            return `&start_date=${start_date}&end_date=${end_date}`;
        }
        return '';
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&apikey=${apiKey}${getDateParams()}`);
                const result = await response.json();

                if (result.meta && result.values) {
                    setData(result);
                } else {
                    setError('No data found');
                }
            } catch (err) {
                console.error(err);
                setError('Error fetching data');
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [symbol, interval, end_date, start_date]);
    return { data, loading, error };
}

export default useFetchStockDetail;