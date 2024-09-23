import React, { useRef } from "react";
import PageLayout from "../../templates/PageLayout";
import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';
import { useParams } from "react-router-dom";
import useFetchStockDetail from "../../../hooks/useFetchStocksDetail";
import { StockValue } from "../../../types/StocksTypes";



const StockDetail: React.FC = () => {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
    const params = useParams()

    console.log(params);
    const symbol = params.symbol;
    console.log(symbol);
    const { data, loading, error } = useFetchStockDetail({ symbol, interval: '1min', start_date: '2019-08-09 15:50:00' });
    console.log(data);

    const options: Highcharts.Options = {

        navigator: {
            enabled: false,
        },
        xAxis: {
            type: 'datetime',
            minTickInterval: 60 * 1000,
        },

        title: {
            text: `${symbol} Stock Price`
        },
        series: [{
            type: 'candlestick',
            name: `${symbol} Stock Price`,
            data: data?.values.map((value: StockValue) => [
                Date.parse(value.datetime),
                parseFloat(value.open),
                parseFloat(value.high),
                parseFloat(value.low),
                parseFloat(value.close),
            ])
        }],
    };


    return (
        <PageLayout>
            <h1>Stock Detail</h1>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                ref={chartComponentRef}
            />
        </PageLayout>
    )
};

export default StockDetail;