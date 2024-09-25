import { Box } from '@mui/material';
import { StockValue } from '../../../types/StocksTypes';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useRef } from 'react';

interface StockChartProps {
	data: StockValue[];
	symbol: string;
	chartType: 'candlestick' | 'line';
}

const StockChart: React.FC<StockChartProps> = ({ data, symbol, chartType }) => {
	const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
	const options: Highcharts.Options = {
		navigator: {
			enabled: false,
		},
		xAxis: {
			type: 'datetime',
			minTickInterval: 60 * 1000,
		},

		title: {
			text: `${symbol} Stock Price`,
		},
		series: [
			{
				type: chartType,
				name: `${symbol} Stock Price`,
				data: data?.map((value: StockValue) => [
					Date.parse(value.datetime),
					parseFloat(value.open),
					parseFloat(value.high),
					parseFloat(value.low),
					parseFloat(value.close),
				]),
			},
		],
	};

	return (
		<Box>
			<HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} />
		</Box>
	);
};

export default StockChart;
