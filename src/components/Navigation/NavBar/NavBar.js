import React from "react";

import "./NavBar.css";
import NavItems from "../NavItems/NavItems";

const NavBar = () => {
  return (
    <header className="navBar">
      <nav>
        <NavItems />
      </nav>
    </header>
  );
};

export default NavBar;
