import React, { useContext } from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 ml-3">
        <a className="  normal-case text-xl">Todo List</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              onClick={() =>
                document.getElementById("my_modal_signup").showModal()
              }
            >
              Sign Up
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                document.getElementById("my_modal_login").showModal()
              }
            >
              Log In
            </a>
          </li>
        </ul>
      </div>
      <div className="avatar">
        <div className="w-10 mx-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
