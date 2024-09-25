import { Box } from '@mui/material';
import React from 'react';
import { getBoxStyles, getContainerStyles } from './PageLayout.styles';
import Header from '../../organisms/Header';

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<Box sx={getContainerStyles()}>
			<Header />
			<Box sx={getBoxStyles()}>{children}</Box>
		</Box>
	);
};

export default PageLayout;
