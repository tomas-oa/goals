const router = require("express").Router();
const {
  getAllGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goal.controller");

router.route("/").get(getAllGoals).post(createGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
