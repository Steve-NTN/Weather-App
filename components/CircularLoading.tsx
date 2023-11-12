import { Backdrop, CircularProgress, styled } from "@mui/material";

const CircularLoading = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <StyledBackdrop open={open} onClick={onClose}>
      <div className="backgrop_content">
        <CircularProgress size={30} style={{ color: "#E98100" }} />
      </div>
    </StyledBackdrop>
  );
};

const StyledBackdrop = styled(Backdrop)({
  "& .backgrop_content": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "&:focus": {
      outline: "none",
    },
  },
  zIndex: 1305,
});

export { CircularLoading };
