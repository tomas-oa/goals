const router = require("express").Router();
const {
  getUser,
  registerUser,
  loginUser,
} = require("../controllers/user.controller");
const { protect } = require("../middleware/auth.middleware");

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/me", protect, getUser);

module.exports = router;
