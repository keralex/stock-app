import { SxProps, Theme } from '@mui/system';

const getContainerStyles = (): SxProps<Theme> => {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 3rem',
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
        width: '100%',
        height: '100%',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
    };
};

export { getContainerStyles, getBoxStyles };
