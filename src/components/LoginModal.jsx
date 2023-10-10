import React, { useState } from "react";
import { loginUser } from "../api/authentication";

const LoginModal = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginInfo((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleLogin = () => {
    // alert(loginInfo.email + " ----- " + loginInfo.password);
    loginUser(loginInfo);
  };

  return (
    <dialog id="my_modal_login" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="py-4  font-bold text-2xl text-center">Login</h3>
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
            ✕
          </button>
        </form>
        <div className="modal-action">
          <div
            method="dialog"
            className=" flex flex-col gap-4 w-full items-center"
          >
            {/* if there is a button in form, it will close the modal */}
            <form className="flex flex-col gap-4 items-center w-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                value={loginInfo.email}
                onChange={handleChange}
                className="input input-bordered input-primary w-full max-w-xs "
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginInfo.password}
                onChange={handleChange}
                autoComplete="current-password"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </form>
            <button
              onClick={handleLogin}
              className="font-semibold input input-primary btn-primary w-full max-w-xs cursor-pointer "
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default LoginModal;
