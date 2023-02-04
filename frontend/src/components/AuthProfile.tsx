import useModal from "@hooks/useModal";
import { FC, useState } from "react";
import LogIn from "./LogIn";

interface props {}

const AuthProfile: FC<props> = () => {
  let [loggedIn, setLoggedIn] = useState(false);
  let [viewMenu, setViewMenu] = useState(false);

  let openModal = useModal(<LogIn />);

  const handleClick = () => {
    setViewMenu(!viewMenu);
    openModal();
  };
  return (
    <>
      <button
        className="avatar placeholder bg-base-300 btn btn-circle text-neutral-content w-12 rounded-full"
        onClick={() => setViewMenu(!viewMenu)}
      >
        {loggedIn ? <span>Y</span> : <span>N</span>}
      </button>
      {viewMenu && (
        <ul className="menu bg-base-300 rounded-box absolute top-28 w-56 p-2 shadow-lg ">
          <li>
            <button onClick={handleClick}>Log In</button>
          </li>
          <li>
            <button onClick={() => setViewMenu(!viewMenu)}>Sign Up</button>
          </li>
        </ul>
      )}
    </>
  );
};

export default AuthProfile;
