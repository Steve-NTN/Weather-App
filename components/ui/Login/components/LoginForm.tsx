import { AppButton } from "@/components/Button";
import TextField from "@/components/TextField";
import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <StyledLoginForm>
      <Typography className="cart-title text-center">LoginForm</Typography>

      <form>
        <Stack spacing={2}>
          <TextField label="Username" placeholder="Enter username" />
          <TextField label="Password" placeholder="Enter password" />

          <AppButton>Login</AppButton>
        </Stack>
      </form>
    </StyledLoginForm>
  );
};

const StyledLoginForm = styled(Box)(({ theme }) => ({
  padding: 32,
  backgroundColor: "#fff",
  maxWidth: 640,
  borderRadius: 16,
  width: "100%",
  margin: "0 auto",
  ".cv-title": {
    color: "#000",
  },

  [theme.breakpoints.down("md")]: {
    padding: 16,
  },
}));

export default LoginForm;
