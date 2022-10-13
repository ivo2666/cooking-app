import { useRef } from "react";
import useOnClickOutside from "../../hooks/useClickOutside";

interface DropdownHeaderProps {
  children: JSX.Element | string;
}
interface DropdownBodyProps {
  children: JSX.Element | string;
  isOpen?: boolean;
  onClose: () => void;
}

interface DropdownChildren {
  Header: React.FC<DropdownHeaderProps>;
  Body: React.FC<DropdownBodyProps>;
}

interface DropdownProps {
  children: JSX.Element[];
}

const Body: React.FC<DropdownBodyProps> = ({ children, isOpen, onClose }) => {
  const ref = useRef(null);
  useOnClickOutside(ref, (e: Event) => onClose());
  return (
    <div
    ref={ref}
      className={`flex flex-col justify-start items-start w-[328px] absolute z-10 left-0 top-[54px]  overflow-hidden py-2 rounded-[3.5px] bg-white ${
        !isOpen ? "hidden" : ""
      }`}
      style={{ boxShadow: "0px 1px 4px 0 rgba(0,0,0,0.2)" }}
    >
      {children}
    </div>
  );
};

const Header: React.FC<DropdownHeaderProps> = ({ children }) => <>{children}</>;

const Dropdown: React.FC<DropdownProps> & DropdownChildren = ({ children }) => {
  return <div className="w-[328px] h-[54px] relative mt-5 sm:mt-0">{children}</div>;
};

Dropdown.Header = Header;
Dropdown.Body = Body;

export default Dropdown;
