import { styled, Button as ButtonLib } from "@mui/material";

export const AppButton = styled(ButtonLib)({
  "&,:hover": {
    backgroundColor: "var(--app-color) !important",
  },
  textTransform: "initial",
  color: "#fff",
  padding: "8px 24px",
  borderRadius: 32,
  fontWeight: 600,
  fontSize: 18,
});
