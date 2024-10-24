import Row from "@/components/Row";
import {
  Box,
  Container,
  Link,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
  styled,
} from "@mui/material";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
import React from "react";
import { ExperienceType } from "@/types";
import useBreakpoints from "@/hooks/useBreakpoint";
import { GoDotFill } from "react-icons/go";
import { useTranslation } from "react-i18next";

type Props = {};

const Experience = (props: Props) => {
  const { t } = useTranslation();
  const { isSmall } = useBreakpoints();
  const experiences: ExperienceType[] = [
    {
      companyName: "FRESHDI",
      location: "Ha Noi",
      time: "experience_freshdi_time",
      position: "experience_freshdi_position",
      projects: [
        {
          content: [
            {
              value: "experience_freshdi_project_1",
            },
            {
              value: "experience_freshdi_project_2",
            },
            {
              value: "experience_freshdi_project_3",
            },
            {
              value: "experience_freshdi_project_4",
            },
            {
              value: "experience_freshdi_project_5",
            },
            {
              value: "experience_freshdi_project_6",
            },
          ],
        },
      ],
    },
    {
      companyName: "Phoenixunity",
      location: "Ha Noi",
      time: "experience_phoenixunity_time",
      position: "experience_phoenixunity_position",
      projects: [
        {
          content: [
            {
              value: "experience_phoenixunity_project_1",
            },
            {
              value: "experience_phoenixunity_project_2",
            },
            {
              value: "experience_phoenixunity_project_3",
            },
          ],
        },
      ],
    },
    {
      companyName: "VTI ACADEMY",
      location: "Ha Noi",
      time: "experience_vtiacademy_time",
      position: "experience_vtiacademy_position",
      projects: [
        {
          content: [
            {
              value: "experience_vtiacademy_project_1",
            },
            {
              value: "experience_vtiacademy_project_2",
            },
            {
              value: "experience_vtiacademy_project_3",
            },
          ],
        },
      ],
    },
    {
      companyName: "UET UNITED",
      location: "Ha Noi",
      time: "experience_uetunited_time",
      position: "experience_uetunited_position",
      projects: [
        {
          title: "experience_uetunited_project_title",
          content: [
            {
              label: "experience_uetunited_project_technologies",
              value: "experience_uetunited_project_technologies_value",
            },
            {
              label: "experience_uetunited_project_responsibilities",
              value: "experience_uetunited_project_responsibilities_value",
            },
            {
              label: "experience_uetunited_project_team_size",
              value: "experience_uetunited_project_team_size_value",
            },
            {
              label: "experience_uetunited_project_github",
              value: "experience_uetunited_project_github_value",
            },
          ],
        },
      ],
    },
    {
      companyName: "MISA",
      location: "Ha Noi",
      time: "experience_misa_time",
      position: "experience_misa_position",
      projects: [
        {
          title: "experience_misa_project_title",
          content: [
            {
              label: "experience_misa_project_technologies",
              value: "experience_misa_project_technologies_value",
            },
            {
              label: "experience_misa_project_responsibilities",
              value: "experience_misa_project_responsibilities_value",
            },
            {
              label: "experience_misa_project_team_size",
              value: "experience_misa_project_team_size_value",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="section bg-[var(--app-bg2)]" id="experience">
      <Container maxWidth="xl">
        <Stack spacing={2} width="100%">
          <Typography className="cv-title" align="center">
            {t("experience")}
          </Typography>

          <StyledStepper orientation="vertical">
            {experiences.map((experience, i) => {
              let { time, companyName, location, projects } = experience;

              return (
                <Step key={i} active expanded>
                  <StepLabel
                    StepIconComponent={() => (
                      <StepIconComponent time={time && t(time)} />
                    )}
                  >
                    <Typography className="position_text">
                      {t(experience.position)}
                    </Typography>
                  </StepLabel>

                  <StepContent>
                    <Row>
                      {companyName && (
                        <Row spacing={1} className="company">
                          <HiBuildingOffice />
                          <Typography>{companyName}</Typography>
                        </Row>
                      )}
                      {location && (
                        <Row spacing={1} className="location">
                          <MdLocationOn />
                          <Typography>{location}</Typography>
                        </Row>
                      )}
                    </Row>
                    {isSmall && (
                      <Typography className="time-text" mt={1}>
                        {time && t(time)}
                      </Typography>
                    )}

                    <Stack spacing={1} mt={1}>
                      {projects.map((project, ii) => (
                        <Box key={ii}>
                          {project.title && (
                            <Typography className="project_title">
                              {String(project.title)}
                            </Typography>
                          )}

                          <Stack>
                            {project.content &&
                              project.content.map((content, iii) => (
                                <Typography key={iii}>
                                  <GoDotFill
                                    style={{ display: "inline-block" }}
                                  />
                                  {content.label && ` ${t(content.label)}:`}{" "}
                                  {content.value && t(String(content.value))}
                                </Typography>
                              ))}
                          </Stack>
                        </Box>
                      ))}
                    </Stack>
                  </StepContent>
                </Step>
              );
            })}
          </StyledStepper>
        </Stack>
      </Container>
    </div>
  );
};

const StyledStepper = styled(Stepper)(({ theme }) => ({
  padding: "0 32px 0 128px",
  ".position_text": {
    color: "#fff",
    fontSize: 18,
    fontWeight: 700,
  },
  ".time-text": {
    fontSize: 12,
  },
  ".company, .location": {
    width: "fit-content",
    "p, svg": {
      color: "#fff",
    },
  },
  ".project_title": {
    fontWeight: 700,
    marginBottom: 8,
  },
  p: {
    color: "#fff",
  },

  [theme.breakpoints.down("md")]: {
    padding: 0,
    ".MuiStepContent-root, .MuiStepConnector-root": {
      marginLeft: 8,
    },
    p: {
      fontSize: 14,
    },
  },
}));

const StepIconComponent = styled("div")<{ time?: string }>(
  ({ time = "", theme }) => ({
    width: 24,
    height: 24,
    borderRadius: "50%",
    backgroundColor: "var(--app-color)",
    boxShadow: "0 0 15px var(--app-color)",
    position: "relative",

    "&::after": {
      content: `"${time}"`,
      minWidth: 124,
      maxWidth: 148,
      display: "block",
      position: "absolute",
      left: -74,
      color: "#fff",
      padding: time ? "2px 18px 2px 8px" : 0,
      backgroundColor: "var(--app-bg1)",
      clipPath:
        "polygon( 0% 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 0% 100%)",
      fontSize: 10,
      transform: "translateX(-50%)",
      // whiteSpace: "nowrap",
    },

    [theme.breakpoints.down("md")]: {
      width: 16,
      height: 16,
      "&::after": {
        display: "none",
        top: "-50%",
        fontSize: 8,
        left: -32,
        whiteSpace: "initial",
      },
    },
  })
);

export default Experience;
