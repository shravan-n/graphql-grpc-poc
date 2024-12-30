import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../Themes/theme";
import BusinessIcon from "@mui/icons-material/Business";

interface IconWithTextProps {
  title: string;
}

const TextWithIcon = ({ title }: IconWithTextProps) => {
  return (
    <Box data-testid="text-with-icon">
      <Grid container gap={3} display="flex" alignItems="center">
        <Grid item>
          <Typography variant={"h2"} color={theme.palette.text.primary}>
            {title}
          </Typography>
        </Grid>
        <Grid item display="flex" alignItems="baseline">
          <BusinessIcon color="info" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TextWithIcon;
