import { SxProps, Theme } from '@mui/system';

const getSearchbarContainerStyles = (): SxProps<Theme> => {
	return {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		width: '100%',
		marginBottom: '1rem',
	};
};

export { getSearchbarContainerStyles };
