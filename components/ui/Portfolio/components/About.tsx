import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { AiOutlineArrowRight } from "react-icons/ai";
import React from "react";
import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  const onClickContact = () => {
    let section = document.getElementById("contact");
    window?.scrollTo({
      behavior: "smooth",
      top: (section?.offsetTop || 0) - 80,
    });
  };

  return (
    <div className="section bg-[var(--app-bg2)]" id="about">
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledImage />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography className="cv-title">About me</Typography>

            <Typography className="text-white">
              I studied at{" "}
              <b>
                <Link href="https://uet.vnu.edu.vn/">
                  UNIVERSITY OF ENGINEERING AND TECHNOLOGY (UET-VNU)
                </Link>
              </b>{" "}
              majoring in computer science from 2017 to 2021.
            </Typography>

            <Typography mt={2} className="text-white text-justify">
              Skilled full stack web developer. Ability to learn and implement
              new technologies quickly. With more than 2 years of experience in
              Front-end (reactjs, typescript, MUI, ant design, tailwind,
              bootstrap, sass, redux, ...) and about 1 year in Back-end (nextjs,
              express, django, frappe, Flask, spring boot) + database (mysql,
              postgresql, mongodb,...).
            </Typography>

            <StyledButton
              className="contact_btn"
              endIcon={<AiOutlineArrowRight />}
              onClick={onClickContact}
            >
              Contact me
            </StyledButton>
          </Grid>
        </Grid>
      </Container>
    </div>
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

export default About;
