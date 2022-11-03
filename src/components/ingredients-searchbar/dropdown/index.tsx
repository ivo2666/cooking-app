import { useRef } from "react";
import useOnClickOutside from "../../../hooks/useClickOutside";

interface DropdownProps {
  open: boolean;
  trigger: JSX.Element;
  menu: JSX.Element | JSX.Element[];
  onClose: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  open,
  trigger,
  menu,
  onClose,
}) => {
  const ref = useRef(null);
  useOnClickOutside(ref, (e: Event) => onClose());
  return (
    <div className="w-[328px] h-[54px] relative mt-5 sm:mt-0">
      {trigger}
      <div
        ref={ref}
        id="div"
        className={`flex flex-col justify-start items-start w-[328px] absolute z-10 left-0 top-[54px]  overflow-hidden py-2 rounded-[3.5px] bg-white ${
          !open ? "hidden" : ""
        }`}
        style={{ boxShadow: "0px 1px 4px 0 rgba(0,0,0,0.2)" }}
      >
        {menu}
      </div>
    </div>
  );
};

export default Dropdown;
