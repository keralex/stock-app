import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

export const columnsDefinition: GridColDef[] = [
    {
        field: 'symbol',
        headerName: 'Symbol',
        width: 150,
        renderCell: (params: GridRenderCellParams) => (
            <Link to={`${params.row.symbol}/detail`}>
                {params.row.symbol}
            </Link>
        ),
    },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'currency', headerName: 'Currency', width: 120 },
    { field: 'type', headerName: 'Type', width: 150 },
];