import { GridColDef } from '@mui/x-data-grid';

export const columnsDefinition: GridColDef[] = [
    { field: 'symbol', headerName: 'Symbol', width: 120 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'currency', headerName: 'Currency', width: 120 },
    { field: 'type', headerName: 'Type', width: 150 },
];