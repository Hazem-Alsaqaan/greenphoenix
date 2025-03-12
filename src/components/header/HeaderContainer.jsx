import React from "react";
import Logo from "../logo/Logo";
import NavLinks from "./NavLinks";

function HeaderContainer() {
  return (
    <div className="fixed w-screen h-32 py-4 bg-linear-to-r from-30% from-green-950 to-green-900 px-24 max-md:px-6 z-50">
      <div className="flex items-center h-full">
        <Logo />
        <NavLinks />
      </div>
    </div>
  );
}

export default HeaderContainer;
