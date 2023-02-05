/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { FC } from "react";
import AuthProfile from "./unused/AuthProfile";

interface props {}

const Header: FC<props> = () => {
  return (
    <>
      <div className="navbar bg-primary sticky top-0 z-10 px-16 shadow-lg">
        <div className="flex-1 items-center gap-10">
          <img className="my-6 h-16" src="/logo.svg" />
          <Link
            href="/"
            className="btn btn-link text-4xl normal-case text-white no-underline hover:no-underline"
          >
            Γαλάχτοσ
          </Link>
        </div>
        <div className="flex gap-6">
          <Link
            href="/staff"
            className="btn btn-ghost rounded-lg text-xl normal-case text-white"
          >
            Staff
          </Link>
          <div className="hidden">
            <AuthProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
