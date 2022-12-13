import { styled } from "@mui/material";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import { theme } from "../../../Themes/theme";

interface ButtonComponentProps extends ButtonProps {
  children?: string;
}

const StyledButton = styled(MuiButton)({
  textTransform: "none",
  borderRadius: theme.spacing(3),
  height: "3rem",
});

const Button = (props: ButtonComponentProps) => {
  const { children, ...rest } = props;

  return (
    <div>
      <StyledButton {...rest}>{children}</StyledButton>
    </div>
  );
};

export default Button;
