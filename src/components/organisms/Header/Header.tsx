import React from 'react';
import { getHeaderContainerStyles } from './Header.styles';
import { Box, Typography } from '@mui/material';

const Header: React.FC = () => {
	return (
		<Box sx={getHeaderContainerStyles()}>
			<Typography variant='h4' color='primary'>
				Metafar
			</Typography>
		</Box>
	);
};

export default Header;
