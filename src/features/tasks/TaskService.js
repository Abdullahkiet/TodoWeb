import axios from "axios";

const API_URL = "https://todopndc.herokuapp.com/api/tasks/";
const API_URL_Delete = "https://todopndc.herokuapp.com/api/tasks/delete/";

// Create new task
const createTask = async (taskData) => {
  const config = { headers: {} };

  const response = await axios.post(API_URL, taskData, config);

  return response.data;
};

// Get tasks
const getTasks = async () => {
  const config = {
    headers: {},
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete task
const deleteTask = async (taskId) => {
  const config = {
    headers: {},
  };
  const response = await axios.delete(API_URL_Delete, {
    headers: {},
    data: {
      id: taskId,
    },
  });

  return response.data;
};

const taskService = {
  createTask,
  getTasks,
  deleteTask,
};

export default taskService;
