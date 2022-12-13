import { Box, Grid } from "@mui/material";
import React from "react";

interface Props {
  content: React.ReactNode;
  header?: React.ReactNode;
}

const HomepageTemplate = (props: Props) => {
  return (
    <Box>
      <Grid container display={"flex"} direction="column" gap={8}>
        <Grid item>{props.header}</Grid>
        <Grid item>{props.content}</Grid>
      </Grid>
    </Box>
  );
};

export default HomepageTemplate;
