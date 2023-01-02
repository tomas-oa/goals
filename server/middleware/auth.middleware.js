const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const protect = async (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization && authorization.startsWith("Bearer")) {
    try {
      const token = authorization.split(" ")[1];
      const verify = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(verify.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("no autorizado");
    }
  }

  if (!authorization) {
    res.status(401);
    throw new Error("no autorizado - no token");
  }
};

module.exports = { protect };
