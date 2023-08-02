import { MouseEvent } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  children?: string | (string | JSX.Element)[] | JSX.Element;
};

const Dialog = (props: Props) => {
  const { open = false, onClose = () => {}, children } = props;

  const handleClose = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ): void => {
    if ((e.target as Element).id === "wrapper") {
      onClose();
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      {children}
    </div>
  );
};

export default Dialog;
