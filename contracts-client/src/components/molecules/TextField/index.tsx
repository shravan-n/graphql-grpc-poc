import React from "react";
import { styled, TextField as MuiTextField } from "@mui/material";
import { theme } from "../../../Themes/theme";

interface Props {
  handleChange: (e: any) => void;
  value?: string | number;
  placeholder?: string;
  type?: string;
  helperText?: string;
}

const StyledTextField = styled(MuiTextField)({
  "& .MuiOutlinedInput-root": {
    color: theme.palette.grey[300],
  },
});

const TextField = (props: Props) => {
  return (
    <StyledTextField
      onChange={props.handleChange}
      variant="outlined"
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      helperText={props.helperText}
    />
  );
};

export default TextField;
