const router = require("express").Router();
const {
  getUser,
  registerUser,
  loginUser,
} = require("../controllers/user.controller");

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/me", getUser);

module.exports = router;
