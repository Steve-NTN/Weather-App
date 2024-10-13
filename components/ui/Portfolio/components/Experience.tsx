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

type Props = {};

const Experience = (props: Props) => {
  const { isSmall } = useBreakpoints();
  const experiences: ExperienceType[] = [
    // {
    //   position: "Personal project",
    //   projects: [
    //     {
    //       title: "Portfolio website",
    //       content: [
    //         {
    //           label: "Technologies",
    //           value:
    //             "NextJs, TailwindCss, MUI, Typescript, Redux toolkit, Emailjs for Front-end",
    //         },
    //         {
    //           label: "Responsibilities",
    //           value: "develop UI, responsive web design, testing, fix bugs",
    //         },
    //         {
    //           label: "Demo link",
    //           value: (
    //             <Link href="https://ntn-app.vercel.app/portfolio">
    //               https://ntn-app.vercel.app/portfolio
    //             </Link>
    //           ),
    //         },
    //       ],
    //     },
    //     {
    //       title: "Ecommerce website",
    //       content: [
    //         {
    //           label: "Technologies",
    //           value:
    //             "NextJs, Prisma, MongoDB, JWT for Back-end. MUI, TailwindCss, Typescript, Redux toolkit",
    //         },
    //         {
    //           label: "Responsibilities",
    //           value:
    //             "create user, product DB, write api, develop home, login, register, cart UI, responsive web design, testing, fix bugs",
    //         },
    //         {
    //           label: "Demo link",
    //           value: (
    //             <Link href="https://ntn-app.vercel.app/store">
    //               https://ntn-app.vercel.app/store
    //             </Link>
    //           ),
    //         },
    //       ],
    //     },
    //     {
    //       title: "Account management app",
    //       content: [
    //         {
    //           label: "Technologies",
    //           value:
    //             "Expressjs, Jwt, Mysql, Swagger for Back-end. Reactjs, Typescript, Styled-components for Front-end",
    //         },
    //         {
    //           label: "Responsibilities",
    //           value:
    //             "build DB for the project, write api. Build project interface, responsive web design, fix bugs",
    //         },
    //       ],
    //     },
    //     {
    //       title: (
    //         <>
    //           Other projects: landing page for NEU (Reactjs, MUI, demo:{" "}
    //           <Link href="https://socialpioneersmarketingneu.com">
    //             https://socialpioneersmarketingneu.com
    //           </Link>
    //           ), barcode scanning (Tkinter, Mysql), todo app (Nextjs,
    //           Bootstrap), wine store (Django and Reactjs),...,
    //         </>
    //       ),
    //     },
    //   ],
    // },
    {
      companyName: "FRESHDI",
      location: "Ha Noi",
      time: "07/2021 - 07/2023, 10/2024 - PRESENT",
      position: "Full stack developer",
      projects: [
        {
          // title:
          //   "Freshdi app project, Freshdi business: sales management software for businesses",
          content: [
            {
              value:
                "Lead the development of scalable web applications using React, MUI, Redux and TypeScript to build a global marketplace to help buyers and suppliers connect with each other.",
            },
            {
              value:
                "Collaborated closely with UX/UI designers and backend teams to develop user-friendly, responsive, and scalable web applications.",
            },
            {
              value:
                "Optimized the performance of web applications through code splitting, lazy loading, and efficient state management.",
            },
            {
              value:
                "Reviews code to ensure adherence to best practices and maintain code quality.",
            },
            {
              value:
                "Work closely with backend teams to integrate APIs, ensuring seamless data flow between frontend and backend services.",
            },
            {
              value:
                "Enhanced the website's SEO through keyword optimization and technical improvements, leading to increased organic traffic and better Google indexing.",
            },
          ],
        },
      ],
    },
    {
      companyName: "Phoenixunity",
      location: "Ha Noi",
      time: "10/2023 - 10/2024",
      position: "Front-end developer",
      projects: [
        {
          content: [
            {
              value:
                "Utilized technologies such as ReactJS, Ant Design, Tailwind css, Redux and NextJS across various projects for foreign partners such as Australia and Brazil.",
            },
            {
              value:
                "Ensure adherence to coding standards and best practices, fostering a collaborative environment for feedback and improvement, which enhanced code quality, maintainability, and scalability.",
            },
            {
              value:
                "Implemented code optimizations by analyzing performance bottlenecks and refactoring critical components, using techniques like code splitting and lazy loading to reduce load times and improve responsiveness, resulting in a smoother user experience and decreased resource consumption.",
            },
          ],
        },
      ],
    },
    {
      companyName: "VTI ACADEMY",
      location: "Ha Noi",
      time: "07/2023 - 02/2024",
      position: "Mentor",
      projects: [
        {
          content: [
            {
              value:
                "Instructor for both basic and advanced web programming courses, covering topics like HTML5, CSS3, JavaScript, and ReactJS.",
            },
            {
              value:
                "Provided personalized mentorship, giving students feedback on coding assignments, and guiding them through debugging and problem-solving techniques.",
            },
            {
              value:
                "Developed a Node.js server using the ExpressJS framework to provide real-time API services and backend support for the front-end course projects.",
            },
          ],
        },
      ],
    },
    {
      companyName: "UET UNITED",
      location: "Ha Noi",
      time: "07/2023 - PRESENT",
      position: "AI Intern",
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
      time: "06/2020 - 08/2020",
      position: "Front-end Intern",
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
              let { time, companyName, location, projects } = experience;

              return (
                <Step key={i} active expanded>
                  <StepLabel
                    StepIconComponent={() => <StepIconComponent time={time} />}
                  >
                    <Typography className="position_text">
                      {experience.position}
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
                        {time}
                      </Typography>
                    )}

                    <Stack spacing={1} mt={1}>
                      {projects.map((project, ii) => (
                        <Box key={ii}>
                          {project.title && (
                            <Typography className="project_title">
                              {project.title}
                            </Typography>
                          )}

                          <Stack>
                            {project.content &&
                              project.content.map((content, iii) => (
                                <Typography key={iii}>
                                  <GoDotFill
                                    style={{ display: "inline-block" }}
                                  />
                                  {content.label && ` ${content.label}:`}{" "}
                                  {content.value}
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
