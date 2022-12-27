const getUser = (req, res) => {
  res.json({ msg: "get user" });
};

const registerUser = (req, res) => {
  res.json({ msg: "register user" });
};

const loginUser = (req, res) => {
  res.json({ msg: "login user" });
};

module.exports = {
  getUser,
  registerUser,
  loginUser,
};
