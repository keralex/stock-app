import { SxProps, Theme } from '@mui/system';

const getContainerStyles = (): SxProps<Theme> => {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem 3rem',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        height: '100%',
        backgroundColor: 'primary.main'
    };
};

const getBoxStyles = (): SxProps<Theme> => {
    return {
        backgroundColor: 'white',
        borderRadius: '8px',
    };
};

export { getContainerStyles, getBoxStyles };
