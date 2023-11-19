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

type Props = {};

const Experience = (props: Props) => {
  const experiences: ExperienceType[] = [
    {
      position: "Personal project",
      projects: [
        {
          title: "Portfolio website",
          content: [
            {
              label: "Technologies",
              value:
                "NextJs, TailwindCss, MUI, Typescript, Redux toolkit, Emailjs for Front-end",
            },
            {
              label: "Responsibilities",
              value: "develop UI, responsive web design, testing, fix bugs",
            },
            {
              label: "Demo link",
              value: (
                <Link href="https://ntn-app.vercel.app/portfolio">
                  https://ntn-app.vercel.app/portfolio
                </Link>
              ),
            },
          ],
        },
        {
          title: "Ecommerce website",
          content: [
            {
              label: "Technologies",
              value:
                "NextJs, Prisma, MongoDB, JWT for Back-end. MUI, TailwindCss, Typescript, Redux toolkit",
            },
            {
              label: "Responsibilities",
              value:
                "create user, product DB, write api, develop home, login, register, cart UI, responsive web design, testing, fix bugs",
            },
            {
              label: "Demo link",
              value: (
                <Link href="https://ntn-app.vercel.app/store">
                  https://ntn-app.vercel.app/store
                </Link>
              ),
            },
          ],
        },
        {
          title: "Account management app",
          content: [
            {
              label: "Technologies",
              value:
                "Expressjs, Jwt, Mysql, Swagger for Back-end. Reactjs, Typescript, Styled-components for Front-end",
            },
            {
              label: "Responsibilities",
              value:
                "build DB for the project, write api. Build project interface, responsive web design, fix bugs",
            },
          ],
        },
        {
          title: (
            <>
              Other projects: landing page for NEU (Reactjs, MUI,
              demo:{" "}
              <Link href="https://socialpioneersmarketingneu.com">
                https://socialpioneersmarketingneu.com
              </Link>
              ), barcode scanning (Tkinter, Mysql), todo app (Nextjs,
              Bootstrap), wine store (Django and Reactjs),...,
            </>
          ),
        },
      ],
    },
    {
      companyName: "Company A (hidden for security reasons)",
      location: "Ha Noi",
      startTime: "07/2023",
      endTime: "now",
      position: "Front-end Dev (full time)",
      projects: [
        {
          title: "CMS app project",
          content: [
            {
              label: "Technologies",
              value: "Reactjs, Typescript, Ant design, TailwindCss",
            },
            {
              label: "Responsibilities",
              value:
                "fix bugs, design, develop, responsive web design, test app and connect, handle api",
            },
            {
              label: "Team size",
              value: "2",
            },
          ],
        },
        {
          title: "Landing page",
          content: [
            {
              label: "Technologies",
              value:
                "Reactjs, Typescript,  MUI and  push register data to google sheet",
            },
            {
              label: "Responsibilities",
              value:
                "design, develop, responsive web design, test landing page for each CMS project",
            },
            {
              label: "Team size",
              value: "1",
            },
          ],
        },
      ],
    },
    {
      companyName: "VTI ACADEMY",
      location: "Ha Noi",
      startTime: "07/2023",
      endTime: "now",
      position: "Mentor (part time)",
      projects: [
        {
          title:
            "Instructor of basic and advanced web programming (HTML5, CSS3, JS) and Reactjs course",
        },
        {
          title:
            "Build Node server with Express Js framework to serve front-end course",
        },
      ],
    },
    {
      companyName: "FRESHDI",
      location: "Ha Noi",
      startTime: "07/2021",
      endTime: "07/2023",
      position: "Full Stack (full time)",
      projects: [
        {
          title:
            "Freshdi app project, Freshdi business: sales management software for businesses",
          content: [
            {
              label: "Technologies",
              value:
                "Reactjs, Typescript, MUI, Redux, Websocket for Front-end. Frappe, Mariadb. Firebase for Back-end",
            },
            {
              label: "Responsibilities",
              value:
                "write api for Freshdi app and business. Build interface, responsive web design, fix bugs, optimize Freshdi business performance",
            },
            {
              label: "Team size",
              value: "5",
            },
            {
              label: "Demo link",
              value: (
                <Link href="https://business.freshdi.com">
                  https://business.freshdi.com
                </Link>
              ),
            },
          ],
        },
        {
          title:
            "Freshdi trace: ordering software, product traceability for users",
          content: [
            {
              label: "Technologies",
              value:
                "Reactjs, Typescript, MUI, Redux, Vnpay, websocket for Front-end. Frappe, Mariadb, Firebase for Back-end",
            },
            {
              label: "Responsibilities",
              value:
                "responsive web design, build interface, fix bugs, optimize Freshdi Trace performance",
            },
            {
              label: "Team size",
              value: "5",
            },
            {
              label: "Demo link",
              value: (
                <Link href="https://freshdi.com/Thit-Bo-Nong-Cong">
                  https://freshdi.com/Thit-Bo-Nong-Cong
                </Link>
              ),
            },
          ],
        },
      ],
    },
    {
      companyName: "UET UNITED",
      location: "Ha Noi",
      startTime: "08/2020",
      endTime: "10/2020",
      position: "Intern AI (part-time)",
      projects: [
        {
          title: "Adult detection: Web detects images containing banned images",
          content: [
            {
              label: "Technologies",
              value:
                "Pytorch, Convolutional network CNN for training model, Scrapy for crawling data. Flask,  Bootstrap,  Jquery,  Redis for building web application",
            },
            {
              label: "Responsibilities",
              value:
                "write bot to crawl data, put data into model training and build image recognition web",
            },
            {
              label: "Team size",
              value: "1",
            },
            {
              label: "Github link",
              value: (
                <Link href="https://github.com/anhnghia47/Adultdetection">
                  https://github.com/anhnghia47/Adultdetection
                </Link>
              ),
            },
          ],
        },
      ],
    },
    {
      companyName: "MISA",
      location: "Ha Noi",
      startTime: "06/2020",
      endTime: "08/2020",
      position: "Intern web (part-time)",
      projects: [
        {
          title: "Cukcuk: sales management software",
          content: [
            {
              label: "Technologies",
              value:
                ".NET, Entity framework (C#), Sql server for Back-end and Javascript, Css3 for Front-end",
            },
            {
              label: "Responsibilities",
              value: "build customer management features interface",
            },
            {
              label: "Team size",
              value: "1",
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
            Experience
          </Typography>

          <StyledStepper orientation="vertical">
            {experiences.map((experience, i) => {
              let { startTime, endTime, companyName, location, projects } =
                experience;

              return (
                <Step key={i} active expanded>
                  <StepLabel
                    StepIconComponent={() => (
                      <StepIconComponent
                        time={startTime && `${startTime} - ${endTime}`}
                      />
                    )}
                  >
                    <Typography className="position_text">
                      {experience.position}
                    </Typography>
                  </StepLabel>

                  <StepContent>
                    <Row>
                      {companyName && (
                        <Typography className="company">
                          <HiBuildingOffice />
                          {companyName}
                        </Typography>
                      )}
                      {location && (
                        <Typography className="location">
                          <MdLocationOn />
                          {location}
                        </Typography>
                      )}
                    </Row>

                    <Stack spacing={1} mt={1}>
                      {projects.map((project, ii) => (
                        <Box key={ii}>
                          <Typography className="project_title">
                            {project.title}
                          </Typography>

                          <Stack>
                            {project.content &&
                              project.content.map((content, iii) => (
                                <Typography key={iii}>
                                  - {content.label}: {content.value}
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
  ".company, .location": {
    display: "flex",
    gap: 8,
  },
  ".project_title": {
    fontWeight: 700,
    marginBottom: 8,
  },
  p: {
    color: "#fff",
  },

  [theme.breakpoints.down("md")]: {
    padding: "0 0 0 56px",
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
      display: "block",
      position: "absolute",
      left: -64,
      color: "#fff",
      padding: time ? "2px 18px 2px 8px" : 0,
      backgroundColor: "var(--app-bg1)",
      clipPath:
        "polygon( 0% 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 0% 100%)",
      fontSize: 10,
      transform: "translateX(-50%)",
      whiteSpace: "nowrap",
    },

    [theme.breakpoints.down("md")]: {
      width: 16,
      height: 16,
      "&::after": {
        top: "-50%",
        fontSize: 8,
        left: -32,
        whiteSpace: "initial",
      },
    },
  })
);

export default Experience;
