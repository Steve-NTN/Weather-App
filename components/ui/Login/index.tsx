import { PrimaryBackground } from "@/components/Background";
import { Container } from "@mui/material";
import React from "react";
import { LoginForm } from "./components";

type Props = {};

const Login = (props: Props) => {
  return (
    <PrimaryBackground height="100vh">
      <Container className="content">
        <LoginForm />
      </Container>
    </PrimaryBackground>
  );
};

export default Login;
