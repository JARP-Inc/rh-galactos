import type { FC } from "react";
import Logo from "../assets/Logo.svg";
import AuthProfile from "./AuthProfile";

interface props {}

const Header: FC<props> = () => {
  return (
    <>
      <header>
        <img src={Logo} />
        <h1>Galactos</h1>
        <AuthProfile />
      </header>
    </>
  );
};

export default Header;
