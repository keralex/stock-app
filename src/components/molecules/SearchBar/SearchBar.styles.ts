import { SxProps, Theme } from '@mui/system';

const getSearchbarBoxStyles = (): SxProps<Theme> => {
	return {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	};
};

export { getSearchbarBoxStyles };
