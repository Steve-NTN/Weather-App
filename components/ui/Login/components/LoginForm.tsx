import { AppButton } from "@/components/Button";
import TextField from "@/components/TextField";
import { PATHS } from "@/constants/routes";
import useRoute from "@/hooks/useRoute";
import { useLoading } from "@/providers/LoadingProvider";
import { useNotify } from "@/providers/NotifyProvider";
import { apiLogin } from "@/services/user";
import { formatError } from "@/utils/errorHelpers";
import { Box, Stack, Typography, styled } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const LoginForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setLoading } = useLoading();
  const { setNotify } = useNotify();
  const { router } = useRoute();

  const onHandleSubmit = async (data: any) => {
    setLoading(true);
    apiLogin(data)
      .then((res: any) => {
        setLoading(false);
        router.back();
      })
      .catch((err: any) => {
        setLoading(false);
        setNotify({
          type: "error",
          msg: formatError(err)?.message,
          open: true,
        });
      });
  };

  return (
    <StyledLoginForm>
      <Typography className="cart-title text-center">LoginForm</Typography>

      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <Stack spacing={2}>
          <TextField
            placeholder="Enter username"
            {...register("username", {
              required: {
                value: true,
                message: "Field is required",
              },
            })}
            error={!!errors?.username}
            helperText={errors?.username?.message?.toString()}
          />
          <TextField
            placeholder="Enter password"
            {...register("password", {
              required: {
                value: true,
                message: "Field is required",
              },
            })}
            error={!!errors?.password}
            helperText={errors?.password?.message?.toString()}
          />

          <AppButton type="submit">Login</AppButton>

          <Typography className="refer_text" align="right">
            No account? <Link href={PATHS.register}>Register now</Link>
          </Typography>
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
  ".refer_text": {
    a: {
      color: "var(--app-color)",
    },
  },

  [theme.breakpoints.down("md")]: {
    padding: 16,
  },
}));

export default LoginForm;
