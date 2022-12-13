import { gql, useMutation } from "@apollo/client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddContract from "../../organisms/AddContract";
import Header from "../../organisms/Header";
import HomepageTemplate from "../../templates/HomepageTemplate";
import { useLocation } from "react-router-dom";
import { BACK } from "../../../utils/constants";

const AddContractPage = () => {
  const navigate = useNavigate();

  const handleBackToContracts = () => {
    navigate("/contracts");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Box>
      <HomepageTemplate
        header={
          <Header
            handleClick={handleBackToContracts}
            handleLogout={handleLogout}
            buttonText={BACK}
          />
        }
        content={<AddContract />}
      />
    </Box>
  );
};

export default AddContractPage;
