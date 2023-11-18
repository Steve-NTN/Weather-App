import { AppButton } from "@/components/Button";
import Row from "@/components/Row";
import TextField from "@/components/TextField";
import { PATHS } from "@/constants/routes";
import useRoute from "@/hooks/useRoute";
import { useLoading } from "@/providers/LoadingProvider";
import { useNotify } from "@/providers/NotifyProvider";
import { apiSignup } from "@/services/user";
import { formatError } from "@/utils/errorHelpers";
import { Box, Stack, Typography, styled } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";

type Props = {};

const RegisterForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { setLoading } = useLoading();
  const { setNotify } = useNotify();
  const { router } = useRoute();

  const onHandleSubmit = async (data: any) => {
    setLoading(true);
    apiSignup(data)
      .then((res: any) => {
        setLoading(false);
        router.push(PATHS.login);
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

  const onClickBack = () => {
    router.back();
  };

  return (
    <StyledLoginForm>
      <Row justifyContent="space-between" className="header">
        <BiArrowBack onClick={onClickBack} />
        <Typography className="cart-title text-center">RegisterForm</Typography>
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
              minLength: {
                value: 6,
                message: "At least 6 characters",
              },
            })}
            error={!!errors?.username}
            helperText={errors?.username?.message?.toString()}
          />
          <TextField
            placeholder="Enter fullname"
            {...register("fullname", {
              required: {
                value: true,
                message: "Field is required",
              },
            })}
            error={!!errors?.fullname}
            helperText={errors?.fullname?.message?.toString()}
          />
          <TextField
            placeholder="Enter password"
            {...register("password", {
              required: {
                value: true,
                message: "Field is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.-]*$/i,
                message: "Text contains alphabet and number only",
              },
            })}
            error={!!errors?.password}
            helperText={errors?.password?.message?.toString()}
          />
          <TextField
            placeholder="Enter re-password"
            {...register("repassword", {
              required: {
                value: true,
                message: "Field is required",
              },
              validate: (val: string) => {
                if (watch("password") !== val) {
                  return "Repassword is not correct";
                }
              },
            })}
            error={!!errors?.repassword}
            helperText={errors?.repassword?.message?.toString()}
          />

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

export default RegisterForm;
