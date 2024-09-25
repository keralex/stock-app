import { SxProps, Theme } from '@mui/system';

const getHeaderContainerStyles = (): SxProps<Theme> => {
	return {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: '0 3rem',
		width: '100%',
		height: '80',
		backgroundColor: '#FFFFFF',
		boxSizing: 'border-box',
		boxShadow: '-2px 7px 5px 0px rgba(0,0,0,0.33)',
	};
};

export { getHeaderContainerStyles };
