import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DashBoard from './components/pages/Dashboard/Dashboard';
import StockDetail from './components/pages/StockDetail';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<DashBoard />} />
					<Route path='/:symbol/:name' element={<StockDetail />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
