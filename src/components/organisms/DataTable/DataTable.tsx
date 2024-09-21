import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/material";


type DataTableProps = {
    data: Array<{ id: number; name: string; age: number }>;
};

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
    return (
        <Box>
            {/* <DataGrid columns={ } /> */}
        </Box>
    )
}