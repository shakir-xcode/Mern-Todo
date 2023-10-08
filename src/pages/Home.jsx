import React from "react";
import deleteIcon from "../assets/delete_icon.svg";
import editIcon from "../assets/edit_icon.svg";

const Home = () => {
  const taskList = [
    "go to gym",
    "watch movie",
    "study",
    "go to gym",
    "watch movie",
    "go to gym",
    "watch movie",
    "go to gym",
    "watch movie",
    "go to gym",
  ];

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <div className=" ">
      <div className=" max-w-lg h-[540px]  mx-auto flex flex-col items-center mt-1 px-5 py-3  ">
        <button
          onClick={() =>
            document.getElementById("my_modal_addTask").showModal()
          }
          class="btn btn-outline btn-primary"
        >
          Add Task
        </button>
        <div className=" overflow-y-scroll scrollbar-hide w-full h-full mx-auto my-5">
          {taskList.map((item, index) => {
            return (
              <div key={index} className="my-3">
                <div
                  tabindex="0"
                  class="collapse collapse-arrow border border-base-300 bg-base-200"
                >
                  <div class="collapse-title text-xl font-medium flex justify-between">
                    <p>{item}</p>
                  </div>
                  <div class="collapse-content flex flex-col gap-2">
                    <p>
                      tabindex="0" attribute is necessary to make the div
                      focusable
                    </p>
                    <span className=" self-end">
                      <img
                        onClick={handleEdit}
                        title="edit task"
                        className="w-5 inline cursor-pointer"
                        src={editIcon}
                        alt="edit icon"
                      />
                      <img
                        onClick={handleDelete}
                        title="delete task"
                        className="w-5 inline ml-3 cursor-pointer"
                        src={deleteIcon}
                        alt="delete icon"
                      />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
