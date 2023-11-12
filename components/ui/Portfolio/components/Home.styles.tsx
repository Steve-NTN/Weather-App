import { AppButton } from "@/components/Button";
import { IconButton, Stack, styled } from "@mui/material";

export const SocialMediaButton = styled(IconButton)({
  padding: 8,
  border: "2px solid var(--yellow-color)",
  "& svg": {
    color: "var(--app-color)",
  },
  "& .download_btn": {},
});

export const DownloadButton = styled(AppButton)(({ theme }) => ({
  width: "fit-content",

  [theme.breakpoints.down("sm")]: {
    margin: "0 auto",
  },
}));

export const LeftInforBar = styled(Stack)(({ theme }) => ({
  "& .title1": {
    fontSize: 24,
    display: "flex",
    
    gap: 8,
  },
  "& .title2": {
    fontSize: 32,
  },
  "& p, .title1": {
    color: "#fff",
  },

  [theme.breakpoints.down("md")]: {
    "& .title1": {
      fontSize: 18,
    },
    "& .title2": {
      fontSize: 28,
    },
    "& .text": {
      fontSize: 14,
    },
  },
}));
