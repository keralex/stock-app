import { Box } from "@mui/material";
import React from "react";
import { getBoxStyles, getContainerStyles } from "./PageLayout.styles";

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <Box sx={getContainerStyles()}>
            <Box sx={getBoxStyles()}>{children}</Box>
        </Box>
    )

}

export default PageLayout;