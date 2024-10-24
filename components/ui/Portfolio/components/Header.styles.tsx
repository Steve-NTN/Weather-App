import { Box, styled } from "@mui/material";

export const StyledOption = styled("div")({
  "&:after": {
    content: "''",
    display: "block",
    height: 2,
    marginTop: 4,
    backgroundColor: "initital",
  },
  "&:hover:after, &.selected:after": {
    backgroundColor: "var(--app-color)",
  },
});

export const StyledHeader = styled(Box)({
  position: "sticky",
  top: 0,
  zIndex: 10,
  // borderBottom: '0.5px solid var(--app-color)'
  "& .logo_text": {
    fontSize: 32,
    fontWeight: 700,
    color: "#fff",
  },
});
