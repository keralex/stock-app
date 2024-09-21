import StockTable from "../../organisms/StockTable/StockTable";
import PageLayout from "../../templates/PageLayout"

const DashBoard = () => {
    return (
        <PageLayout>
            <h1>Dashboard</h1>
            <StockTable />
        </PageLayout>
    )
}

export default DashBoard;