const getAllGoals = async (req, res) => {
  res.send("get all goals");
};

const createGoal = async (req, res) => {
  res.send("create goal");
};

const updateGoal = async (req, res) => {
  res.send("update goal");
};

const deleteGoal = async (req, res) => {
  res.send("delete goal");
};

module.exports = {
  getAllGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
