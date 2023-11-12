import { Container, Stack, Typography, styled } from "@mui/material";
import React from "react";
import TextField from "@/components/TextField";
import { AppButton } from "@/components/Button";
import { useForm } from "react-hook-form";
import { useLoading } from "@/providers/LoadingProvider";
import useEmail from "@/hooks/useEmail";
import { useNotify } from "@/providers/NotifyProvider";

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
            <Typography className="cv-title text-center">Contact me</Typography>
            <Stack spacing={1}>
              <Typography className="cv-input-label pl-4">
                Fullname *
              </Typography>
              <TextField
                placeholder="Enter your fullname"
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
              <Typography className="cv-input-label pl-4">Email *</Typography>
              <TextField
                placeholder="Enter your email"
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
              <Typography className="cv-input-label pl-4">Message</Typography>
              <TextField
                placeholder="Enter your message"
                multiline
                rows={4}
                {...register("message")}
              />
            </Stack>

            <AppButton type="submit" className="confirm_btn">
              Send
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
