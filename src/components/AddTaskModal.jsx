import React from "react";

const AddTaskModal = () => {
  const handleTaskCreation = () => {};

  return (
    <dialog id="my_modal_addTask" className="modal modal-middle">
      <div className="modal-box">
        <h3 className="py-4  font-bold text-2xl text-center">Add Task</h3>
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
              type="text"
              placeholder="Title"
              className="input input-bordered input-primary w-full max-w-xs "
            />

            <input
              type="text"
              placeholder="Body"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <button
              onClick={handleTaskCreation}
              className="font-semibold input input-primary btn-primary w-full max-w-xs cursor-pointer "
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default AddTaskModal;
