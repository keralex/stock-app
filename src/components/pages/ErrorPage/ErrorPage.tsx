import React from "react";
import PageLayout from "../../templates/PageLayout";
import { Box, Typography } from "@mui/material";
import { getErrorPageContainerStyles } from "./ErrorPage.styles";

const ErrorPage: React.FC = () => {
    return <PageLayout>
        <Box sx={getErrorPageContainerStyles()}>
            <Typography color="error" variant="h3" textAlign='center' >
                Something went wrong. Please try again later.
            </Typography>
        </Box>
    </PageLayout>
};

export default ErrorPage;