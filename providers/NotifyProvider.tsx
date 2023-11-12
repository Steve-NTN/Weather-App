import { Alert, AlertColor, Snackbar } from "@mui/material";
import { ReactNode, createContext, useContext, useState } from "react";

type NotifyType = {
  type?: AlertColor;
  open: boolean;
  msg?: string;
};

const NotifyContext = createContext<{
  notify: NotifyType;
  setNotify: any;
  onCloseNotify: any;
  onChangeNotify?: any;
}>({
  notify: {
    open: false,
  },
  setNotify: () => null,
  onCloseNotify: () => null,
  onChangeNotify: () => null,
});

export const useNotify = () => useContext(NotifyContext);

const NotifyProvider = ({ children }: { children: ReactNode }) => {
  const [notify, setNotify] = useState<NotifyType>({
    type: "success",
    open: false,
    msg: "This is a success message!",
  });

  const onCloseNotify = () => {
    setNotify({ ...notify, open: false });
  };

  const onChangeNotify = (updateData: any = {}) => {
    setNotify({ ...notify, ...updateData });
  };

  const context = {
    notify,
    setNotify,
    onCloseNotify,
    onChangeNotify,
  };

  return (
    <NotifyContext.Provider value={context}>
      {children}

      <Snackbar
        open={notify.open}
        onClose={onCloseNotify}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert onClose={onCloseNotify} severity={notify.type}>
          {notify.msg}
        </Alert>
      </Snackbar>
    </NotifyContext.Provider>
  );
};

export default NotifyProvider;
