interface DropdownChildrenProps {
  children: JSX.Element | string;
}

interface DropdownChildren {
  Header: React.FC<DropdownChildrenProps>;
  Body: React.FC<DropdownChildrenProps>;
}

interface DropdownProps {
  children: JSX.Element[];
}

const Body: React.FC<DropdownChildrenProps> = ({ children }) => (
  <div
    className="flex flex-col justify-start items-start w-[328px] absolute left-0 top-[54px] overflow-hidden py-2 rounded-[3.5px] bg-white"
    style={{ boxShadow: "0px 1px 4px 0 rgba(0,0,0,0.2)" }}
  >
    {children}
  </div>
);
const Header: React.FC<DropdownChildrenProps> = ({ children }) => (
  <>{children}</>
);

const Dropdown: React.FC<DropdownProps> & DropdownChildren = ({ children }) => {
  return <div className="w-[328px] h-[54px] relative">{children}</div>;
};

Dropdown.Header = Header;
Dropdown.Body = Body;

export default Dropdown;
