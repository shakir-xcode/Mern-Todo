import React, { useState, useEffect } from "react";
import { updateTask } from "../api/taskApi";
import useAuth from "../context/AuthContext";
import { useTask } from "../context/TaskContext";

const UpdateTaskModal = () => {
  const { isLoggedIn, user } = useAuth();
  const taskCon = useTask();

  const [taskDetail, setTaskDetail] = useState({});

  const handleChange = (e) => {
    setTaskDetail((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleTaskUpdation = () => {
    if (isLoggedIn) {
      updateTask({ ...taskDetail, userId: user._id, email: user.email });
    } else {
      // console.log("you must be logged in");
    }
  };

  useEffect(() => {
    const { id, title, body } = taskCon.updatingTask;
    setTaskDetail({ id, title, body });
  }, [taskCon.updatingTask]);

  return (
    <dialog id="my_modal_updateTask" className={` modal modal-middle`}>
      {/* if there is a button in form, it will close the modal */}
      <div className="modal-box">
        <h3 className="py-4  font-bold text-2xl text-center">UpdateTask</h3>
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
              value={taskDetail.title}
              placeholder="Title"
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs "
            />

            <input
              type="text"
              name="body"
              value={taskDetail.body}
              placeholder="Body"
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <form method="dialog">
              <button
                onClick={handleTaskUpdation}
                className="font-semibold input input-primary btn-primary w-full max-w-xs cursor-pointer "
              >
                Update Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateTaskModal;
