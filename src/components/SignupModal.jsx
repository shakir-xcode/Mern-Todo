import React, { useState } from "react";
import { signUpUser } from "../api/authentication";

const SignupModal = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignUpInfo((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSignup = () => {
    signUpUser(signUpInfo);
  };

  return (
    // {/* Open the modal using document.getElementById('ID').showModal() method */}
    // {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
    <dialog id="my_modal_signup" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
            ✕
          </button>
        </form>
        <h3 className="font-semibold text-lg ">
          Sign up and start using the app now..!
        </h3>
        <h4 className="py-4 font-semibold text-center text-2xl">Sign Up</h4>
        <div className="modal-action">
          <div className=" flex flex-col gap-4 w-full items-center">
            {/* if there is a button in form, it will close the modal */}
            <form
              className="flex flex-col gap-4 items-center w-full"
              method="dialog"
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                value={setSignUpInfo.email}
                onChange={handleChange}
                className="input input-bordered input-primary w-full max-w-xs "
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="username"
                value={setSignUpInfo.username}
                onChange={handleChange}
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                value={setSignUpInfo.password}
                onChange={handleChange}
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </form>
            <button
              onClick={handleSignup}
              className="font-semibold input input-primary btn-primary w-full max-w-xs cursor-pointer "
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default SignupModal;
