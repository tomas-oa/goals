const router = require("express").Router();
const goal = require("./goal.route");
const user = require("./user.route");

router.use("/goals", goal);
router.use("/users", user);

module.exports = router;
