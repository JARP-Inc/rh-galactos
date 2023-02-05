import type { FC } from "react";
import AuthProfile from "./AuthProfile";

interface props {}

const Header: FC<props> = () => {
  return (
    <>
      <div className="navbar bg-primary sticky top-0 z-10 px-16 shadow-lg">
        <div className="flex-1 items-center gap-10">
          <img className="my-6 h-16" src="/logo.svg" />
          <a
            href="/"
            className="btn btn-link text-4xl normal-case text-white no-underline hover:no-underline"
          >
            Γαλάχτοσ
          </a>
        </div>
        <div className="flex gap-6">
          <a
            href="/staff"
            className="btn btn-ghost rounded-lg text-xl normal-case text-white"
          >
            Staff
          </a>
          <AuthProfile />
        </div>
      </div>
    </>
  );
};

export default Header;
