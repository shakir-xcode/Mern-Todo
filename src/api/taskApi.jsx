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
        // if 200
        // save res data to context
        // set message to 'Task Added'
        taskStateManager.setMyTasks((pre) => [...pre, { _id, title, body }]);
        taskStateManager.setMessage("Task Added");
      } else {
        // not 200
        // set message to 'Something went wrong'
        taskStateManager.setMessage("something went wrong");
      }

      // console.log("status --- ", res.status);
      // console.log("data ---- ", res.data);
    })
    .catch((err) => {
      // set message to 'Something went wrong'
      taskStateManager.setMessage("something went wrong");

      // console.log(err);
      // console.log("status --- ", err.response.request.status);
      // console.log("data ---- ", err.response.data.message);
    })
    .finally(() => {
      // set isLoading to false
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
        // if 200
        // save res data to context

        taskStateManager.setMyTasks(res.data);
        // taskStateManager.setMessage("Task Added");
      } else {
        // not 200
        // set message to 'Something went wrong'
        taskStateManager.setMessage("something went wrong");
      }

      // console.log("status --- ", res.status);
      // console.log("data ---- ", res.data);
    })
    .catch((err) => {
      // set message to 'Something went wrong'
      taskStateManager.setMessage("something went wrong");

      // console.log(err);
      // console.log("status --- ", err.response.request.status);
      // console.log("data ---- ", err.response.data.message);
    })
    .finally(() => {
      // set isLoading to false
      taskStateManager.setIsLoading(false);
    });
};

export const updateTask = ({ id, title, body, email }) => {
  const url = `http://localhost:4000/list/updateTask/${id}`;
  taskStateManager.setIsLoading(true);
  axios
    .put(url, { title, body, email })
    .then((res) => {
      if (res.status === 200) {
        taskStateManager.setMessage(res.data.message);
      } else {
        // not 200
        // set message to 'Something went wrong'
        taskStateManager.setMessage("something went wrong");
      }

      // console.log("status --- ", res.status);
      // console.log("data ---- ", res.data);
    })
    .catch((err) => {
      // set message to 'Something went wrong'
      taskStateManager.setMessage("something went wrong");

      // console.log(err);
      // console.log("status --- ", err.response.request.status);
      // console.log("data ---- ", err.response.data.message);
    })
    .finally(() => {
      // set isLoading to false
      taskStateManager.setIsLoading(false);
    });
};

export const deleteTask = () => {};
