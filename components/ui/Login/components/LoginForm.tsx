import { AppButton } from "@/components/Button";
import Row from "@/components/Row";
import TextField from "@/components/TextField";
import { PATHS } from "@/constants/routes";
import useRoute from "@/hooks/useRoute";
import { useLoading } from "@/providers/LoadingProvider";
import { useNotify } from "@/providers/NotifyProvider";
import { apiLogin } from "@/services/user";
import { useAppDispatch } from "@/store";
import { setUser } from "@/store/user";
import { formatError } from "@/utils/errorHelpers";
import { Box, Stack, Typography, styled } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";

type Props = {};

const LoginForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const { setLoading } = useLoading();
  const { setNotify } = useNotify();
  const { router } = useRoute();
  const dispatch = useAppDispatch();

  const onHandleSubmit = async (data: any) => {
    setLoading(true);
    apiLogin(data)
      .then((res: any) => {
        setLoading(false);
        router.push(PATHS.home);
        dispatch(setUser(res?.data?.data));
      })
      .catch((err: any) => {
        setLoading(false);
        setError("root", {
          message: formatError(err)?.message,
          type: "custom",
        });
      });
  };

  const onClickBack = () => {
    router.back();
  };

  console.log(errors.root);

  return (
    <StyledLoginForm>
      <Row justifyContent="space-between" className="header">
        <BiArrowBack onClick={onClickBack} />
        <Typography className="cart-title text-center">LoginForm</Typography>
        <div style={{ width: 32 }} />
      </Row>

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

          {!!errors.root?.message && (
            <Typography className="error_text">
              {errors.root?.message}
            </Typography>
          )}

          <AppButton type="submit">Login</AppButton>

          <Typography className="refer_text" align="right">
            Have not a account? <Link href={PATHS.register}>Register now</Link>
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
  ".header": {
    svg: {
      fontSize: 32,
      cursor: "pointer",
    },
  },

  [theme.breakpoints.down("md")]: {
    padding: 16,
  },
}));

export default LoginForm;
