import { SxProps, Theme } from '@mui/system';

const getContainerStyles = (): SxProps<Theme> => {
	return {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		margin: '0 auto',
		width: '100%',
		boxSizing: 'border-box',
	};
};

const getBoxStyles = (): SxProps<Theme> => {
	return {
		backgroundColor: 'white',
		borderRadius: '8px',
		width: '90%',
		boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
		my: '3rem',
		padding: '2rem',
	};
};

export { getContainerStyles, getBoxStyles };
