import { Link, LinkProps } from "react-router-dom";
interface NavLinkProps extends LinkProps {
  vertical?: boolean;
  className?: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({
  to,
  children,
  className = "",
  vertical = false,
  ...props
}) => (
  <Link
    to={to}
    className={`relative z-10 cursor-pointer text-sm font-semibold text-dark-primary lg:text-base ${
      vertical ? "vertical-text-bt" : ""
    } ${className}`}
    {...props}
  >
    {children}
  </Link>
);

export default NavLink;
