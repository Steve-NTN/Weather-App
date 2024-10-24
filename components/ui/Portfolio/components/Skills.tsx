import React, { useEffect, useRef, useState } from "react";
import { StyledContainer, TechBox } from "./Skills.styles";
import { Box, Grid, Stack, Typography } from "@mui/material";
import {
  ANT_DESIGN_ICON,
  ARTIFICIAL_INTELLIGENCE_ICON,
  BOOTSTRAP_ICON,
  CSS_ICON,
  DEPLOYMENT_ICON,
  DJANGO_ICON,
  ELLIPSIS_ICON,
  EXPRESS_JS_ICON,
  FLASK_ICON,
  FRAPPE_ICON,
  GIT_ICON,
  HTML_ICON,
  JAVASCRIPT_ICON,
  JQUERY_ICON,
  MATERIALUI_ICON,
  MONGODB_ICON,
  MYSQL_ICON,
  NEXT_ICON,
  POSTGRES_ICON,
  REACT_ICON,
  REDUX_ICON,
  SASS_ICON,
  STYLED_COMPONENTS_ICON,
  TAILWIND_CSS_ICON,
  TYPESCRIPT_ICON,
} from "@/constants/icons";
import { CardSwiper } from "@/components/Swiper";
import Img from "@/components/Img";
import { SwiperSlide } from "swiper/react";
import Row from "@/components/Row";
import { useTranslation } from "react-i18next";

type Props = {};

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const blocks = [
    {
      label: "Front-end",
      technologies: [
        { label: "Reactjs", icon: REACT_ICON },
        { label: "Javascript", icon: JAVASCRIPT_ICON },
        { label: "Typescript", icon: TYPESCRIPT_ICON },
        { label: "Redux", icon: REDUX_ICON },
        { label: "Material UI", icon: MATERIALUI_ICON },
        { label: "Tailwind CSS", icon: TAILWIND_CSS_ICON },
        { label: "Styled Components", icon: STYLED_COMPONENTS_ICON },
        { label: "Ant Design", icon: ANT_DESIGN_ICON },
        { label: "Bootstrap", icon: BOOTSTRAP_ICON },
        { label: "Sass", icon: SASS_ICON },
        { label: "jQuery", icon: JQUERY_ICON },
        { label: "CSS", icon: CSS_ICON },
        { label: "HTML", icon: HTML_ICON },
      ],
    },
    {
      label: "Back-end",
      technologies: [
        { label: "Next.js", icon: NEXT_ICON },
        { label: "Express.js", icon: EXPRESS_JS_ICON },
        { label: "Django", icon: DJANGO_ICON },
        { label: "Frappe", icon: FRAPPE_ICON },
        { label: "Flask", icon: FLASK_ICON },
        { label: "MySQL", icon: MYSQL_ICON },
        { label: "PostgreSQL", icon: POSTGRES_ICON },
        { label: "MongoDB", icon: MONGODB_ICON },
      ],
    },
  ];

  const otherTechs = [
    {
      label: "AI",
      icon: ARTIFICIAL_INTELLIGENCE_ICON,
      description:
        "Convolutional neural networks, Genetic algorithms, NLP, Deep learning, Keras, Pytorch",
    },
    {
      label: "Git",
      icon: GIT_ICON,
      description: "Experience with Git and GitHub",
    },
    {
      label: "Deployment",
      icon: DEPLOYMENT_ICON,
      description: "Linux, Heroku, Hostinger, Vercel",
    },
    {
      label: "Others",
      icon: ELLIPSIS_ICON,
      description: "Firebase, WebSocket, JWT, Swagger,...",
    },
  ];

  return (
    <div className="section bg-[var(--app-bg1)]" id="skills">
      <StyledContainer
        maxWidth="xl"
        className="justify-center"
        ref={sectionRef}
        id="skills"
      >
        <Stack spacing={4} width="100%">
          <Typography className="cv-title text-center">
            {t("my_technologies")}
          </Typography>

          <Stack spacing={4}>
            {blocks.map((block, id) => (
              <Grid key={id} container justifyContent="center">
                <Stack width="100%">
                  <Typography mb={2} className="block_label" align="center">
                    {block.label}
                  </Typography>
                  <Grid container spacing={2} justifyContent="center">
                    {block.technologies.map((tech, ii) => (
                      <Grid item xs={4} md={2} key={ii}>
                        <TechBox
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: inView ? 1 : 0,
                            scale: inView ? 1 : 0.8,
                          }}
                          transition={{ duration: 0.5, delay: ii * 0.1 }}
                          className="tech_box"
                        >
                          <Img src={tech.icon} alt="icon" />
                          <Typography textAlign="center">
                            {tech.label}
                          </Typography>
                        </TechBox>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </Grid>
            ))}
          </Stack>

          <Stack spacing={2}>
            <Typography align="center" className="other_text">
              {t("other_technologies")}
            </Typography>
            <Row justifyContent="center">
              <CardSwiper>
                {otherTechs.map((tech, i) => (
                  <SwiperSlide key={i}>
                    <Stack spacing={1} className="othertech_box">
                      <Img src={tech.icon} alt="icon" />
                      <Typography className="label">{tech.label}</Typography>
                      <Typography>{tech.description}</Typography>
                    </Stack>
                  </SwiperSlide>
                ))}
              </CardSwiper>
            </Row>
          </Stack>
        </Stack>
      </StyledContainer>
    </div>
  );
};

export default Skills;
