import type { FC } from "react";
import Logo from "../assets/Logo.svg";
import AuthProfile from "./AuthProfile";

interface props {}

const Header: FC<props> = () => {
  return (
    <>
      <header className='px-16 py-6 h-[14vh] flex justify-between items-center bg-blue-900 text-white'>
        <div className='h-5/6 flex gap-10 items-center'>
          <img className='h-full cursor-pointer' src={Logo} />
          <h1 className='text-4xl cursor-pointer'>Γαλάχτοσ</h1>
        </div>
        <div className='h-max'>
          <AuthProfile />
        </div>
      </header>
    </>
  );
};

export default Header;
