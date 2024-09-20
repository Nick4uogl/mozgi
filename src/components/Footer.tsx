import React from "react";
import NavLink from "./NavLink";

const Footer: React.FC = () => (
  <footer className="absolute bottom-0 left-0 hidden w-full items-center justify-center py-[19px] md:flex">
    <NavLink to="/about" className="link-hover-effect">
      who?
    </NavLink>
  </footer>
);

export default Footer;
