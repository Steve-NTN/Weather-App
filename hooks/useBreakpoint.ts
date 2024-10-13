import { useMediaQuery, useTheme } from "@mui/material";

const useBreakpoints = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLarge = useMediaQuery(theme.breakpoints.up("md"));

  return { isSmall, isMedium, isLarge };
};

export default useBreakpoints;
