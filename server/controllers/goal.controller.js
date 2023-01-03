const Goal = require("../models/goal.model");
const User = require("../models/user.model");

const getUserGoals = async (req, res) => {
  const { id } = req.user;

  const goals = await Goal.find({ user: id });
  res.status(200).json(goals);
};

const createGoal = async (req, res) => {
  const { text } = req.body;
  const { id } = req.user;

  if (!text) {
    return res
      .status(400)
      .json({ msg: "por favor ingrese título y descripción" });
  }

  const newGoal = new Goal({
    user: id,
    title: text,
  });

  const goal = await newGoal.save();
  res.status(201).json(goal);
};

const updateGoal = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.user;

  if (!title && !description) {
    return res
      .status(400)
      .json({ msg: "por favor ingrese título y descripción" });
  }

  const goal = await Goal.findByIdAndUpdate(req.params.id);

  if (!goal) {
    return res.status(404).json({ msg: "no se encontró el objetivo" });
  }

  const user = await User.findById(id);

  if (goal.user.toString() !== user._id.toString()) {
    return res.status(401).json({ msg: "no autorizado" });
  }

  if (!user) {
    return res.status(401).json({ msg: "usuario no encontrado" });
  }

  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    {
      title,
      description,
    },
    { new: true }
  );

  res.status(200).json(updatedGoal);
};

const deleteGoal = async (req, res) => {
  const { id } = req.user;
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    return res.status(404).json({ msg: "no se encontró el objetivo" });
  }

  if (!req.params.id) {
    return res.status(400).json({ msg: "ingrese id del objetivo" });
  }

  const user = await User.findById(id);

  if (goal.user.toString() !== user._id.toString()) {
    return res.status(401).json({ msg: "no autorizado" });
  }

  if (!user) {
    return res.status(401).json({ msg: "usuario no encontrado" });
  }

  await goal.remove();
  res.status(200).json({ msg: "objetivo eliminado" });
};

module.exports = {
  getUserGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
