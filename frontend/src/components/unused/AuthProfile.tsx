import type { FC } from "react";

const AuthProfile: FC = () => {
  return (
    <div className="avatar placeholder btn btn-circle">
      <div className="bg-neutral-focus text-neutral-content w-12 rounded-full">
        <span>MX</span>
      </div>
    </div>
  );
};

export default AuthProfile;
