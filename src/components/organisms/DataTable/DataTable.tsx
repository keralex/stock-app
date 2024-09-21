import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/material";
import { columnsDefinition } from "./columnsDefinition";
import { StockData, useFetchStocks } from "../../../hooks/useFetchStocks.ts/useFetchStocks";




const DataTable: React.FC = () => {
    const { data, loading, error } = useFetchStocks();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Box>
            <DataGrid
                columns={columnsDefinition}
                rows={data}
                getRowId={(row: StockData) => row.figi_code}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[5, 10, 20]} />
        </Box>
    )
}

export default DataTable;