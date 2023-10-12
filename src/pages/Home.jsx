import React, { useEffect } from "react";
import deleteIcon from "../assets/delete_icon.svg";
import editIcon from "../assets/edit_icon.svg";
import useAuth from "../context/AuthContext";
import { initializeAuth } from "../api/authentication";
import { initializeTask, deleteTask } from "../api/taskApi";
import { useTask } from "../context/TaskContext";
import { getAllTasks } from "../api/taskApi";
import SignupModal from "../components/SignupModal";
import LoginModal from "../components/LoginModal";
import AddTaskModal from "../components/AddTaskModal";
import UpdateTaskModal from "../components/UpdateTaskModal";

const Home = () => {
  const authCon = useAuth();
  initializeAuth(authCon);

  const taskCon = useTask();
  initializeTask(taskCon);

  useEffect(() => {
    if (authCon.user?._id) getAllTasks(authCon.user._id);
  }, [authCon.user]);

  return (
    <div className=" ">
      <SignupModal />
      <LoginModal />
      <AddTaskModal />
      <UpdateTaskModal />
      <div className=" max-w-lg h-[540px]  mx-auto flex flex-col items-center mt-1 px-5 py-3  ">
        <button
          onClick={() =>
            document.getElementById("my_modal_addTask").showModal()
          }
          className="btn btn-outline btn-primary"
        >
          Add Task
        </button>
        <div className=" overflow-y-scroll scrollbar-hide w-full h-full mx-auto my-5">
          {taskCon.myTasks.length !== 0 ? (
            taskCon.myTasks.map((item) => {
              return (
                <div key={item._id} className="my-3">
                  <div
                    tabIndex="0"
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title text-xl font-medium flex justify-between">
                      <p>{item.title}</p>
                    </div>
                    <div className="collapse-content flex flex-col gap-2">
                      <p>
                        {item.body} <span>{item._id}</span>
                      </p>
                      <span className=" self-end">
                        <img
                          onClick={() => {
                            taskCon.setUpdatingTask({
                              id: item._id,
                              title: item.title,
                              body: item.body,
                              email: authCon.user.email,
                            });
                            document
                              .getElementById("my_modal_updateTask")
                              .showModal();
                          }}
                          title="edit task"
                          className="w-5 inline cursor-pointer"
                          src={editIcon}
                          alt="edit icon"
                        />
                        <img
                          onClick={() => {
                            deleteTask(item._id, authCon.user.email);
                          }}
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
            })
          ) : (
            <h2 className="text-2xl text-center font-semibold">No Tasks Yet</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
