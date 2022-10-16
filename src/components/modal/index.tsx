import { useRef } from "react";
import useOnClickOutside from "../../hooks/useClickOutside";
import Close from "../../svgs/close";

interface ModalProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  className,
  children,
  ...rest
}) => {
  const ref = useRef(null);
  useOnClickOutside(ref, (e: Event) => onClose());

  const handleClose = () => onClose();

  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      onAbortCapture={onClose}
      aria-hidden="true"
      className={`${
        !show ? "hidden" : ""
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full md:h-full`}
      {...rest}
    >
      <div className="absolute w-full h-full bg-black/60"></div>
      <div className="relative flex flex-col items-center justify-center w-full h-full p-4 rounded ">
        <div
          ref={ref}
          className={`relative bg-white rounded sm:min-w-[611px] ${
            className || ""
          }`}
        >
          <div
            className="relative bg-white rounded"
            style={{
              filter:
                "drop-shadow(0px 16px 24px rgba(0,0,0,0.14)) drop-shadow(0px 6px 30px rgba(0,0,0,0.12)) drop-shadow(0px 8px 10px rgba(0,0,0,0.2))",
            }}
          >
            <div className="flex justify-end items-center rounded relative gap-2.5 px-1 py-0.5 bg-white">
              <span onClick={handleClose} className="cursor-pointer">
                <Close />
              </span>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
