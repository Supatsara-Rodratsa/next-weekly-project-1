import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { ReactNode, useState } from "react";
import Icon from "../Icon";
import { ICON } from "@src/constants/constants";

type ModalDialogProps = {
  isOpen: boolean;
  onClose(val: string): void;
  children: ReactNode;
};
const ModalDialog = ({ isOpen, onClose, children }: ModalDialogProps) => {
  const [open, setOpen] = useState(isOpen);
  const handleClose = () => {
    setOpen(false);
    onClose("close");
  };
  return (
    <Modal open={open} closeAfterTransition>
      <Fade in={open}>
        <div className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] bg-white p-[40px] rounded-lg text-center min-w-[350px] h-fit focus:outline-none">
          <div
            className="absolute top-[16px] right-[16px] cursor-pointer"
            onClick={() => handleClose()}
          >
            <Icon type={ICON.CLOSE} size="20px" />
          </div>
          {children}
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalDialog;
