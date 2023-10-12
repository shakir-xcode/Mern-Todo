import React, { useContext, useState, useRef } from "react";

const TaskContext = React.createContext();

export const useTask = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [myTasks, setMyTasks] = useState([]);
  const [updatingTask, setUpdatingTask] = useState({
    title: "test",
    body: "test",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    code: 0,
    message: "",
    isActive: false,
  });

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
