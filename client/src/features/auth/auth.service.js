import axios from "axios";

const API_URL = "http://localhost:3000/api/users/register";

const register = async (data) => {
  const response = await axios.post(API_URL, data);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
};

export default authService;
