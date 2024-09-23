import { useState } from "react";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import StockTable from "../../organisms/StockTable/StockTable";
import PageLayout from "../../templates/PageLayout"
import useFetchStocks from "../../../hooks/useFetchStocks/useFetchStocks";

const DashBoard: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { data, loading, error } = useFetchStocks();

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <PageLayout>
            <h1>Stock Table</h1>
            <SearchBar onSearch={handleSearch} placeholder="Search by name or symbol" />
            <StockTable data={data} isLoading={loading} error={error} searchQuery={searchQuery} />
        </PageLayout>
    )
}

export default DashBoard;