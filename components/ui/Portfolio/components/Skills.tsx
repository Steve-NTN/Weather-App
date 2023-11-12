import React from "react";
import { StyledContainer } from "./Skills.styles";
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

type Props = {};

const Skills = (props: Props) => {
  const blocks = [
    {
      label: "Front-end",
      technologies: [
        { label: "Reactjs", icon: REACT_ICON },
        { label: "Javascript", icon: JAVASCRIPT_ICON },
        { label: "Typescript", icon: TYPESCRIPT_ICON },
        { label: "Redux", icon: REDUX_ICON },
        { label: "Material ui", icon: MATERIALUI_ICON },
        { label: "Tailwind Css", icon: TAILWIND_CSS_ICON },
        { label: "Styled components", icon: STYLED_COMPONENTS_ICON },
        { label: "Ant design", icon: ANT_DESIGN_ICON },
        { label: "Bootstrap", icon: BOOTSTRAP_ICON },
        { label: "Sass", icon: SASS_ICON },
        { label: "Jquery", icon: JQUERY_ICON },
        { label: "Css", icon: CSS_ICON },
        { label: "Html", icon: HTML_ICON },
      ],
    },
    {
      label: "Back-end",
      technologies: [
        { label: "Nextjs", icon: NEXT_ICON },
        { label: "Expressjs", icon: EXPRESS_JS_ICON },
        { label: "Django", icon: DJANGO_ICON },
        { label: "Frappe", icon: FRAPPE_ICON },
        { label: "Flask", icon: FLASK_ICON },
        { label: "Mysql", icon: MYSQL_ICON },
        { label: "Postgres", icon: POSTGRES_ICON },
        { label: "Mongodb", icon: MONGODB_ICON },
      ],
    },
  ];

  const otherTechs = [
    {
      label: "AI",
      icon: ARTIFICIAL_INTELLIGENCE_ICON,
      description:
        "Convolutional neural network, Genetic algorithm, NLP, Deep learning, Keras, Pytorch",
    },
    {
      label: "Git",
      icon: GIT_ICON,
      description: "Experience with Git and Github",
    },
    {
      label: "Deployment",
      icon: DEPLOYMENT_ICON,
      description: "Linux, Heroku, Hostinger, Vecel",
    },
    {
      label: "Others",
      icon: ELLIPSIS_ICON,
      description: "Firebase, Websocket, JWT, Swagger,...",
    },
  ];

  return (
    <div className="section bg-[var(--app-bg1)]" id="skills">
      <StyledContainer maxWidth="xl" className="justify-center">
        <Stack spacing={4} width="100%">
          <Typography className="cv-title text-center">
            My technologies
          </Typography>

          <div>
            <Grid container spacing={4}>
              {blocks.map((block, id) => (
                <Grid
                  key={id}
                  item
                  xs={12}
                  md={6}
                  container
                  justifyContent="center"
                >
                  <Stack spacing={2} width="100%">
                    <Typography className="block_label" align="center">
                      {block.label}
                    </Typography>

                    <div>
                      <Grid container spacing={2} justifyContent="center">
                        {block.technologies.map((tech, ii) => (
                          <Grid item xs={3} md={2} key={ii}>
                            <Stack spacing={1} className="tech_box">
                              <Img src={tech.icon} alt="icon" />
                              <Typography textAlign="center">
                                {tech.label}
                              </Typography>
                            </Stack>
                          </Grid>
                        ))}
                      </Grid>
                    </div>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </div>

          <Stack spacing={2}>
            <Typography align="center" className="other_text">
              Other technologies
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
