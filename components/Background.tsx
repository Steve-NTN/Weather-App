import { Box, BoxProps } from "@mui/material";
import "./Background.scss";

const PrimaryBackground = (props: BoxProps) => {
  return (
    <Box className="home_box" {...props}>
      {props?.children}
      <div className="air air1"></div>
      <div className="air air2"></div>
      <div className="air air3"></div>
      <div className="air air4"></div>
    </Box>
  );
};

export { PrimaryBackground };
