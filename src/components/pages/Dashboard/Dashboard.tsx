import StockTable from "../../organisms/StockTable/StockTable";
import PageLayout from "../../templates/PageLayout"

const DashBoard = () => {
    return (
        <PageLayout>
            <h1>Stock Table</h1>
            <StockTable />
        </PageLayout>
    )
}

export default DashBoard;