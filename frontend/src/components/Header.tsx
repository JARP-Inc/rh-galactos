import type { FC } from "react";
import Logo from "../assets/Logo.svg";
import AuthProfile from "./AuthProfile";

interface props {}

const Header: FC<props> = () => {
  return (
    <>
      <header className="bg-primary sticky top-0 z-10 mb-10 flex h-[14vh] items-center justify-between px-16 py-6 text-white shadow-md">
        <div className="flex h-5/6 items-center gap-10">
          <img className="h-full cursor-pointer" src={Logo} />
          <a href="/" className="cursor-pointer text-4xl">
            Γαλάχτοσ
          </a>
        </div>
        <div className="cursor-pointer">
          <AuthProfile />
        </div>
      </header>
    </>
  );
};

export default Header;
