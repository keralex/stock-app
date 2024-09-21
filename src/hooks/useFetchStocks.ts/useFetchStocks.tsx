import { useState, useEffect } from 'react';

interface StockData {
    symbol: string;
    name: string;
    currency: string;
    exchange: string;
    mic_code: string;
    country: string;
    type: string;
    figi_code: string;
}

export const useFetchStocks = (symbol: string) => {
    const [data, setData] = useState<StockData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.twelvedata.com/stocks?symbol=${symbol}&source=docs`);
                const result = await response.json();

                // Verificamos si result.data es un array de objetos
                if (result.data && Array.isArray(result.data)) {
                    setData(result.data);
                } else {
                    setError('No data found');
                }
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, [symbol]);

    return { data, loading, error };
};