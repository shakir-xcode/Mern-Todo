import axios from "axios";

let taskStateManager;

export function initializeTask(values) {
  taskStateManager = values;
}

export const createTask = ({ title, body, email }) => {
  const url = "http://localhost:4000/list/addTask";
  taskStateManager.setIsLoading(true);
  axios
    .post(url, { title, body, email })
    .then((res) => {
      const { _id, title, body } = res.data;
      if (res.status === 200) {
        taskStateManager.setMyTasks((pre) => [{ _id, title, body }, ...pre]);
        taskStateManager.setMessage({
          code: 200,
          message: "Task Added",
          isActive: true,
        });
      } else {
        taskStateManager.setMessage({
          code: 400,
          message: "something went wrong",
          isActive: true,
        });
      }
    })
    .catch((err) => {
      taskStateManager.setMessage({
        code: 400,
        message: "something went wrong",
        isActive: true,
      });
    })
    .finally(() => {
      taskStateManager.setIsLoading(false);
    });
};

export const getAllTasks = (id) => {
  const url = `http://localhost:4000/list/allTasks/${id}`;
  taskStateManager.setIsLoading(true);
  axios
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        taskStateManager.setMyTasks(() => res.data);
      } else {
        taskStateManager.setMessage({
          code: 400,
          message: "something went wrong",
          isActive: true,
        });
      }
    })
    .catch((err) => {
      taskStateManager.setMessage({
        code: 400,
        message: "something went wrong",
        isActive: true,
      });
    })
    .finally(() => {
      taskStateManager.setIsLoading(false);
    });
};

export const updateTask = ({ id, title, body, userId, email }) => {
  const url = `http://localhost:4000/list/updateTask/${id}`;
  taskStateManager.setIsLoading(true);
  axios
    .put(url, { title, body, userId, email })
    .then((res) => {
      if (res.status === 200) {
        taskStateManager.setMessage({
          code: 200,
          message: "Task Added",
          isActive: true,
        });
        taskStateManager.setMyTasks([...res.data]);
      } else {
        taskStateManager.setMessage({
          code: 400,
          message: "something went wrong",
          isActive: true,
        });
      }
    })
    .catch((err) => {
      taskStateManager.setMessage({
        code: 400,
        message: "something went wrong",
        isActive: true,
      });
    })
    .finally(() => {
      taskStateManager.setIsLoading(false);
    });
};

export const deleteTask = (taskId, email) => {
  const url = `http://localhost:4000/list/deleteTask/${taskId}`;
  axios
    .put(url, { email })
    .then((res) => {
      if (res.status === 200) {
        const updatedList = deleteItem(taskId, taskStateManager.myTasks);
        taskStateManager.setMyTasks(updatedList);
      } else {
        taskStateManager.setMessage({
          code: 400,
          message: res.data?.message,
          isActive: true,
        });
      }
    })
    .catch((err) => {
      taskStateManager.setMessage({
        code: 400,
        message: err.response.data?.message,
        isActive: true,
      });
    });
};

const deleteItem = (id, list) => {
  const newList = list.filter((item) => item._id !== id);
  return newList;
};
