import { styled } from "@mui/material";
import React from "react";

type Props = {};

const Avatar = (props: Props) => {
  return <StyledAvatar />;
};

const StyledAvatar = styled("div")(({ theme }) => ({
  borderRadius: "35% 65% 49% 51% / 58% 47% 53% 42% ",
  width: "100%",
  height: 364,
  maxWidth: 460,
  margin: "0 auto",
  background: 'var(--app-color) url("imgs/avatar.png") no-repeat center center',
  backgroundSize: "cover",

  [theme.breakpoints.down("md")]: {
    height: 324,
  },
}));

export default Avatar;
