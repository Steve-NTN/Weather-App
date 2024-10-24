"use client";

import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Typewriter from "typewriter-effect";

import { SocialMediaType } from "@/types";
import "./Home.scss";
import Avatar from "./Avatar";
import { DownloadButton, LeftInforBar, SocialMediaButton } from "./Home.styles";
import Link from "next/link";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Row from "@/components/Row";
import { saveFile } from "@/utils/fileHelpers";
import { useTranslation } from "react-i18next";

type Props = {};

const ROLES = {
  fullstack: "Full-stack Developer",
  freelancer: "Freelancer",
};

const Home = (props: Props) => {
  const { t } = useTranslation();
  const [socialMedias] = useState<SocialMediaType[]>([
    { icon: FaFacebookF, link: "https://www.facebook.com/nghiaDev47/" },
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/ntn-dev/" },
    { icon: BsGithub, link: "https://github.com/Steve-NTN" },
  ]);

  const onDownloadCV = () => {
    saveFile("docs/NguyenTrongNghia_CV.pdf", "Steve NTN CV");
  };

  return (
    <div
      className="section bg-[var(--app-bg1)]"
      id="home"
      style={{ paddingTop: 0 }}
    >
      <Container maxWidth="xl" sx={{ minHeight: "calc(100vh - 128px)" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <LeftInforBar spacing={2}>
              <Typography className="title1 font-bold">{t("hi")}</Typography>
              <Typography className="title2 font-bold">
                {t('im_steve_nguyen')}
              </Typography>
              <Box className="title1 font-bold">
                {t("and_i_am_a")}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(`${ROLES.fullstack}`)
                      .pauseFor(1500)
                      .deleteChars(ROLES.fullstack.length)
                      .typeString(ROLES.freelancer)
                      .pauseFor(1500)
                      .deleteChars(ROLES.freelancer.length)
                      .start();
                  }}
                  options={{
                    loop: true,
                  }}
                />
              </Box>

              <Typography className="text" align="justify">
                {t("portfolio_description")}
              </Typography>

              <Stack spacing={2}>
                <Row justifyContent={{ xs: "center", md: "flex-start" }}>
                  {socialMedias.map((socialMedia, idx) => (
                    <Link key={idx} href={socialMedia.link}>
                      <SocialMediaButton className="social-media-btn">
                        <socialMedia.icon />
                      </SocialMediaButton>
                    </Link>
                  ))}
                </Row>

                <Row justifyContent={{ xs: "center", md: "flex-start" }}>
                  <DownloadButton
                    endIcon={<AiOutlineArrowRight />}
                    onClick={onDownloadCV}
                  >
                    {t("download_cv")}
                  </DownloadButton>
                </Row>
              </Stack>
            </LeftInforBar>
          </Grid>

          <Grid item xs={12} md={5} className="right-box flex-1">
            <Avatar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
