import axios from "axios";

const API_URL = "http://localhost:3000/api/goals";

const createGoal = async (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.post(API_URL, data, config);

  return res.data;
};

const getGoals = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.get(API_URL, config);

  return res.data;
};

const goalService = {
  createGoal,
  getGoals,
};

export default goalService;
