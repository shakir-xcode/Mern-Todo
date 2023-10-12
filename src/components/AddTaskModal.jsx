import React, { useState } from "react";
import { createTask } from "../api/taskApi";
import useAuth from "../context/AuthContext";

const AddTaskModal = () => {
  const { isLoggedIn, user } = useAuth();

  const [taskDetail, setTaskDetail] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    setTaskDetail((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleTaskCreation = () => {
    if (isLoggedIn) createTask({ ...taskDetail, email: user.email });
    else {
      // console.log("you must be logged in");
    }
  };

  return (
    <dialog id="my_modal_addTask" className={` modal modal-middle`}>
      {/* if there is a button in form, it will close the modal */}
      <div className="modal-box">
        <h3 className="py-4  font-bold text-2xl text-center">Add Task</h3>
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
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs "
            />

            <input
              type="text"
              name="body"
              placeholder="Body"
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <form method="dialog">
              <button
                onClick={handleTaskCreation}
                className="font-semibold input input-primary btn-primary w-full max-w-xs cursor-pointer "
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default AddTaskModal;
