import axios from "axios";
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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className="bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-black/50">
        {/* Logo Section */}
        <Link to="/feed" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border border-white/20 rounded rotate-45 bg-white flex items-center justify-center overflow-hidden group-hover:rotate-0 transition-all duration-300">
            <img
              src="https://imgs.search.brave.com/cZeya5FVG8Ts7RD_KZCZJu36wcTJWSxFU53F-dQB8Ms/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9jb25uZWN0/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy0y/Nzc5MDk5LnBuZz9m/PXdlYnAmdz0xMjg"
              alt="Logo"
              className="w-full h-full object-cover -rotate-45 group-hover:rotate-0 transition-all duration-300"
            />
          </div>
          <span className="text-sm font-bold tracking-wide text-white group-hover:text-gray-300 transition-colors">
            Syntax Social
          </span>
        </Link>

        {/* Navigation Links (Hidden on small screens) */}
        {user && (
          <div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-400">
            <Link to="/feed" className="hover:text-white transition-colors">
              Feed
            </Link>
            <Link
              to="/connections"
              className="hover:text-white transition-colors"
            >
              Connections
            </Link>
            <Link to="/requests" className="hover:text-white transition-colors">
              Requests
            </Link>
          </div>
        )}

        {/* User Profile / Logout */}
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar border border-white/10 hover:bg-white/10"
            >
              <div className="w-9 rounded-full">
                <img alt="Profile" src={profilePic} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1a1a1a] border border-white/10 text-gray-300 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl"
            >
              <li className="border-b border-white/10 pb-1 mb-1">
                <span className="text-white font-semibold">
                  Hello, {user.fName}
                </span>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="hover:bg-white/10 hover:text-white"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/connections"
                  className="hover:bg-white/10 hover:text-white md:hidden"
                >
                  Connections
                </Link>
              </li>
              <li>
                <Link
                  to="/requests"
                  className="hover:bg-white/10 hover:text-white md:hidden"
                >
                  Requests
                </Link>
              </li>
              <li>
                <a
                  onClick={handleLogout}
                  className="text-red-400 hover:bg-red-500/10 hover:text-red-300"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
