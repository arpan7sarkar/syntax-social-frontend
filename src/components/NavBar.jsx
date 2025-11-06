import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constant";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const user = useSelector((store) => store.user);
  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout");
      dispatch(removeUser(user));
      navigator("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const profilePic =
    user?.photoUrl ||
    "https://i.pinimg.com/736x/f1/01/e0/f101e02ae91f92e9e8c70baa78beda12.jpg";

  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            SyntaxSocial
            <span>
              <i className="ri-code-s-line"></i>
            </span>
          </Link>
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
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/connections">Connections</Link>
                </li>
                <li>
                  <Link to="/requests">Requests</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
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
