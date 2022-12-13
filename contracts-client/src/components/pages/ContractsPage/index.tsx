import { gql, useMutation, useQuery } from "@apollo/client";
import { Box, Grid, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../Themes/theme";
import { ADD_CONTRACT, YOUR_CONTRACTS } from "../../../utils/constants";
import { GET_CONTRACTS } from "../../../utils/queries";
import TextWithIcon from "../../molecules/TextWithIcon";
import ContractsTable from "../../organisms/ContractsTable";
import Header from "../../organisms/Header";
import HomepageTemplate from "../../templates/HomepageTemplate";

const StyledGrid = styled(Grid)({
  backgroundColor: theme.palette.elevation.color1,
  borderRadius: theme.spacing(3),
});

const Homepage = () => {
  const { loading, error, data } = useQuery(GET_CONTRACTS, {
    fetchPolicy: "network-only",
  });

  const navigate = useNavigate();

  const handleAddContract = () => {
    navigate("/addContract");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (loading) {
    return <Typography children="loading" variant="h2" />;
  }
  if (error) {
    return <Typography children="error" variant="h2" />;
  }

  return (
    <Box
      sx={{ backgroundColor: "black", width: "fit-content", padding: "24px" }}
    >
      <HomepageTemplate
        header={
          <Header
            handleClick={handleAddContract}
            handleLogout={handleLogout}
            buttonText={ADD_CONTRACT}
          />
        }
        content={
          <StyledGrid
            container
            display="flex"
            direction={"column"}
            gap={6}
            padding={theme.spacing(6)}
          >
            <Grid item>
              <TextWithIcon title={YOUR_CONTRACTS} />
            </Grid>
            <Grid item>
              <ContractsTable data={data.getContracts} />
            </Grid>
          </StyledGrid>
        }
      />
    </Box>
  );
};

export default Homepage;
