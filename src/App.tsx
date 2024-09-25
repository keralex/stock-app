import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import DashBoard from './components/pages/Dashboard/Dashboard';
import StockDetail from './components/pages/StockDetail';
import theme from './theme/theme.ts'

const queryClient = new QueryClient();

function App() {
	return (
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<DashBoard />} />
						<Route path='/:symbol/:name' element={<StockDetail />} />
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</ThemeProvider>

	);
}

export default App;
