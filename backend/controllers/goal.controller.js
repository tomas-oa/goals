const Goal = require("../models/goal.model");

const getAllGoals = async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
};

const createGoal = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ msg: "por favor ingrese título y descripción" });
  }

  const newGoal = new Goal({
    title: title,
    description: description,
  });

  const goal = await newGoal.save();
  res.status(201).json(goal);
};

const updateGoal = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;

  if (!title || !description) {
    return res
      .status(400)
      .json({ msg: "por favor ingrese título y descripción" });
  }

  const goal = await Goal.findByIdAndUpdate(id);

  if (!goal) {
    return res.status(404).json({ msg: "no se encontró el objetivo" });
  }

  const updatedGoal = await Goal.findByIdAndUpdate(
    id,
    {
      title,
      description,
    },
    { new: true }
  );

  res.status(200).json(updatedGoal);
};

const deleteGoal = async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findById(id);

  if (!goal) {
    return res.status(404).json({ msg: "no se encontró el objetivo" });
  }

  if (!id) {
    return res.status(400).json({ msg: "ingrese id del objetivo" });
  }

  res.status(200).json({ msg: "objetivo eliminado" });
};

module.exports = {
  getAllGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
