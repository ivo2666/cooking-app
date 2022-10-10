import Logo from "../logo";

interface NavbarProps {
  children: JSX.Element | string;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="flex items-center justify-between p-6 shadow-custom rounded-custom">
      <Logo />
      {children}
    </nav>
  );
};

export default Navbar;
