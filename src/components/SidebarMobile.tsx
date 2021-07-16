import React from "react";
import { NavLink, useHistory, withRouter } from "react-router-dom";
import { House, ListDashes, Shuffle, User } from "phosphor-react";
import { useAuth } from "../contexts/AuthContext";

const SidebarMobile: React.FC = () => {
  const location = useHistory();
  const { pathname } = location.location;
  const { currentUser } = useAuth();

  return (
    <>
      {currentUser ? (
        <div
          className="flex justify-between text-white
        items-center fixed w-11/12 inset-x-0 mx-auto bottom-1 z-10 bg-blueGrey-900 rounded-xl shadow-xl h-16"
        >
          <NavLink className="w-1/4 focus:outline-none" to="/">
            <div className="flex flex-col focus:outline-none items-center">
              <House size={25} className="outline-none" />
              <span className="text-xs mt-0.5">My Lists</span>
            </div>
          </NavLink>
          <NavLink className="w-1/4" to="/trick-list">
            <div className="flex flex-col items-center">
              <ListDashes size={25} className="" />
              <span className="text-xs mt-0.5">Trick list</span>
            </div>
          </NavLink>
          <NavLink className="w-1/4" to="/shuffle">
            <div className="flex flex-col items-center">
              <Shuffle size={25} className="" />
              <span className="text-xs mt-0.5">Shuffle</span>
            </div>
          </NavLink>
          <NavLink className="w-1/4" to="/profile">
            <div className="flex flex-col items-center">
              <User size={25} className="" />
              <span className="text-xs mt-0.5">Profile</span>
            </div>
          </NavLink>
          <div
            className={`bg-white transition-all duration-300 rounded-t-md h-1 w-1/4 absolute bottom-0 z-20 ${
              pathname === "/trick-list"
                ? "left-1/4"
                : pathname === "/shuffle"
                ? "left-2/4"
                : pathname === "/profile"
                ? "left-3/4"
                : "left-0"
            }`}
          ></div>
        </div>
      ) : null}
    </>
  );
};

export default withRouter(SidebarMobile);
