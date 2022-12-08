import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TextField from "../../molecules/TextField";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ADD_FORM_HEADING,
  CONTRACT,
  contractData,
  CONTRACT_INPUT,
} from "../../../utils/constants";
import { useMutation } from "@apollo/client";
import { theme } from "../../../Themes/theme";
import { CREATE_CONTRACT, UPDATE_CONTRACT } from "../../../utils/queries";

interface LocationState {
  contractInput: CONTRACT;
}

const AddContract = () => {
  const location = useLocation();
  const res = location.state as LocationState;

  const navigate = useNavigate();

  const populatedData = {
    name: res && res.contractInput.name,
    type: res && res.contractInput.type,
    perPayment: res && res.contractInput.perPayment,
    paymentAmount: res && res.contractInput.paymentAmount,
  };

  const [newContract, setNewContract] = useState<CONTRACT_INPUT>(
    res ? populatedData : contractData
  );

  const [createContract, { data: createdData }] = useMutation(CREATE_CONTRACT, {
    variables: {
      contractInput: newContract,
    },
  });

  const [updateContract, { data: updatedData }] = useMutation(UPDATE_CONTRACT, {
    variables: {
      contractId: res && res.contractInput.contractId,
      contractInput: newContract,
    },
  });

  const validateName = () => {
    return String(newContract.name).match(/^[a-z0-9 ]+$/i);
  };

  const handleName = (e: any) => {
    setNewContract({ ...newContract, name: e.target.value });
    validateName();
  };

  const handleType = (e: SelectChangeEvent) => {
    setNewContract({ ...newContract, type: e.target.value });
  };

  const handlePerPayment = (e: any) => {
    setNewContract({
      ...newContract,
      perPayment: parseFloat(e.target.value),
    });
  };

  const handlePaymentAmount = (e: any) => {
    setNewContract({
      ...newContract,
      paymentAmount: parseFloat(e.target.value),
    });
  };

  const handleSave = () => {
    createContract();
  };

  const handleUpdate = () => {
    updateContract();
  };

  if (createdData || updatedData) {
    navigate("/contracts");
  }

  return (
    <Box>
      <Grid
        container
        display="flex"
        direction="column"
        gap="3rem"
        alignItems="center"
        justifyContent={"center"}
      >
        <Grid item display="flex" justifyContent={"center"}>
          <Typography variant="body2">{ADD_FORM_HEADING}</Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          gap="1.5rem"
          display={"flex"}
          alignContent="center"
        >
          <Grid item>
            <TextField
              value={newContract.name}
              handleChange={handleName}
              placeholder={"Enter name"}
            />
          </Grid>
          <Grid item>
            <Select
              onChange={handleType}
              displayEmpty
              fullWidth
              defaultValue={newContract.type}
            >
              <MenuItem value={"Monthly"}>
                <Typography
                  children="Monthly"
                  color={theme.palette.grey[300]}
                />
              </MenuItem>
              <MenuItem value={"Quarterly"}>
                <Typography
                  children="Quarterly"
                  color={theme.palette.grey[300]}
                />
              </MenuItem>
              <MenuItem value={"Yearly"}>
                <Typography children="Yearly" color={theme.palette.grey[300]} />
              </MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <TextField
              value={newContract.perPayment}
              handleChange={handlePerPayment}
              placeholder={"Per payment"}
              type="number"
            />
          </Grid>
          <Grid item>
            <TextField
              value={newContract.paymentAmount}
              handleChange={handlePaymentAmount}
              placeholder={"Payment amount"}
              type="number"
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            children={res ? "Update" : "Save"}
            onClick={res ? handleUpdate : handleSave}
            disabled={validateName() ? false : true}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddContract;
