import { Container, Stack, Typography, styled } from "@mui/material";
import React from "react";
import TextField from "@/components/TextField";
import { AppButton } from "@/components/Button";
import { useForm } from "react-hook-form";
import { useLoading } from "@/providers/LoadingProvider";
import useEmail from "@/hooks/useEmail";
import { useNotify } from "@/providers/NotifyProvider";
import { useTranslation } from "react-i18next";

type Props = {};

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setLoading } = useLoading();
  const { sendEmail } = useEmail();
  const { setNotify } = useNotify();
  const { t } = useTranslation();

  const onHandleSubmit = async (data: any) => {
    setLoading(true);
    sendEmail(data)
      .then((res) => {
        setLoading(false);
        setNotify({
          open: true,
          type: "success",
          msg: "Thanks for the contact. I will respond to you soon!",
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setNotify({ type: "error", msg: JSON.stringify(err), open: true });
      });
  };

  return (
    <div className="section bg-[#1f232d]" id="contact">
      <StyledContainer maxWidth="sm" className="items-center">
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <Stack spacing={2} p={{ xs: 0, md: 4 }} width="100%">
            <Typography className="cv-title text-center">
              {t("contact_me")}
            </Typography>
            <Stack spacing={1}>
              <Typography className="cv-input-label pl-4">
                {t("fullname")} *
              </Typography>
              <TextField
                placeholder={t("enter_your_value", { value: t("fullname") })}
                {...register("fullname", {
                  required: {
                    value: true,
                    message: "Field is required",
                  },
                })}
                error={!!errors?.fullname}
                helperText={errors?.fullname?.message?.toString()}
              />
            </Stack>

            <Stack spacing={1}>
              <Typography className="cv-input-label pl-4">
                {t("email")} *
              </Typography>
              <TextField
                placeholder={t("enter_your_value", { value: t("email") })}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Field is required",
                  },
                })}
                error={!!errors?.email}
                helperText={errors?.email?.message?.toString()}
              />
            </Stack>

            <Stack spacing={1}>
              <Typography className="cv-input-label pl-4">
                {t("message")}
              </Typography>
              <TextField
                placeholder={t("enter_your_value", { value: t("message") })}
                multiline
                rows={4}
                {...register("message")}
              />
            </Stack>

            <AppButton type="submit" className="confirm_btn">
              {t("send")}
            </AppButton>
          </Stack>
        </form>
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",

  "& form": {
    width: "100%",
  },
  "& .confirm_btn": {
    marginTop: 32,
  },
}));

export default Contact;
