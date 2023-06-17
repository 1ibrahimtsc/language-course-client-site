import { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navOptions = (
    <>
      <li>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/instructors" onClick={closeMenu}>
          Instructors
        </Link>
      </li>
      <li>
        <Link to="/classes" onClick={closeMenu}>
          Classes
        </Link>
      </li>

      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminhome" onClick={closeMenu}>
            Dashboard
          </Link>
        </li>
      )}

      {user && isInstructor && (
        <li>
          <Link to="/dashboard/instructorhome" onClick={closeMenu}>
            Dashboard
          </Link>
        </li>
      )}

      {user && !isAdmin && !isInstructor && (
        <li>
          <Link to="/dashboard/userhome" onClick={closeMenu}>
            Dashboard
          </Link>
        </li>
      )}

      {user ? (
        <>
          <div className="avatar indicator">
            <div className="w-10 h-10 rounded-full">
              <img src={user?.photoURL} alt="User Avatar" />
            </div>
          </div>
        </>
      ) : (
        <>
          <li>
            <Link to="/login" onClick={closeMenu}>
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-gray-900 bg-opacity-50 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="dropdown">
              <button className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-lg w-52">
                  {navOptions}
                </ul>
              )}
            </div>
            <Link
              to="/"
              className="text-2xl font-bold text-white hover:text-gray-300"
            >
              Summer Camp School
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ul className="hidden lg:flex space-x-4">{navOptions}</ul>
            {user && (
              <>
                <button onClick={handleLogOut} className="btn btn-ghost">
                  Log Out
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
