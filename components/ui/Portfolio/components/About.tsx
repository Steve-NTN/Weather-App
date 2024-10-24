import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { AiOutlineArrowRight } from "react-icons/ai";
import React, { ReactNode } from "react";
import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

type Props = {};

const About = (props: Props) => {
  const { t } = useTranslation();
  const onClickContact = () => {
    let section = document.getElementById("contact");
    window?.scrollTo({
      behavior: "smooth",
      top: (section?.offsetTop || 0) - 80,
    });
  };

  return (
    <StyledAbout className="section bg-[var(--app-bg2)]" id="about">
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledImage />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography className="cv-title">{t("about_me")}</Typography>

            <Typography className="description">
              {t("portfolio_about_description_1")}
            </Typography>

            <Typography className="description">
              <Trans
                i18nKey="portfolio_about_description_2"
                components={{ span: <span /> }}
              />
            </Typography>

            <Typography className="description">
              <Trans
                i18nKey="portfolio_about_description_3"
                components={{ span: <span /> }}
              />
            </Typography>

            <Typography className="description">
              <Trans
                i18nKey="portfolio_about_description_4"
                components={{ span: <span /> }}
              />
            </Typography>

            <Typography className="description">
              <Trans
                i18nKey="portfolio_about_description_5"
                components={{ span: <span /> }}
              />
            </Typography>

            <StyledButton
              className="contact_btn"
              endIcon={<AiOutlineArrowRight />}
              onClick={onClickContact}
            >
              {t("contact_me")}
            </StyledButton>
          </Grid>
        </Grid>
      </Container>
    </StyledAbout>
  );
};

const StyledImage = styled(Box)(({ theme }) => ({
  borderRadius: "29% 71% 56% 44% / 46% 27% 73% 54%",
  width: "100%",
  height: 364,
  maxWidth: 540,
  background: ' url("imgs/develop.jpg") no-repeat center center',
  backgroundSize: "cover",

  [theme.breakpoints.down("md")]: {
    height: 324,
  },
}));

const StyledButton = styled(Button)({
  "&,:hover": {
    backgroundColor: "var(--app-color) !important",
  },
  textTransform: "initial",
  color: "#fff",
  marginTop: 32,
  padding: "8px 24px",
  borderRadius: 32,
  fontWeight: 600,
  fontSize: 18,
});

const StyledAbout = styled("div")({
  ".description": {
    color: "#fff",
    marginTop: 16,
    span: {
      fontWeight: 600,
    },
  },
});

export default About;
