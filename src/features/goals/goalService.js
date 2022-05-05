import axios from "axios";

const API_URL = "https://todopndc.herokuapp.com/api/tasks/";
const API_URLK = "http://localhost:8080/api/tasks/";

// Create new goal
const createGoal = async (goalData) => {
  const config = { headers: {} };

  const response = await axios.post(API_URLK, goalData, config);

  return response.data;
};

// Get user goals
const getGoals = async () => {
  const config = {
    headers: {},
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user goal
const deleteGoal = async (goalId) => {
  const config = {
    headers: {},
  };

  const response = await axios.delete(API_URL + goalId, config);

  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
};

export default goalService;
