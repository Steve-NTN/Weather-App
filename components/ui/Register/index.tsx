import { PrimaryBackground } from "@/components/Background";
import { Container } from "@mui/material";
import { RegisterForm } from "./components";

type Props = {};

const Login = (props: Props) => {
  return (
    <PrimaryBackground height="100vh">
      <Container className="content">
        <RegisterForm />
      </Container>
    </PrimaryBackground>
  );
};

export default Login;
