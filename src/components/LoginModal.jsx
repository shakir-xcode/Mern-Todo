import React from "react";

const LoginModal = () => {
  const handleLogin = () => {};

  return (
    <dialog id="my_modal_login" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="py-4  font-bold text-2xl text-center">Login</h3>
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
            ✕
          </button>
        </form>
        <div className="modal-action">
          <div
            method="dialog"
            className=" flex flex-col gap-4 w-full items-center"
          >
            {/* if there is a button in form, it will close the modal */}
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered input-primary w-full max-w-xs "
            />

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered input-primary w-full max-w-xs"
            />
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
