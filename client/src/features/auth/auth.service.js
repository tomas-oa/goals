import axios from "axios";

const API_URL = "http://localhost:3000/api/users/";

const register = async (data) => {
  const response = await axios.post(API_URL + "register", data);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = async () => {
  localStorage.removeItem("user");
};

const login = async (data) => {
  const response = await axios.post(API_URL + "login", data);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
