import { Stack, StackProps, styled } from "@mui/material";
import React from "react";

const Row = (props: StackProps) => {
  return <StyledStack spacing={2} direction="row" {...props} />;
};

const StyledStack = styled(Stack)({
  alignItems: "center",
  width: "100%",
});

export default Row;
