import { Box, Grid, styled } from "@mui/material";
import React from "react";
import { theme } from "../../../Themes/theme";
import { LOGOUT } from "../../../utils/constants";
import Button from "../../atoms/Button";

interface Props {
  handleClick: () => void;
  handleLogout: () => void;
  buttonText: string;
}

const HeaderContainer = styled(Grid)({
  backgroundColor: "black",
  padding: "0.75rem",
  borderRadius: "0.75rem",
});

const StyledButton = styled(Button)({
  height: theme.spacing(11),
});

const Header = (props: Props) => {
  return (
    <Box>
      <HeaderContainer
        container
        display="flex"
        justifyContent={"space-between"}
      >
        <Grid item>
          <StyledButton variant="contained" onClick={props.handleClick}>
            {props.buttonText}
          </StyledButton>
        </Grid>
        <Grid item>
          <StyledButton variant="contained" onClick={props.handleLogout}>
            {LOGOUT}
          </StyledButton>
        </Grid>
      </HeaderContainer>
    </Box>
  );
};

export default Header;
