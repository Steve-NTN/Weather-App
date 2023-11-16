import { PrimaryBackground } from "@/components/Background";
import { Container } from "@mui/material";
import React from "react";
import { LoginForm } from "./components";

type Props = {};

const Login = (props: Props) => {
  return (
    <PrimaryBackground>
      <Container className="content">
        <LoginForm />
      </Container>
    </PrimaryBackground>
  );
};

export default Login;
