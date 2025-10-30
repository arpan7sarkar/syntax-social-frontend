import { useState } from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const profilePic =
    user?.photoUrl ||
    "https://i.pinimg.com/736x/f1/01/e0/f101e02ae91f92e9e8c70baa78beda12.jpg";

  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            SyntaxSocial
            <span>
              <i className="ri-code-s-line"></i>
            </span>
          </a>
        </div>
        {/* {user &&  this part means if user is present then only show the dp else don't show */}
        {user && (
          <div className="flex gap-2">
            <div className="text-xl font-semibold flex items-center">
              {/* name of the user */}
              <div>Welcome , {user.fName}</div>
            </div>
            <div className="dropdown dropdown-end mx-5">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Profile pic of the user" src={profilePic} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
