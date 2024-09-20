import React from "react";
import NavLink from "./NavLink";

const SideNavigation: React.FC = () => (
  <>
    <aside className="absolute left-0 top-0 z-20 hidden h-full items-center justify-center px-[19px] md:flex">
      <NavLink to="/about" vertical className="rotate-180">
        where?
      </NavLink>
    </aside>
    <aside className="absolute right-0 top-0 z-20 hidden h-full items-center justify-center px-[19px] md:flex">
      <NavLink to="/about" vertical>
        what?
      </NavLink>
    </aside>
  </>
);

export default SideNavigation;
