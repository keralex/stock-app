import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/material";
import { columnsDefinition } from "./columnsDefinition";
import { StockData } from "../../../hooks/useFetchStocks.ts/useFetchStocks";


const generateRandom = () => Math.random().toString(36).substring(7);

interface StockTableProps {
    data: StockData[];
    isLoading: boolean;
    error: string | null;
    searchQuery: string;
}

const StockTable: React.FC<StockTableProps> = ({ data, isLoading, error, searchQuery }) => {


    const getData = (): StockData[] => {
        if (searchQuery) {
            return data
                ? data.filter((row) =>
                    row.name.toLowerCase().includes(searchQuery.toLowerCase()) || row.symbol.toLowerCase().includes(searchQuery.toLowerCase())
                )
                : []
        }
        return data;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Box>
            <DataGrid
                columns={columnsDefinition}
                rows={getData()}
                //hay data duplicada en la api
                getRowId={(row: StockData) => row.figi_code + generateRandom()}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                loading={isLoading}
                pageSizeOptions={[5, 10, 20]} />
        </Box>
    )
}

export default StockTable;