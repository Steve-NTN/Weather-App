import { Container, styled } from "@mui/material";
import { motion } from "framer-motion";

export const StyledContainer = styled(Container)({
  "& .block_label": {
    color: "var(--app-color)",
    fontSize: 24,
    fontWeight: 700,
  },
  "& .tech_box": {
    backgroundColor: "var(--app-bg2)",
    borderRadius: 16,
    padding: 12,
    color: "#fff",
    alignItems: "center",
    height: "100%",
    position: "relative",

    img: {
      width: 48,
    },
    "::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      borderRadius: 16,
      transition: "0.5s",
      transform: "scale(.9)",
    },
    ":hover::before": {
      borderBox: "box-sizing",
      transform: "scale(1)",
      boxShadow: "0 0 15px var(--app-color)"
    },
  },
  "& .othertech_box": {
    padding: 8,
    textAlign: "center",
    "& .label": {
      fontWeight: 700,
    },
    img: {
      margin: "0 auto",
      width: 48,
    },
  },
  "& .mySwiper": {
    width: 240,
    height: 184,
  },
  "& .other_text": {
    fontWeight: 700,
    color: "#fff",
  },
});

export const TechBox = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));