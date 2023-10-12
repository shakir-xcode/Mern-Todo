import React from "react";
import useAuth from "../context/AuthContext";
import { useTask } from "../context/TaskContext";
import userProfile from "../assets/user_profile.png";

const Navbar = () => {
  const { user, isLoggedIn, setUser, setIsLoggedIn } = useAuth();
  const { setMyTasks } = useTask();
  const handleLogOut = () => {
    setIsLoggedIn(false);
    setUser(null);
    setMyTasks([]);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 ml-3">
        <a className="  normal-case text-xl">Todo List</a>
      </div>
      <div className="flex-none md:mr-10">
        <ul className="menu menu-horizontal px-1">
          {isLoggedIn ? (
            ""
          ) : (
            <li>
              <a
                onClick={() =>
                  document.getElementById("my_modal_signup").showModal()
                }
              >
                Sign Up
              </a>
            </li>
          )}
          <li>
            {isLoggedIn ? (
              <a
                onClick={() => {
                  handleLogOut();
                }}
              >
                Log Out
              </a>
            ) : (
              <a
                onClick={() =>
                  document.getElementById("my_modal_login").showModal()
                }
              >
                Log In
              </a>
            )}
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <div className="md:mr-10">
          <div className="avatar">
            <div className="w-10 mx-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userProfile} alt="user profile" />
            </div>
          </div>
          <p className=" text-primary font-semibold">{user.username}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
