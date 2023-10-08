import React from "react";

const SignupModal = () => {
  const handleSignup = () => {
    alert("hello");
  };

  return (
    // {/* Open the modal using document.getElementById('ID').showModal() method */}
    // {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
    <dialog id="my_modal_signup" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
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
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered input-primary w-full max-w-xs "
            />
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered input-primary w-full max-w-xs"
            />
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
