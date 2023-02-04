import type { FC } from "react";

interface props {}

const AuthProfile: FC<props> = () => {
  return (
    <div className='avatar placeholder'>
      <div className='bg-neutral-focus text-neutral-content rounded-full w-12'>
        <span>MX</span>
      </div>
    </div>
  );
};

export default AuthProfile;
