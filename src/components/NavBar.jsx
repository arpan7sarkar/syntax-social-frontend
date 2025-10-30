
const NavBar = () => {
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
        <div className="flex gap-2">
          <div className="dropdown dropdown-end mx-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.pinimg.com/736x/f1/01/e0/f101e02ae91f92e9e8c70baa78beda12.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                </a>
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
      </div>
    </div>
  );
};

export default NavBar;
