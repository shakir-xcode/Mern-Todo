import React from "react";
import useAuth from "../context/AuthContext";

const LoadingModal = () => {
  const { isLoading } = useAuth();
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
      <dialog id="my_modal_loading" className="modal ">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            {isLoading ? (
              ""
            ) : (
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            )}
          </form>
          <h3 className="font-bold text-lg text-center">hello</h3>
          <div className="text-center">
            {isLoading ? (
              <span className="loading loading-infinity loading-lg text-primary"></span>
            ) : (
              ""
            )}
          </div>
          <p className="py-3 text-center">Please wait</p>
        </div>
      </dialog>
    </div>
  );
};

export default LoadingModal;
