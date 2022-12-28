const router = require("express").Router();
const {
  getUserGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goal.controller");
const { protect } = require("../middleware/auth.middleware");

router.route("/").get(protect, getUserGoals).post(protect, createGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
