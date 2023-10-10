import React, { useContext, useState } from "react";

const TaskContext = React.createContext();

export const useTask = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [myTasks, setMyTasks] = useState([
    { _id: 1001, title: "Task 1", body: "some body" },
  ]);
  const [updatingTask, setUpdatingTask] = useState({
    title: "test",
    body: "test",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const values = {
    myTasks,
    setMyTasks,
    updatingTask,
    setUpdatingTask,
    isLoading,
    setIsLoading,
    message,
    setMessage,
  };
  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
};
