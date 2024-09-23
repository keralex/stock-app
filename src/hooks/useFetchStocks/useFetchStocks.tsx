import { useState, useEffect } from 'react';
import { StockListItem } from '../../types/StocksTypes';


const useFetchStocks = () => {
    const [data, setData] = useState<StockListItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.twelvedata.com/stocks?source=docs&exchange=NYSE`);
                const result = await response.json();

                if (result.data && Array.isArray(result.data)) {
                    setData(result.data);
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
    }, []);

    return { data, loading, error };
};

export default useFetchStocks;