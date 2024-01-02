import React, { useContext, useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(true);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content px-20 mx-auto justify-between">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Banglar Food
        </Link>
        <div onClick={() => setOpen(!open)} className="md:hidden ">
          <span>
            {open === true ? (
              <FaBars className="text-2xl"></FaBars>
            ) : (
              <FaTimes className="text-2xl"></FaTimes>
            )}
          </span>
        </div>
        <div
          className={`flex flex-col md:flex-row gap-5 transition  ${
            open
              ? " -left-full absolute md:static"
              : "absolute md:static top-16 w-1/2 left-0 bg-slate-600 md:bg-inherit md:w-auto p-4 transition"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-5">
            <ActiveLink to="/" className="btn btn-ghost normal-case text-xl">
              Home
            </ActiveLink>
            <ActiveLink
              to="/blog"
              className="btn btn-ghost normal-case text-xl"
            >
              Blog
            </ActiveLink>
          </div>
          <div className="flex flex-col md:flex-row gap-5 items-center">
            {user && (
              <div>
                {user.photoURL ? (
                  <img
                    className="w-14 rounded-full"
                    title={user?.displayName}
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <FaUserCircle
                    title={user?.displayName}
                    className="text-2xl"
                  />
                )}
              </div>
            )}

            {user ? (
              <button onClick={handleLogOut} className="btn btn-secondary">
                Logout
              </button>
            ) : (
              <ActiveLink to="/login">Login</ActiveLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
