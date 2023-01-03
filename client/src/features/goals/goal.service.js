import axios from "axios";

const API_URL = "http://localhost:3000/api/goals";

const createGoal = async (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.post(API_URL, data, config);

  return res.data;
};

const goalService = {
  createGoal,
};

export default goalService;
