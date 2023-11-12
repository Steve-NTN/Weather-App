import {
  TextField as TextFieldLib,
  TextFieldProps,
  styled,
} from "@mui/material";
import { forwardRef } from "react";

const TextField = forwardRef((props: TextFieldProps, ref: any) => {
  return (
    <StyledTextFieldLib
      InputLabelProps={{ shrink: true }}
      {...props}
      ref={ref}
    />
  );
});

const StyledTextFieldLib = styled(TextFieldLib)({
  "& .MuiInputBase-root": {
    backgroundColor: "var(--app-blur-color)",
    borderRadius: 32,
  },
  "& .MuiFormLabel-root": {
    // color: "#fff",
  },
  "& input, textarea": {
    color: "#fff",
  },
});

export default TextField;
