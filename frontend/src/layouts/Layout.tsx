import Header from "@/components/Header";
import type { FC, ReactNode } from "react";

let Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mx-32 mt-16 mb-20">{children}</div>
    </>
  );
};

export default Layout;
