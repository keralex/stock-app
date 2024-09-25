import { SxProps, Theme } from '@mui/system';

const getErrorPageContainerStyles = (): SxProps<Theme> => {
	return {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		width: '100%',
        minHeight: '60vh',
	};
};

export { getErrorPageContainerStyles };
