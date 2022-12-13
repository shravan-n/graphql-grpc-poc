import { gql, useLazyQuery } from "@apollo/client";
import { Box, Grid, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../Themes/theme";
import Button from "../../atoms/Button";
import TextField from "../../molecules/TextField";
import HomepageTemplate from "../../templates/HomepageTemplate";

const GET_LOGIN = gql`
  query ($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

const StyledButton = styled(Button)({
  width: theme.spacing(50),
});

const Login = () => {
  const [username, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [getLogin, { error, loading, data }] = useLazyQuery(GET_LOGIN, {
    variables: { username, password },
  });

  useEffect(() => {
    if (data) {
      const token = data.login;
      localStorage.setItem("token", token);
      navigate("/contracts");
    }
  }, [data]);

  const navigate = useNavigate();

  const validateUsername = () => {
    return String(username).match(/^[a-zA-Z][a-zA-Z\s]*$/);
  };

  const validatePassword = () => {
    return String(password).match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
    );
  };

  const validateUserDetails = () => {
    return validateUsername() && validatePassword();
  };

  return (
    <Box display="flex" justifyContent={"center"}>
      <HomepageTemplate
        content={
          <Grid container display="flex" direction="column" gap={16}>
            <Grid item display={"flex"} justifyContent="center">
              {error ? (
                <Typography
                  variant="h2"
                  color="red"
                  children="Invalid credentials"
                />
              ) : (
                <Typography variant="h2" children="Please Login" />
              )}
            </Grid>
            <Grid item container direction="column" gap={10}>
              <Grid item>
                <TextField
                  type="text"
                  value={username}
                  handleChange={(e) => {
                    setName(e.target.value);
                    validateUserDetails();
                  }}
                  placeholder={"Enter username"}
                />
              </Grid>
              <Grid item>
                <TextField
                  type="password"
                  value={password}
                  handleChange={(e) => {
                    setPassword(e.target.value);
                    validateUserDetails();
                  }}
                  placeholder="Enter password"
                />
              </Grid>
            </Grid>
            <Grid item display={"flex"} justifyContent="center">
              <StyledButton
                onClick={() => getLogin()}
                children="Login"
                variant="contained"
                disabled={validateUserDetails() ? false : true}
              />
            </Grid>
          </Grid>
        }
      />
    </Box>
  );
};

export default Login;
